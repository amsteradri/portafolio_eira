'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import soloPatita from '../../public/solo-una-patita.svg';

interface Footprint {
  id: number;
  x: number;
  y: number;
  isLeft: boolean;
  angle: number;
}

export default function FootprintTrail() {
  const [footprints, setFootprints] = useState<Footprint[]>([]);
  const [lastPrintTime, setLastPrintTime] = useState(0);
  const [isLeft, setIsLeft] = useState(true);
  const [lastPosition, setLastPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();

      if (lastPosition) {
        const dx = e.clientX - lastPosition.x;
        const dy = e.clientY - lastPosition.y;

        if ((Math.abs(dx) > 5 || Math.abs(dy) > 5) && now - lastPrintTime > 300) {
          const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90; // el +90 es necesario porque el SVG está mirando hacia arriba

          const newFootprint: Footprint = {
            id: now,
            x: e.clientX,
            y: e.clientY,
            isLeft,
            angle,
          };

          setFootprints((prev) => [...prev, newFootprint]);
          setLastPrintTime(now);
          setIsLeft((prev) => !prev);
          setLastPosition({ x: e.clientX, y: e.clientY });

          setTimeout(() => {
            setFootprints((prev) => prev.filter((fp) => fp.id !== newFootprint.id));
          }, 2000);
        }
      } else {
        // primera vez: establecer posición inicial
        setLastPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [lastPrintTime, isLeft, lastPosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <AnimatePresence>
        {footprints.map((footprint) => (
          <motion.div
            key={footprint.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute"
            style={{
              left: footprint.x - 15,
              top: footprint.y - 15,
              width: '30px',
              height: '30px',
            }}
          >
            <Image
              src={soloPatita}
              alt="huella"
              fill
              className="object-contain"
              style={{
                opacity: 0.8,
                transform: `rotate(${footprint.angle}deg) scaleX(${footprint.isLeft ? -1 : 1})`,
                transformOrigin: 'center center',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
