import { create } from 'zustand';
import { City } from '../data/cities';

interface AppState {
  selectedCity: City | null;
  hoveredCity: City | null;
  setSelectedCity: (city: City | null) => void;
  setHoveredCity: (city: City | null) => void;
  isMapLoaded: boolean;
  setMapLoaded: (loaded: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  selectedCity: null,
  hoveredCity: null,
  setSelectedCity: (city) => set({ selectedCity: city }),
  setHoveredCity: (city) => set({ hoveredCity: city }),
  isMapLoaded: false,
  setMapLoaded: (loaded) => set({ isMapLoaded: loaded }),
}));
