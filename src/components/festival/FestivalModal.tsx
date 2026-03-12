import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, Info, Tag } from 'lucide-react';
import { Festival } from '../../data/festivals';

interface FestivalModalProps {
  festival: Festival | null;
  onClose: () => void;
}

export default function FestivalModal({ festival, onClose }: FestivalModalProps) {
  return (
    <AnimatePresence>
      {festival && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full text-white/70 hover:text-white transition-all border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Header */}
            <div className="relative h-64 w-full shrink-0">
              <img
                src={festival.image}
                alt={festival.name}
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                    {festival.category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  {festival.name}
                </h2>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3 text-white/80">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <Calendar className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Date</p>
                    <p className="font-medium">{festival.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <MapPin className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Location</p>
                    <p className="font-medium">{festival.city}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center space-x-2">
                    <Info className="w-5 h-5 text-blue-400" />
                    <span>About the Festival</span>
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {festival.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
                    <Tag className="w-5 h-5 text-purple-400" />
                    <span>Interesting Facts</span>
                  </h3>
                  <ul className="space-y-3">
                    {festival.facts.map((fact, index) => (
                      <li key={index} className="flex items-start space-x-3 text-white/70">
                        <span className="text-purple-400 mt-1 shrink-0">•</span>
                        <span className="leading-relaxed">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
