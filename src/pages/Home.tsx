import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Map, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import FestivalTimeline from '../components/calendar/FestivalTimeline';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-[#050505] to-[#050505] opacity-60" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] mix-blend-screen" />

          {/* Subtle Grid Texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwaDIwdjIwSDIwdi0yMHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 drop-shadow-2xl">
              <span className="text-blue-400">Les</span> <span className="text-white">fêtes</span> <span className="text-red-500">Françaises</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-white/70 mb-12 font-medium tracking-wide max-w-2xl mx-auto leading-relaxed"
            >
              Explore the cultural celebrations that define France throughout the year. A cinematic journey through time and tradition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring', bounce: 0.5 }}
            >
              <Link
                to="/map"
                className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300 group"
              >
                <Map className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>Explore France Map</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-white/50"
        >
          <span className="text-xs font-semibold uppercase tracking-widest">Scroll to Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="relative bg-[#050505] pb-24">
        <FestivalTimeline />
      </section>
    </div>
  );
}
