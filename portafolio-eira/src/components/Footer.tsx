export default function Footer() {
  return (
    <footer className="py-6 px-8 bg-white border-t border-[#56A6A6] text-center text-sm">
      <p style={{ fontFamily: 'Poppins, sans-serif' }}>
        Este portafolio es obra de{' '}
        <a
          href="https://amsteradri.github.io/portfolio_adgutier/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#56A6A6] hover:text-[#458585] transition-colors"
        >
          Adrián Gutierrez
        </a>
      </p>
    </footer>
  );
}