export type FestivalCategory = 'Music' | 'Food & Wine' | 'Film' | 'National Holidays' | 'Cultural Traditions' | 'Sports';

export interface Festival {
  id: string;
  name: string;
  date: string;
  month: number; // 1-12
  city: string;
  category: FestivalCategory;
  description: string;
  facts: string[];
  image: string;
}

export const festivals: Festival[] = [
  {
    id: 'epiphany',
    name: 'Epiphany (Galette des Rois)',
    date: 'January 6',
    month: 1,
    city: 'Nationwide',
    category: 'Cultural Traditions',
    description: 'The Epiphany, celebrated on January 6th, marks the arrival of the Three Wise Men. In France, this religious holiday has evolved into a beloved cultural tradition centered around the "Galette des Rois" (King Cake). Bakeries across the country produce millions of these flaky, frangipane-filled pastries. The tradition is deeply rooted in French family life, bringing generations together to share the cake and the excitement of finding the hidden charm.',
    facts: [
      'A small charm called "la fève" (originally a fava bean, now often a porcelain or plastic figurine) is hidden inside the cake.',
      'The person who finds the charm in their slice becomes the king or queen for the day and wears a golden paper crown.',
      'Traditionally, the youngest child in the room goes under the table to blindly assign who gets which slice, ensuring fairness.',
      'Every year, a giant Galette des Rois is presented to the French President at the Élysée Palace, but it intentionally contains no fève, as a president cannot be crowned a king in a republic.'
    ],
    image: 'https://www.france.fi/wp-content/uploads/2024/12/Soiree-galettes-1098x617.jpg'
  },
  {
    id: 'nice-carnival',
    name: 'Nice Carnival',
    date: 'February 15 - March 2',
    month: 2,
    city: 'Nice',
    category: 'Cultural Traditions',
    description: 'The Nice Carnival is one of the world\'s major carnival events, rivaling those in Rio de Janeiro and Venice. Held on the stunning French Riviera, it spans two weeks of vibrant parades, colossal papier-mâché floats, and street performances. The carnival is split into two main events: the Carnival Parade (Corso Carnavalesque) and the Flower Parade (Bataille de Fleurs), both of which transform the city into a kaleidoscope of colors, music, and celebration.',
    facts: [
      'The Bataille de Fleurs features spectacular flower-covered floats from which models throw over 100,000 locally grown flowers (mimosas, lilies, daisies) into the crowd.',
      'The carnival dates back to 1294, making it one of the oldest recorded carnivals in the world.',
      'Each year has a specific theme (e.g., "King of Space", "King of Cinema"), dictating the design of the giant floats.',
      'The event culminates with the burning of the "King of Carnival" effigy at sea, followed by a massive fireworks display over the Baie des Anges.'
    ],
    image: 'https://www.cia-france.com/media/3254/queen-of-the-carnivaljpg_1536x1024.webp'
  },
  {
    id: 'paris-marathon',
    name: 'Paris Marathon',
    date: 'Early April',
    month: 4,
    city: 'Paris',
    category: 'Sports',
    description: 'The Schneider Electric Marathon de Paris is one of the biggest and most prestigious marathons in the world. It offers runners an unparalleled sightseeing tour of the French capital. The 42.195 km route takes participants through the heart of the city, passing iconic monuments, traversing historic parks, and running alongside the banks of the Seine River. It is a massive celebration of endurance, drawing athletes and spectators from all corners of the globe.',
    facts: [
      'The race begins on the famous Avenue des Champs-Élysées and finishes on Avenue Foch, near the Arc de Triomphe.',
      'It attracts over 50,000 runners annually from more than 140 different countries.',
      'The scenic route passes the Louvre, Notre-Dame Cathedral, the Eiffel Tower, and runs through both the Bois de Vincennes and the Bois de Boulogne.',
      'Along the route, runners are treated to wine and cheese tasting stations, particularly towards the end of the race.'
    ],
    image: 'https://www.marathons.com/wp-content/uploads/20250413SEMP200120-min-scaled.jpg'
  },
  {
    id: 'cannes-film',
    name: 'Cannes Film Festival',
    date: 'Mid-May',
    month: 5,
    city: 'Cannes',
    category: 'Film',
    description: 'The Festival de Cannes is arguably the most prestigious and publicized film festival in the world. Held annually in the resort town of Cannes on the French Riviera, it previews new films of all genres, including documentaries, from around the globe. The festival is an exclusive, invitation-only event that serves as a massive gathering for film industry professionals, celebrities, and journalists, heavily influencing global cinema trends and box office success.',
    facts: [
      'The highest prize awarded at the festival is the Palme d\'Or (Golden Palm), considered one of the most prestigious awards in the film industry.',
      'Founded in 1946, it is one of the "Big Three" major European film festivals, alongside the Venice Film Festival and the Berlin International Film Festival.',
      'The iconic red carpet steps (montée des marches) at the Palais des Festivals et des Congrès are a symbol of cinematic glamour.',
      'The festival also hosts the Marché du Film, the busiest movie market in the world, where producers and distributors buy and sell film rights.'
    ],
    image: 'https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/RZYYX4BEWUDWO3QTOCGY36547I.jpg'
  },
  {
    id: 'fete-musique',
    name: 'Fête de la Musique',
    date: 'June 21',
    month: 6,
    city: 'Nationwide',
    category: 'Music',
    description: 'Also known as Make Music Day, the Fête de la Musique is an annual, nationwide music celebration taking place on the summer solstice. The concept is simple: music everywhere and for everyone. Streets, parks, plazas, and even balconies are transformed into impromptu concert venues. The festival encourages both amateur and professional musicians to perform in public spaces, creating a joyous, chaotic, and deeply democratic celebration of musical expression.',
    facts: [
      'A strict rule of the festival is that all concerts must be completely free to the public, and artists perform for free.',
      'It was initiated in France in 1982 by the Minister of Culture, Jack Lang, and has since become a massive cultural phenomenon.',
      'The event has been so successful that it has been adopted by over 120 countries and 700 cities worldwide.',
      'You can hear every genre imaginable, from classical orchestras in museum courtyards to punk rock bands on street corners and techno DJs in public squares.'
    ],
    image: 'https://www.fohhn.com/fileadmin/_processed_/d/5/csm_gallery_main_fete_de_la_musique_nice_france_fbf4dabadc.jpg'
  },
  {
    id: 'bastille-day',
    name: 'Bastille Day',
    date: 'July 14',
    month: 7,
    city: 'Nationwide',
    category: 'National Holidays',
    description: 'Known in France as "La Fête Nationale" or "Le 14 Juillet", Bastille Day is the French national holiday. It commemorates the storming of the Bastille prison in 1789, a turning point of the French Revolution, as well as the Fête de la Fédération which celebrated the unity of the French people in 1790. The day is marked by immense patriotic pride, grand military displays, widespread public partying, and spectacular fireworks.',
    facts: [
      'The morning features the oldest and largest regular military parade in Europe, marching down the Champs-Élysées in Paris before the President of the Republic.',
      'Spectacular fireworks displays light up the sky across the country, with the most famous show taking place at the Eiffel Tower, synchronized to music.',
      'On the evenings of July 13th and 14th, fire stations across France open their doors to the public for the traditional "Bals des pompiers" (Firemen\'s balls), featuring live music and dancing until dawn.',
      'The Patrouille de France (the French Air Force precision aerobatic demonstration team) performs a stunning flyover, trailing blue, white, and red smoke.'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/en/1/16/Feu_d%27artifice_du_14_juillet_2017_depuis_le_champ_de_Mars_%C3%A0_Paris%2C_devant_la_Tour_Eiffel%2C_Bastille_day_2017_%2835118978683%29.jpg'
  },
  {
    id: 'lorient-celtic',
    name: 'Festival Interceltique de Lorient',
    date: 'Early August',
    month: 8,
    city: 'Lorient',
    category: 'Music',
    description: 'The Festival Interceltique de Lorient is a massive annual gathering in Brittany that celebrates the rich cultural heritage of the Celtic nations. For ten days, the city of Lorient becomes the global capital of Celtic music, dance, and art. It is a vibrant, deeply rooted festival that showcases the shared traditions and modern evolutions of Celtic culture from regions across Europe and the diaspora.',
    facts: [
      'It is one of the largest festivals in Europe, attracting around 700,000 to 800,000 festival-goers each year.',
      'The festival features thousands of artists from Brittany, Ireland, Scotland, Wales, Cornwall, the Isle of Man, Galicia, Asturias, and even Celtic diaspora in Australia and Acadia.',
      'The absolute highlight is the "Grand Parade of Celtic Nations", where thousands of musicians and dancers in traditional dress march through the streets.',
      'The festival includes not just music, but also traditional sports, art exhibitions, and a massive Celtic market.'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/FIL2009-010_KevrennAlre.jpg'
  },
  {
    id: 'rio-loco',
    name: 'Rio Loco',
    date: 'Early June',
    month: 6,
    city: 'Toulouse',
    category: 'Music',
    description: 'Rio Loco is a vibrant festival celebrating Colombian and Latin American culture in Toulouse. This high-energy event features spectacular live music performances, traditional dances, colorful parades, and authentic South American cuisine. The festival transforms the streets of Toulouse into a lively celebration of Latin rhythms, bringing together dancers, musicians, and cultural enthusiasts from across Europe. It\'s a festival that captures the spirit, passion, and joy of Colombian traditions.',
    facts: [
      'Rio Loco features live performances from renowned Colombian and Latin American artists.',
      'The festival showcases traditional dances including salsa, cumbia, and reggaeton.',
      'Street parades feature elaborate costumes, vibrant colors, and energetic dancers.',
      'The event includes workshops, cultural exhibitions, and authentic Colombian food stalls with traditional dishes and tropical fruits.'
    ],
    image: 'https://cdt31.media.tourinsoft.eu/upload/Festival-Rio-Loco-2024-copie.jpg'
  },
  {
    id: 'nuit-blanche',
    name: 'Nuit Blanche',
    date: 'First Saturday of October',
    month: 10,
    city: 'Paris',
    category: 'Cultural Traditions',
    description: 'Nuit Blanche (White Night) is an annual all-night arts festival that transforms Paris into a massive, surreal, and interactive contemporary art gallery. From sunset to sunrise, museums, public spaces, monuments, and unexpected locations host avant-garde art installations, light shows, and live performances. It is a night where the city itself becomes the canvas, encouraging citizens to explore their urban environment in a completely new way.',
    facts: [
      'All events, exhibitions, and public transport (including specific metro lines) are completely free and run all night to accommodate the massive crowds.',
      'The festival often features monumental, site-specific installations, such as floating artworks on the Seine or massive light projections on historic facades.',
      'The concept was created in Paris in 2002 and has since been adopted by over 120 cities worldwide, including Rome, Toronto, and Kyoto.',
      'The event is designed to bring contemporary art to a wider audience, breaking down the barriers of traditional museum spaces.'
    ],
    image: 'https://cultmtl.com/wp-content/uploads/2018/02/nb-2018.jpg'
  },
  {
    id: 'beaujolais-nouveau',
    name: 'Beaujolais Nouveau Day',
    date: 'Third Thursday of November',
    month: 11,
    city: 'Nationwide',
    category: 'Food & Wine',
    description: 'Beaujolais Nouveau Day is a joyous celebration marking the release of the first French wine of the season. Made from Gamay grapes in the Beaujolais region, this young wine is fermented for just a few weeks before being rushed to market. The release is a highly anticipated event, celebrated in bistros, cafes, and restaurants across France and around the world, symbolizing the end of the harvest and the beginning of the festive season.',
    facts: [
      'By strict French law, the wine cannot be released until exactly 12:01 a.m. on the third Thursday of November.',
      'The phrase "Le Beaujolais nouveau est arrivé!" (The new Beaujolais has arrived!) is famously used to announce the wine\'s release.',
      'The wine is light, fruity, and meant to be drunk young and slightly chilled; it is not a wine meant for aging.',
      'The region of Beaujolais hosts massive parties, including the "Les Sarmentelles" festival in Beaujeu, featuring a torchlight parade and fireworks.'
    ],
    image: 'https://cdn.shoplightspeed.com/shops/635650/files/66707883/copy-of-tasting-room-slides.png'
  },
  {
    id: 'strasbourg-christmas',
    name: 'Strasbourg Christmas Market',
    date: 'Late November - December 24',
    month: 12,
    city: 'Strasbourg',
    category: 'Cultural Traditions',
    description: 'The Strasbourg Christmas Market (Christkindelsmärik) is one of the oldest, largest, and most magical Christmas markets in Europe. Located in the Alsace region, the city embraces its dual French and German heritage to create a truly unique festive atmosphere. The entire city center is illuminated with miles of fairy lights, transforming Strasbourg into the self-proclaimed "Capital of Christmas," filled with the scents of mulled wine, gingerbread, and roasting chestnuts.',
    facts: [
      'Dating back to 1570, it is the oldest Christmas market in France and one of the oldest in Europe.',
      'The market features over 300 wooden chalets spread across various squares in the city center, notably around the stunning Strasbourg Cathedral.',
      'A massive, beautifully decorated real Christmas tree (Le Grand Sapin), often over 30 meters tall, is erected in Place Kléber.',
      'The market is famous for traditional Alsatian crafts, ornaments, and culinary specialties like bredele (Christmas cookies) and vin chaud (mulled wine).'
    ],
    image: 'https://www.afsf.com/media/website_pages/news/blog/bculture/the-strasbourg-christmas-market-a-celebration-of-magic-tradition-and-local-craftsmanship/strasbourg-marche-de-noel.jpeg'
  }
];
