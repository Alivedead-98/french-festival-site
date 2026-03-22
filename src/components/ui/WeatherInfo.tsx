import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '../../store/useStore';
import { Cloud, CloudDrizzle, CloudSnow, Sun, Thermometer, Wind, Droplet } from 'lucide-react';
import { useTranslation } from '../../i18n';

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
            return <Sun className="w-6 h-6 text-amber-400" />;
        case 'cloud':
            return <Cloud className="w-6 h-6 text-slate-200" />;
        case 'drizzle':
            return <CloudDrizzle className="w-6 h-6 text-cyan-200" />;
        case 'snow':
            return <CloudSnow className="w-6 h-6 text-indigo-200" />;
        default:
            return <Cloud className="w-6 h-6 text-slate-200" />;
    }
};

export default function WeatherInfo() {
    const { selectedCity } = useStore();
    const { t } = useTranslation();

    const [weatherState, setWeatherState] = useState<WeatherState | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const weatherCache = React.useRef<Record<string, WeatherState>>({});

    useEffect(() => {
        if (!selectedCity) {
            setWeatherState(null);
            setError(null);
            setIsLoading(false);
            return;
        }

        if (weatherCache.current[selectedCity.id]) {
            setWeatherState(weatherCache.current[selectedCity.id]);
            setError(null);
            setIsLoading(false);
            return;
        }

        const [lon, lat] = selectedCity.coordinates;
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;

        let cancelled = false;
        setIsLoading(true);
        setError(null);

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error('Failed request');
                return res.json();
            })
            .then((data) => {
                if (cancelled) return;
                if (!data || !data.current_weather || !data.daily) {
                    throw new Error('Incomplete API response');
                }
                const result: WeatherState = {
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
                weatherCache.current[selectedCity.id] = result;
                setWeatherState(result);
                setIsLoading(false);
            })
            .catch((err) => {
                if (cancelled) return;
                setError(err.message || 'Unknown error');
                setIsLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, [selectedCity]);

    const weather = useMemo(() => {
        if (!selectedCity || !weatherState) return null;

        const code = weatherState.current.weathercode;
        const map = weatherCodeMap[code] ?? { condition: 'Unknown', icon: 'cloud' };

        return {
            temp: Math.round(weatherState.current.temperature),
            feelsLike: Math.round(weatherState.current.temperature),
            humidity: Math.round(weatherState.current.relativehumidity),
            wind: Math.round(weatherState.current.windspeed),
            condition: map.condition,
            icon: map.icon,
        };
    }, [selectedCity, weatherState]);

    const forecast = useMemo(() => {
        if (!weatherState) return [];

        return weatherState.daily.time.slice(0, 3).map((day, index) => {
            const code = weatherState.daily.weathercode[index];
            const map = weatherCodeMap[code] ?? { condition: 'Unknown', icon: 'cloud' };

            return {
                day: index === 0 ? t('cityWeather.day1') : index === 1 ? t('cityWeather.day2') : t('cityWeather.day3'),
                temp: Math.round((weatherState.daily.temperature_2m_max[index] + weatherState.daily.temperature_2m_min[index]) / 2),
                icon: map.icon,
                condition: map.condition,
            };
        });
    }, [weatherState, t]);

    return (
        <AnimatePresence>
            {selectedCity && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 top-24 md:top-[140px] z-20 mt-4 ml-4 w-[320px] rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl pointer-events-auto"
                >
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-white">{t('cityWeather.title')}</h3>
                        {weatherIcon(weather?.icon)}
                    </div>

                    <p className="text-white/70 text-sm mb-4">{t('cityWeather.currentFor', selectedCity.name)}</p>

                    {isLoading && <p className="text-white/70 text-sm mb-4">{t('cityWeather.loading')}</p>}
                    {error && <p className="text-red-300 text-sm mb-4">{t('cityWeather.error')}: {error}</p>}

                    {!isLoading && !error && weather && (
                        <>
                            <div className="grid grid-cols-2 gap-2 mb-4">
                                <div className="p-3 bg-white/10 rounded-xl">
                                    <p className="text-xs text-white/60">{t('cityWeather.temperature')}</p>
                                    <p className="text-white text-xl font-semibold">{weather.temp}°C</p>
                                </div>
                                <div className="p-3 bg-white/10 rounded-xl">
                                    <p className="text-xs text-white/60">{t('cityWeather.feelsLike')}</p>
                                    <p className="text-white text-xl font-semibold">{weather.feelsLike}°C</p>
                                </div>
                                <div className="p-3 bg-white/10 rounded-xl">
                                    <p className="text-xs text-white/60">{t('cityWeather.humidity')}</p>
                                    <p className="text-white text-xl font-semibold">{weather.humidity}%</p>
                                </div>
                                <div className="p-3 bg-white/10 rounded-xl">
                                    <p className="text-xs text-white/60">{t('cityWeather.wind')}</p>
                                    <p className="text-white text-xl font-semibold">{weather.wind} km/h</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">{t('cityWeather.forecast')}</h4>
                                <div className="space-y-2">
                                    {forecast.map((item) => (
                                        <div key={item.day} className="flex justify-between items-center text-white/85 text-sm">
                                            <span>{item.day}</span>
                                            <span className="flex items-center gap-1">
                                                {weatherIcon(item.icon)} {item.temp}°C
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </motion.div>
            )}

            {!selectedCity && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 top-24 md:top-[140px] z-20 mt-4 ml-4 w-[320px] rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl pointer-events-auto"
                >
                    <h3 className="text-lg font-bold text-white">{t('cityWeather.title')}</h3>
                    <p className="text-white/70 text-sm mt-2">{t('cityWeather.noCity')}</p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
