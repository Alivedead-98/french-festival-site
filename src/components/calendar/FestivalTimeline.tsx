import React from 'react';
import { motion } from 'motion/react';
import { festivals } from '../../data/festivals';
import { Calendar, MapPin, Tag, Info } from 'lucide-react';

export default function FestivalTimeline() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">

      <div className="relative">
        {/* Central Connecting Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/0 transform md:-translate-x-1/2" />

        <div className="space-y-24 md:space-y-32">
          {festivals.map((festival, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={festival.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)] transform -translate-x-1/2 z-10 border-4 border-[#050505]" />

                {/* Image Section */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className="relative rounded-3xl overflow-hidden group shadow-2xl border border-white/10 aspect-[4/3]">
                    <img
                      src={festival.image}
                      alt={festival.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                      <span className="px-4 py-1.5 bg-black/50 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                        {festival.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 flex flex-col ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                  <div className="inline-flex items-center space-x-2 text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{festival.date}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {festival.name}
                  </h3>

                  <div className={`flex items-center space-x-2 text-white/60 mb-6 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    <MapPin className="w-5 h-5 text-rose-400" />
                    <span className="text-lg font-medium">{festival.city}</span>
                  </div>

                  <p className="text-white/70 text-lg leading-relaxed mb-8">
                    {festival.description}
                  </p>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm w-full">
                    <h4 className="flex items-center space-x-2 text-white font-bold mb-4">
                      <Info className="w-5 h-5 text-purple-400" />
                      <span>Fascinating Facts</span>
                    </h4>
                    <ul className="space-y-3 text-left">
                      {festival.facts.map((fact, i) => (
                        <li key={i} className="flex items-start space-x-3 text-white/70">
                          <span className="text-purple-400 mt-1 shrink-0">•</span>
                          <span className="leading-relaxed">{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
