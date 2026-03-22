import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '../../store/useStore';
import { MapPin, Users, Landmark, Info, Building, Calendar, Star } from 'lucide-react';
import { useTranslation } from '../../i18n';

export default function CityInfo() {
  const { selectedCity } = useStore();
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {selectedCity && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-0 bottom-0 w-full md:w-[400px] lg:w-[480px] z-20 flex flex-col justify-center p-6 md:p-10 pointer-events-none"
        >
          <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl pointer-events-auto overflow-y-auto max-h-[90vh] custom-scrollbar">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
            >
              {selectedCity.name}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-white/70 text-lg leading-relaxed mb-8"
            >
              {selectedCity.description}
            </motion.p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-start space-x-4"
              >
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">{t('cityInfo.population')}</h4>
                  <p className="text-white font-medium">{selectedCity.population}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-start space-x-4"
              >
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                  <Landmark className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">{t('cityInfo.culturalImportance')}</h4>
                  <p className="text-white text-sm leading-relaxed">{selectedCity.culturalImportance}</p>
                </div>
              </motion.div>

              {selectedCity.landmarks && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                    <Building className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">{t('cityInfo.landmarks')}</h4>
                    <ul className="space-y-2">
                      {selectedCity.landmarks.map((landmark, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-white/80">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>{landmark}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {selectedCity.festivals && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                    <Calendar className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">{t('cityInfo.festivals')}</h4>
                    <ul className="space-y-2">
                      {selectedCity.festivals.map((festival, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-white/80">
                          <span className="text-red-400 mt-1">•</span>
                          <span>{festival}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {selectedCity.famousFor && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                    <Star className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">{t('cityInfo.famousFor')}</h4>
                    <ul className="space-y-2">
                      {selectedCity.famousFor.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-white/80">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="flex items-start space-x-4"
              >
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                  <Info className="w-5 h-5 text-purple-400" />
                </div>
                <div className="w-full">
                  <h4 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">{t('cityInfo.facts')}</h4>
                  <ul className="space-y-2">
                    {selectedCity.facts.map((fact, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-white/80">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
