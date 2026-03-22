import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Map, Calendar, Home, Globe, Volleyball } from 'lucide-react';
import { useTranslation } from '../i18n';

export default function Navigation() {
  const location = useLocation();
  const { t, language, toggleLanguage } = useTranslation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center pointer-events-auto"
    >
      <Link to="/" className="flex items-center space-x-2 group">
        <svg className="w-8 h-6" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="600" fill="#002395" />
          <rect x="300" width="300" height="600" fill="white" />
          <rect x="600" width="300" height="600" fill="#ED2939" />
        </svg>
        <span className="text-white font-bold text-xl tracking-tight">{t('nav.title')}</span>
      </Link>

      <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-1 shadow-2xl">
        <Link
          to="/"
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${location.pathname === '/' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
        >
          <Home className="w-4 h-4" />
          <span>{t('nav.home')}</span>
        </Link>
        <Link
          to="/calendar"
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${location.pathname === '/calendar' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
        >
          <Calendar className="w-4 h-4" />
          <span>{t('nav.calendar')}</span>
        </Link>
        <Link
          to="/map"
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${location.pathname === '/map' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
        >
          <Map className="w-4 h-4" />
          <span>{t('nav.map')}</span>
        </Link>
        <Link
          to="/weather"
          className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${location.pathname === '/weather' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
        >
          <Globe className="w-4 h-4" />
          <span>{t('nav.weather')}</span>
        </Link>
        <button
          type="button"
          onClick={toggleLanguage}
          className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all"
        >
          <Globe className="w-4 h-4" />
          <span className="font-semibold">{language === 'en' ? 'FR' : 'EN'}</span>
        </button>
      </div>
    </motion.nav>
  );
}
