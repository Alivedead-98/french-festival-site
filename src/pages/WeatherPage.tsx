import React, { useEffect, useMemo, useState } from 'react';
import Navigation from '../components/Navigation';
import Overlay from '../components/ui/Overlay';
import { useTranslation } from '../i18n';
import { cities, City } from '../data/cities';
import { Cloud, CloudDrizzle, CloudSnow, Sun } from 'lucide-react';
import Map, { Marker } from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface ApiWeatherData {
    temperature: number;
    windspeed: number;
    relativehumidity: number;
    weathercode: number;
}

interface ApiDailyData {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
}

interface WeatherState {
    current: ApiWeatherData;
    daily: ApiDailyData;
}

const weatherCodeMap: Record<number, { condition: string; icon: string }> = {
    0: { condition: 'Clear', icon: 'sun' },
    1: { condition: 'Mainly Clear', icon: 'sun' },
    2: { condition: 'Partly Cloudy', icon: 'cloud' },
    3: { condition: 'Overcast', icon: 'cloud' },
    45: { condition: 'Fog', icon: 'cloud' },
    48: { condition: 'Depositing Rime Fog', icon: 'cloud' },
    51: { condition: 'Light Drizzle', icon: 'drizzle' },
    53: { condition: 'Moderate Drizzle', icon: 'drizzle' },
    55: { condition: 'Dense Drizzle', icon: 'drizzle' },
    61: { condition: 'Slight Rain', icon: 'cloud' },
    63: { condition: 'Moderate Rain', icon: 'cloud' },
    65: { condition: 'Heavy Rain', icon: 'cloud' },
    71: { condition: 'Snow', icon: 'snow' },
    75: { condition: 'Heavy Snow', icon: 'snow' },
    80: { condition: 'Rain Showers', icon: 'cloud' },
    81: { condition: 'Heavy Rain Showers', icon: 'cloud' },
    82: { condition: 'Violent Rain Showers', icon: 'cloud' },
};

const weatherIcon = (icon: string) => {
    switch (icon) {
        case 'sun':
            return <Sun className="w-5 h-5 text-amber-400" />;
        case 'cloud':
            return <Cloud className="w-5 h-5 text-slate-200" />;
        case 'drizzle':
            return <CloudDrizzle className="w-5 h-5 text-cyan-200" />;
        case 'snow':
            return <CloudSnow className="w-5 h-5 text-indigo-200" />;
        default:
            return <Cloud className="w-5 h-5 text-slate-200" />;
    }
};

export default function WeatherPage() {
    const { t } = useTranslation();
    const [query, setQuery] = useState('');
    const [selectedCityId, setSelectedCityId] = useState(cities[0]?.id ?? '');
    const [weatherState, setWeatherState] = useState<WeatherState | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const selectedCity = useMemo<City | undefined>(() => cities.find((c) => c.id === selectedCityId), [selectedCityId]);

    const filteredCities = useMemo(() => {
        const filter = query.trim().toLowerCase();
        if (!filter) return cities;
        return cities.filter((city) => city.name.toLowerCase().includes(filter));
    }, [query]);

    const cachedWeather = React.useRef<Record<string, WeatherState>>({});

    useEffect(() => {
        if (!selectedCity) return;

        if (cachedWeather.current[selectedCity.id]) {
            setWeatherState(cachedWeather.current[selectedCity.id]);
            setError(null);
            setIsLoading(false);
            return;
        }

        const [lon, lat] = selectedCity.coordinates;
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;

        let active = true;
        setIsLoading(true);
        setError(null);

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error('Weather server error');
                return res.json();
            })
            .then((data) => {
                if (!active) return;
                if (!data.current_weather || !data.daily) throw new Error('Incomplete weather data');

                const state: WeatherState = {
                    current: {
                        temperature: data.current_weather.temperature,
                        windspeed: data.current_weather.windspeed,
                        relativehumidity: data.current_weather.relativehumidity ?? 0,
                        weathercode: data.current_weather.weathercode,
                    },
                    daily: {
                        time: data.daily.time,
                        temperature_2m_max: data.daily.temperature_2m_max,
                        temperature_2m_min: data.daily.temperature_2m_min,
                        weathercode: data.daily.weathercode,
                    },
                };

                cachedWeather.current[selectedCity.id] = state;
                setWeatherState(state);
                setIsLoading(false);
            })
            .catch((err) => {
                if (!active) return;
                setError(err.message || 'Unknown error');
                setIsLoading(false);
            });

        return () => {
            active = false;
        };
    }, [selectedCity]);

    const weatherDisplay = useMemo(() => {
        if (!weatherState) return null;

        const currentCode = weatherState.current.weathercode;
        const mapping = weatherCodeMap[currentCode] ?? { condition: 'Unknown', icon: 'cloud' };

        return {
            temp: Math.round(weatherState.current.temperature),
            feelsLike: Math.round(weatherState.current.temperature),
            humidity: Math.round(weatherState.current.relativehumidity),
            wind: Math.round(weatherState.current.windspeed),
            condition: mapping.condition,
            icon: mapping.icon,
        };
    }, [weatherState]);

    const forecast = useMemo(() => {
        if (!weatherState) return [];

        return weatherState.daily.time.slice(0, 3).map((day, idx) => {
            const code = weatherState.daily.weathercode[idx];
            const mapping = weatherCodeMap[code] ?? { condition: 'Unknown', icon: 'cloud' };
            const averageTemp = Math.round((weatherState.daily.temperature_2m_max[idx] + weatherState.daily.temperature_2m_min[idx]) / 2);
            return { day, temp: averageTemp, icon: mapping.icon, condition: mapping.condition };
        });
    }, [weatherState]);

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white selection:bg-blue-500/30">
            <Navigation />
            <main className="pt-24 px-5 md:px-10 lg:px-20">
                <section className="max-w-5xl mx-auto p-6 bg-black/40 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-xl">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('weatherPage.title')}</h1>
                    <p className="text-white/80 mb-6">{t('weatherPage.description')}</p>

                    <div className="mb-4 grid gap-4 lg:grid-cols-[2fr_3fr]">
                        <div className="space-y-3">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={t('weatherPage.searchPlaceholder')}
                                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-white outline-none focus:border-cyan-400"
                            />
                            <select
                                value={selectedCityId}
                                onChange={(e) => setSelectedCityId(e.target.value)}
                                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-white outline-none"
                            >
                                {filteredCities.map((city) => (
                                    <option key={city.id} value={city.id} className="text-black">
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                            {selectedCity ? (
                                <>
                                    <p className="font-semibold">{selectedCity.name}</p>
                                    <p className="text-white/70 text-sm">{selectedCity.region ?? ''}</p>
                                </>
                            ) : (
                                <p className="text-white/70">{t('weatherPage.chooseCity')}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-2">
                        <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                            {isLoading && <p>{t('weatherPage.loading')}</p>}
                            {error && <p className="text-red-400">{t('weatherPage.error')}: {error}</p>}

                            {!isLoading && !error && weatherDisplay && (
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-xl font-bold">{t('weatherPage.current')}</h2>
                                        {weatherIcon(weatherDisplay.icon)}
                                    </div>
                                    <p className="text-sm text-white/70">{weatherDisplay.condition}</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="rounded-xl bg-black/30 p-3">
                                            <p className="text-xs text-white/70">{t('cityWeather.temperature')}</p>
                                            <p className="text-xl font-semibold">{weatherDisplay.temp}°C</p>
                                        </div>
                                        <div className="rounded-xl bg-black/30 p-3">
                                            <p className="text-xs text-white/70">{t('cityWeather.feelsLike')}</p>
                                            <p className="text-xl font-semibold">{weatherDisplay.feelsLike}°C</p>
                                        </div>
                                        <div className="rounded-xl bg-black/30 p-3">
                                            <p className="text-xs text-white/70">{t('cityWeather.humidity')}</p>
                                            <p className="text-xl font-semibold">{weatherDisplay.humidity}%</p>
                                        </div>
                                        <div className="rounded-xl bg-black/30 p-3">
                                            <p className="text-xs text-white/70">{t('cityWeather.wind')}</p>
                                            <p className="text-xl font-semibold">{weatherDisplay.wind} km/h</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                            <h2 className="text-lg font-bold mb-3">{t('cityWeather.forecast')}</h2>
                            {!weatherState && !isLoading && !error && <p>{t('weatherPage.noData')}</p>}
                            <div className="space-y-2">
                                {forecast.map((item) => (
                                    <div key={item.day} className="flex justify-between items-center rounded-lg bg-black/30 p-3">
                                        <div>
                                            <div className="text-sm font-medium">{item.day}</div>
                                            <div className="text-xs text-white/60">{item.condition}</div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {weatherIcon(item.icon)}
                                            <span className="text-sm font-semibold">{item.temp}°C</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Overlay />
        </div>
    );
}
