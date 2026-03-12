import React, { useRef, useEffect, useState } from 'react';
import Map, { Marker, ViewStateChangeEvent, MapRef } from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { cities, City } from '../../data/cities';
import { useStore } from '../../store/useStore';
import { motion } from 'motion/react';

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

export default function InteractiveMap() {
  const mapRef = useRef<MapRef>(null);
  const { selectedCity, setSelectedCity, hoveredCity, setHoveredCity, setMapLoaded } = useStore();
  const [viewState, setViewState] = useState({
    longitude: 2.2137,
    latitude: 46.2276,
    zoom: 5,
    pitch: 0,
    bearing: 0
  });

  useEffect(() => {
    if (selectedCity && mapRef.current) {
      mapRef.current.flyTo({
        center: selectedCity.coordinates,
        zoom: 10,
        pitch: 45,
        bearing: 0,
        duration: 2000,
        essential: true
      });
    } else if (!selectedCity && mapRef.current) {
      mapRef.current.flyTo({
        center: [2.2137, 46.2276],
        zoom: 5,
        pitch: 0,
        bearing: 0,
        duration: 2000,
        essential: true
      });
    }
  }, [selectedCity]);

  const handleMove = (evt: ViewStateChangeEvent) => {
    if (!selectedCity) {
      setViewState(evt.viewState);
    }
  };

  return (
    <div className={`absolute inset-0 w-full h-full transition-all duration-1000 ${selectedCity ? 'blur-sm opacity-50 scale-105' : 'blur-none opacity-100 scale-100'}`}>
      <Map
        ref={mapRef}
        {...viewState}
        onMove={handleMove}
        mapStyle={MAP_STYLE}
        mapLib={maplibregl}
        onLoad={() => setMapLoaded(true)}
        interactive={!selectedCity}
        dragPan={!selectedCity}
        scrollZoom={!selectedCity}
        doubleClickZoom={!selectedCity}
      >
        {cities.map((city) => (
          <Marker
            key={city.id}
            longitude={city.coordinates[0]}
            latitude={city.coordinates[1]}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelectedCity(city);
            }}
          >
            <motion.div
              className="relative flex items-center justify-center cursor-pointer group"
              onMouseEnter={() => setHoveredCity(city)}
              onMouseLeave={() => setHoveredCity(null)}
              whileHover={{ scale: 1.2 }}
            >
              <div className={`absolute w-4 h-4 rounded-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300 ${selectedCity?.id === city.id ? 'scale-150 bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.8)]' : ''}`} />
              <div className="absolute w-8 h-8 rounded-full border border-white/30 animate-ping" />
              
              {/* Tooltip */}
              <div className={`absolute bottom-full mb-2 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-white text-sm font-medium rounded-lg whitespace-nowrap transition-opacity duration-300 pointer-events-none ${hoveredCity?.id === city.id && !selectedCity ? 'opacity-100' : 'opacity-0'}`}>
                {city.name}
              </div>
            </motion.div>
          </Marker>
        ))}
      </Map>
      
      {/* Subtle grid texture overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwaDIwdjIwSDIwdi0yMHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay"></div>
    </div>
  );
}
