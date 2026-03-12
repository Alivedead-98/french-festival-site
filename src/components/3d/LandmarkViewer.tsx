import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { useStore } from '../../store/useStore';

export default function LandmarkViewer() {
  const { selectedCity } = useStore();
  const containerRef = useRef<HTMLDivElement>(null);

  if (!selectedCity) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-2/3 z-10 pointer-events-auto bg-black shadow-2xl border-l border-white/10"
    >
      <iframe
        ref={containerRef}
        src={selectedCity.streetViewUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </motion.div>
  );
}
