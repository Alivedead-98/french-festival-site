import React from 'react';
import InteractiveMap from '../components/map/InteractiveMap';
import CityInfo from '../components/ui/CityInfo';
import LandmarkViewer from '../components/3d/LandmarkViewer';
import Overlay from '../components/ui/Overlay';
import Navigation from '../components/Navigation';

export default function MapPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050505] font-sans selection:bg-blue-500/30">
      <Navigation />
      
      {/* Background Map Layer */}
      <InteractiveMap />

      {/* Split Screen Content */}
      <div className="absolute inset-0 pointer-events-none flex flex-col md:flex-row pt-20">
        <CityInfo />
        <LandmarkViewer />
      </div>

      {/* UI Overlay */}
      <Overlay />
    </div>
  );
}
