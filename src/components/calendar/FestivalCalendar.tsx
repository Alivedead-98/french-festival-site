import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Festival, festivals, FestivalCategory } from '../../data/festivals';
import FestivalModal from '../festival/FestivalModal';
import { Sparkles, Filter } from 'lucide-react';
import { useTranslation } from '../../i18n';

const CATEGORIES: FestivalCategory[] = [
  'Music', 'Food & Wine', 'Film', 'National Holidays', 'Cultural Traditions', 'Sports'
];

export default function FestivalCalendar() {
  const { t, getMonthNames, translateCategory } = useTranslation();
  const months = getMonthNames();
  const [selectedCategory, setSelectedCategory] = useState<FestivalCategory | null>(null);
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);

  const filteredFestivals = useMemo(() => {
    return festivals.filter((festival) => {
      if (selectedCategory !== null && festival.category !== selectedCategory) return false;
      return true;
    });
  }, [selectedCategory]);

  const getFestivalsForMonth = (monthNum: number) => {
    return filteredFestivals.filter(f => f.month === monthNum);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24 relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 space-y-6 md:space-y-0">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            {t('calendar.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl"
          >
            {t('calendar.subtitle')}
          </motion.p>
        </div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center space-x-4 bg-black/40 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-2xl"
        >
          <div className="flex items-center space-x-2 px-3 border-r border-white/10">
            <Filter className="w-4 h-4 text-white/50" />
            <span className="text-sm font-medium text-white/70">{t('calendar.filter')}</span>
          </div>
          <select
            className="bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer appearance-none pr-4"
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value as FestivalCategory || null)}
          >
            <option value="" className="bg-black text-white">{t('calendar.allCategories')}</option>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat} className="bg-black text-white">{translateCategory(cat)}</option>
            ))}
          </select>
        </motion.div>
      </div>

      {/* Calendar Grid - 3x4 for 12 months */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {months.map((monthName, index) => {
          const monthNum = index + 1;
          const monthFestivals = getFestivalsForMonth(monthNum);
          const hasFestivals = monthFestivals.length > 0;

          return (
            <motion.div
              key={monthName}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className={`relative rounded-3xl border overflow-hidden transition-all duration-300 group
                ${hasFestivals
                  ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 opacity-50'
                }
              `}
            >
              {/* Background Glow */}
              {hasFestivals && (
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-colors" />
              )}

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Month Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {monthName}
                  </h3>
                  <div className="h-1 w-8 bg-gradient-to-r from-blue-500 via-white to-red-500 rounded-full" />
                </div>

                {/* Festivals List */}
                <div className="space-y-2 flex-grow">
                  <AnimatePresence>
                    {monthFestivals.map((festival, idx) => (
                      <motion.div
                        key={festival.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => setSelectedFestival(festival)}
                        className="p-3 rounded-xl bg-black/40 border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all cursor-pointer group/festival"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-grow">
                            <p className="text-sm font-semibold text-white group-hover/festival:text-blue-300 transition-colors line-clamp-2">
                              {festival.name}
                            </p>
                            <p className="text-xs text-white/50 mt-1">{festival.date}</p>
                          </div>
                          <Sparkles className="w-4 h-4 text-blue-400/60 group-hover/festival:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {!hasFestivals && (
                    <div className="text-white/40 text-sm italic py-8 text-center flex items-center justify-center h-full">
                      {t('calendar.noFestivals')}
                    </div>
                  )}
                </div>

                {/* Festival Count Badge */}
                {hasFestivals && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-xs font-medium text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                      {monthFestivals.length} {monthFestivals.length === 1 ? t('calendar.festival') : t('calendar.festivals')}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Festival Detail Modal */}
      <FestivalModal
        festival={selectedFestival}
        onClose={() => setSelectedFestival(null)}
      />
    </div>
  );
}
