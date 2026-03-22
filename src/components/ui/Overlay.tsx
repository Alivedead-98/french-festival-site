import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '../../store/useStore';
import { Search, X, Map as MapIcon, MapPin } from 'lucide-react';
import { cities } from '../../data/cities';
import { useTranslation } from '../../i18n';

export default function Overlay() {
  const { selectedCity, setSelectedCity, isMapLoaded } = useStore();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="absolute inset-0 pointer-events-none z-30 flex flex-col justify-between p-6 pt-24 md:p-10 md:pt-24">
      {/* Top Bar */}
      <div className="flex justify-end items-start w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pointer-events-auto"
        >
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-white/50 group-focus-within:text-blue-400 transition-colors" />
            </div>
            <input
              type="text"
              placeholder={t('overlay.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-black/40 backdrop-blur-md border border-white/10 text-white text-sm rounded-full pl-10 pr-4 py-2 w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-lg"
            />

            {/* Search Results Dropdown */}
            <AnimatePresence>
              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-2 w-full bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                >
                  {filteredCities.length > 0 ? (
                    <ul className="max-h-60 overflow-y-auto custom-scrollbar py-2">
                      {filteredCities.map(city => (
                        <li
                          key={city.id}
                          onClick={() => {
                            setSelectedCity(city);
                            setSearchQuery('');
                          }}
                          className="px-4 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white transition-colors text-sm flex items-center space-x-2"
                        >
                          <MapPin className="w-4 h-4 text-blue-400" />
                          <span>{city.name}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-4 py-3 text-white/50 text-sm text-center">{t('overlay.noCities')}</div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Bottom Controls */}
      <div className="flex justify-center w-full pointer-events-auto">
        <AnimatePresence>
          {selectedCity && (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCity(null)}
              className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-bold shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all"
            >
              <MapIcon className="w-5 h-5" />
              <span>{t('overlay.returnToMap')}</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Loading Overlay */}
      <AnimatePresence>
        {!isMapLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="w-16 h-16 border-4 border-white/10 border-t-blue-500 rounded-full animate-spin mb-6"></div>
            <h2 className="text-white text-xl font-medium tracking-widest uppercase">{t('overlay.loading')}</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


