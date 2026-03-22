import { useStore } from './store/useStore';

export type Language = 'en' | 'fr';

const translations: Record<Language, Record<string, any>> = {
    en: {
        nav: {
            title: 'Explorateur Français',
            home: 'Home',
            calendar: 'Calendar',
            map: 'Explore Map',
            weather: 'Weather',
            toggleLabel: 'FR',
        },
        home: {
            subtitle: 'Explore the cultural celebrations that define France throughout the year. A cinematic journey through time and tradition.',
            exploreButton: 'Explore France Map',
            scrollHint: 'Scroll to Discover',
        },
        weatherPage: {
            title: 'Weather Dashboard',
            description: 'A quick weather snapshot for selected French cities. Choose where to go and get accurate conditions instantly.',
            introPanel: 'Search a city and select one to display current conditions and a 3-day forecast.',
            searchPlaceholder: 'Search cities...',
            chooseCity: 'Choose a city to see weather details.',
            loading: 'Loading weather...',
            error: 'Weather fetch error',
            current: 'Current conditions',
            noData: 'No weather data yet. Select a city.',
        },
        calendar: {
            title: 'Yearly Calendar',
            subtitle: 'Explore the vibrant festivals celebrated throughout the year in France. Click on any month to discover what\'s being celebrated.',
            filter: 'Filter',
            allCategories: 'All Categories',
            noFestivals: 'No festivals this month',
            festival: 'Festival',
            festivals: 'Festivals',
        },
        overlay: {
            searchPlaceholder: 'Search cities...',
            noCities: 'No cities found',
            returnToMap: 'Return to Map',
            loading: 'Loading Experience',
        },
        cityInfo: {
            population: 'Population',
            culturalImportance: 'Cultural Importance',
            landmarks: 'Key Landmarks',
            festivals: 'Festivals & Events',
            famousFor: 'Famous For',
            facts: 'Interesting Facts',
        },
        cityWeather: {
            title: 'Weather',
            noCity: 'Select a city on the map to view weather',
            currentFor: 'Current weather in %s',
            temperature: 'Temperature',
            feelsLike: 'Feels Like',
            humidity: 'Humidity',
            wind: 'Wind Speed',
            forecast: '3-day Forecast',
            day1: 'Tomorrow',
            day2: 'Day after tomorrow',
            day3: 'In 3 days',
            loading: 'Loading weather...',
            error: 'Weather fetch error',
        },
        festivalModal: {
            date: 'Date',
            location: 'Location',
            about: 'About the Festival',
            facts: 'Interesting Facts',
        },
        timeline: {
            fascinatingFacts: 'Fascinating Facts',
        },

        categories: {
            'Music': 'Music',
            'Food & Wine': 'Food & Wine',
            'Film': 'Film',
            'National Holidays': 'National Holidays',
            'Cultural Traditions': 'Cultural Traditions',
            'Sports': 'Sports',
        },
        months: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
    },
    fr: {
        nav: {
            title: 'Explorateur Français',
            home: 'Accueil',
            calendar: 'Calendrier',
            map: 'Explorer la carte',
            toggleLabel: 'EN',
        },
        home: {
            subtitle: 'Explorez les célébrations culturelles qui définissent la France tout au long de l\'année. Un voyage cinématographique à travers le temps et la tradition.',
            exploreButton: 'Explorer la carte de France',
            scrollHint: 'Faites défiler pour découvrir',
        },
        weatherPage: {
            title: 'Tableau Météo',
            description: 'Un aperçu météo des villes françaises sélectionnées. Choisissez une ville et obtenez des conditions précises immédiatement.',
            introPanel: 'Recherchez une ville et sélectionnez-la pour afficher les conditions actuelles et une prévision sur 3 jours.',
            searchPlaceholder: 'Rechercher des villes...',
            chooseCity: 'Choisissez une ville pour voir les détails météo.',
            loading: 'Chargement de la météo...',
            error: 'Erreur de récupération météo',
            current: 'Conditions actuelles',
            noData: 'Aucune donnée météo pour le moment. Sélectionnez une ville.',
        },
        calendar: {
            title: 'Calendrier annuel',
            subtitle: 'Découvrez les festivals vibrants célébrés tout au long de l\'année en France. Cliquez sur un mois pour découvrir ce qui est célébré.',
            filter: 'Filtrer',
            allCategories: 'Toutes les catégories',
            noFestivals: 'Pas de festivals ce mois-ci',
            festival: 'Festival',
            festivals: 'Festivals',
        },
        overlay: {
            searchPlaceholder: 'Rechercher des villes...',
            noCities: 'Aucune ville trouvée',
            returnToMap: 'Retour à la carte',
            loading: 'Chargement en cours',
        },
        cityInfo: {
            population: 'Population',
            culturalImportance: 'Importance culturelle',
            landmarks: 'Lieux emblématiques',
            festivals: 'Festivals & Événements',
            famousFor: 'Célèbre pour',
            facts: 'Faits intéressants',
        },
        cityWeather: {
            title: 'Météo',
            noCity: 'Sélectionnez une ville sur la carte pour afficher la météo',
            currentFor: 'Météo actuelle à %s',
            temperature: 'Température',
            feelsLike: 'Ressenti',
            humidity: 'Humidité',
            wind: 'Vitesse du vent',
            forecast: 'Prévision sur 3 jours',
            day1: 'Demain',
            day2: 'Après-demain',
            day3: 'Dans 3 jours',
            loading: 'Chargement de la météo...',
            error: 'Erreur de récupération météo',
        },
        festivalModal: {
            date: 'Date',
            location: 'Lieu',
            about: 'À propos du festival',
            facts: 'Faits intéressants',
        },
        timeline: {
            fascinatingFacts: 'Faits fascinants',
        },

        categories: {
            'Music': 'Musique',
            'Food & Wine': 'Gastronomie',
            'Film': 'Cinéma',
            'National Holidays': 'Jours fériés',
            'Cultural Traditions': 'Traditions culturelles',
            'Sports': 'Sports',
        },
        months: [
            'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
            'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
        ],
    },
};

function getNestedValue(obj: Record<string, any>, path: string): any {
    return path.split('.').reduce((acc, segment) => {
        if (acc && typeof acc === 'object' && segment in acc) {
            return acc[segment];
        }
        return undefined;
    }, obj);
}

export function useTranslation() {
    const language = useStore((state) => state.language);
    const setLanguage = useStore((state) => state.setLanguage);
    const toggleLanguage = useStore((state) => state.toggleLanguage);

    const t = (key: string, fallback?: string, ...args: (string | number)[]): string => {
        const value = getNestedValue(translations[language], key);
        let result: string;
        if (typeof value === 'string') {
            result = value;
        } else if (typeof value === 'undefined') {
            result = fallback ?? key;
        } else {
            result = String(value);
        }
        if (args.length > 0) {
            args.forEach((arg) => {
                result = result.replace('%s', String(arg));
            });
        }
        return result;
    };

    const getMonthNames = (): string[] => {
        return translations[language].months;
    };

    const translateCategory = (category: string): string => {
        const mapped = getNestedValue(translations[language], `categories.${category}`);
        return typeof mapped === 'string' ? mapped : category;
    };

    return {
        language,
        setLanguage,
        toggleLanguage,
        t,
        getMonthNames,
        translateCategory,
    };
}
