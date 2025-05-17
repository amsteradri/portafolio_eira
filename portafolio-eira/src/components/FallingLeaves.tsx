'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import hoja from '../../public/hoja.svg';

interface LeafProps {
  id: number;
  delay: number;
  size: number;
  speed: number;
  startX: number;
  rotation: number;
}

const Leaf = ({ delay, size, speed, startX, rotation }: LeafProps) => {
  const amplitude = 40 + Math.random() * 60;

  return (
    <motion.div
      className="absolute"
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        left: `${startX}vw`,
      }}
      initial={{ top: '-10%', opacity: 0 }}
      animate={{
        top: '110%',
        opacity: [0, 1, 1, 0],
        x: [
          0,
          amplitude,
          -amplitude,
          amplitude,
          0,
        ],
        rotate: [rotation, rotation + 360],
      }}
      transition={{
        duration: speed,
        delay: delay,
        repeat: Infinity,
        ease: 'easeInOut',
        opacity: {
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        },
        x: {
          duration: speed,
          repeat: Infinity,
          ease: 'easeInOut',
        },
        rotate: {
          duration: speed * 0.8,
          repeat: Infinity,
          ease: 'linear',
        },
      }}
    >
      <Image
        src={hoja}
        alt="hoja"
        fill
        className="object-contain opacity-90"
        style={{
          filter:
            'invert(71%) sepia(18%) saturate(682%) hue-rotate(130deg) brightness(87%) contrast(86%)',
        }}
      />
    </motion.div>
  );
};

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<LeafProps[]>([]);

  useEffect(() => {
    const newLeaves = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10, // Distribución más natural
      size: 1 + Math.random() * 2,
      speed: 12 + Math.random() * 10,
      startX: Math.random() * 100,
      rotation: Math.random() * 360,
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {leaves.map((leaf) => (
        <Leaf
          key={leaf.id}
          id={leaf.id}
          delay={leaf.delay}
          size={leaf.size}
          speed={leaf.speed}
          startX={leaf.startX}
          rotation={leaf.rotation}
        />
      ))}
    </div>
  );
}
