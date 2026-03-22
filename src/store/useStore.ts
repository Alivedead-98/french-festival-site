import { create } from 'zustand';
import { City } from '../data/cities';

interface AppState {
  selectedCity: City | null;
  hoveredCity: City | null;
  setSelectedCity: (city: City | null) => void;
  setHoveredCity: (city: City | null) => void;
  isMapLoaded: boolean;
  setMapLoaded: (loaded: boolean) => void;
  language: 'en' | 'fr';
  setLanguage: (lang: 'en' | 'fr') => void;
  toggleLanguage: () => void;
}

export const useStore = create<AppState>((set) => ({
  selectedCity: null,
  hoveredCity: null,
  setSelectedCity: (city) => set({ selectedCity: city }),
  setHoveredCity: (city) => set({ hoveredCity: city }),
  isMapLoaded: false,
  setMapLoaded: (loaded) => set({ isMapLoaded: loaded }),
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
  toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'fr' : 'en' })),
}));
