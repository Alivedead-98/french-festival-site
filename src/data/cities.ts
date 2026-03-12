export interface City {
  id: string;
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
  description: string;
  population: string;
  culturalImportance: string;
  facts: string[];
  streetViewUrl: string;
  landmarks?: string[];
  festivals?: string[];
  famousFor?: string[];
  region?: string;
  founded?: string;
  nickname?: string;
}

export const cities: City[] = [
{
  id: "paris",
  name: "Paris",
  coordinates: [2.3522, 48.8566],
  description: "Paris, the capital of France, is one of the most influential cultural, political, and historical cities in the world. Located along the Seine River, it has been a center of art, philosophy, architecture, and global diplomacy for centuries.",
  population: "2.1 million (city) | ~11 million (metropolitan area)",
  culturalImportance: "Paris is a global center for art, fashion, gastronomy, literature, and architecture. The city has shaped modern culture through museums, historic landmarks, world-renowned cuisine, and influential artistic movements.",
  region: "Île-de-France",
  founded: "3rd century BC by the Parisii tribe",
  nickname: "The City of Light (La Ville Lumière)",

  landmarks: [
    "Eiffel Tower",
    "Louvre Museum",
    "Notre-Dame Cathedral",
    "Arc de Triomphe",
    "Sacré-Cœur Basilica",
    "Champs-Élysées"
  ],

  festivals: [
    "Bastille Day celebrations (July 14)",
    "Paris Fashion Week",
    "Fête de la Musique (June 21)",
    "Nuit Blanche – all-night art festival"
  ],

  famousFor: [
    "World-class museums and art collections",
    "Historic architecture and monuments",
    "Luxury fashion and haute couture",
    "French cuisine and cafés",
    "Romantic atmosphere and riverfront scenery"
  ],

  facts: [
    "The Eiffel Tower was originally built for the 1889 World's Fair.",
    "The Louvre Museum is the largest art museum in the world.",
    "Paris has over 1,800 bakeries and thousands of cafés.",
    "The city is divided into 20 districts called arrondissements.",
    "The Seine River flows through the center of the city."
  ],

  streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1773252766349!6m8!1m7!1sFDgIqKsFEEbcgyDjlaGPXw!2m2!1d48.85582726276933!2d2.298209790756365!3f319.0075828038168!4f10.50591115218677!5f0.7820865974627469"
},
  {
  id: "lyon",
  name: "Lyon",
  coordinates: [4.8357, 45.7640],
  description: "Lyon is the third-largest city in France and an important historical and economic center located at the meeting point of the Rhône and Saône rivers. The city has played a major role in trade, silk production, banking, and modern industries such as pharmaceuticals and biotechnology.",
  population: "522,000 (city) | ~2.3 million (metropolitan area)",
  culturalImportance: "Lyon is widely considered the gastronomic capital of France. The city is famous for its traditional restaurants called 'bouchons', Renaissance architecture, historic districts, and vibrant cultural festivals.",
  region: "Auvergne-Rhône-Alpes",
  nickname: "Capital of Gastronomy",

  landmarks: [
    "Basilica of Notre-Dame de Fourvière",
    "Vieux Lyon (Old Town)",
    "Place Bellecour",
    "Parc de la Tête d'Or",
    "Ancient Theatre of Fourvière",
    "Musée des Confluences"
  ],

  festivals: [
    "Fête des Lumières (Festival of Lights) – December",
    "Nuits de Fourvière music and theatre festival",
    "Lyon Street Food Festival",
    "Biennale de Lyon contemporary art festival"
  ],

  famousFor: [
    "Traditional French cuisine and bouchon restaurants",
    "Historic Renaissance architecture",
    "Silk weaving industry in the past",
    "Major cultural festivals and art events",
    "Important economic and research center"
  ],

  facts: [
    "Lyon's historic center is a UNESCO World Heritage Site.",
    "The city is located between the Rhône and Saône rivers.",
    "The Lumière brothers invented early cinema in Lyon.",
    "Vieux Lyon is one of the largest Renaissance districts in Europe.",
    "The Fête des Lumières attracts millions of visitors every year."
  ],

  streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1773252945315!6m8!1m7!1sN5oradOVqv9xhbEyZ2lrEw!2m2!1d45.76233364326901!2d4.821551348711437!3f94.0848827521965!4f24.481968665399776!5f0.7820865974627469"
  },
  {
  id: "marseille",
  name: "Marseille",
  coordinates: [5.3698, 43.2965],
  description: "Marseille is the oldest city in France and the country's largest Mediterranean port. Founded by Greek settlers around 600 BC, it has long been a gateway between Europe, Africa, and the Middle East.",
  population: "870,000 (city) | ~1.8 million (metro)",
  culturalImportance: "A vibrant multicultural city with strong maritime traditions, historic ports, and Mediterranean cuisine.",
  region: "Provence-Alpes-Côte d’Azur",
  founded: "600 BC",
  nickname: "Gateway to the Mediterranean",

  landmarks: [
    "Old Port (Vieux-Port)",
    "Basilica of Notre-Dame de la Garde",
    "Calanques National Park",
    "MuCEM Museum",
    "Château d'If"
  ],

  festivals: [
    "Marseille Jazz Festival",
    "Fiesta des Suds music festival",
    "Marseille International Documentary Festival"
  ],

  famousFor: [
    "Mediterranean port culture",
    "Bouillabaisse seafood stew",
    "Historic maritime trade",
    "Diverse multicultural communities"
  ],

  facts: [
    "Founded by Greek settlers around 600 BC",
    "Famous for Bouillabaisse seafood stew",
    "European Capital of Culture in 2013"
  ],

  streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1773342728674!6m8!1m7!1sXaHi5Wb2VSZwNEjt8ZHsFA!2m2!1d43.29885080566548!2d5.365216212742105!3f329.51054381619525!4f10.023088391588544!5f0.7820865974627469"
},
  {
  id: "nice",
  name: "Nice",
  coordinates: [7.2620, 43.7102],
  description: "Nice is a famous Mediterranean coastal city on the French Riviera known for its beaches, colorful old town, and luxury tourism.",
  population: "340,000",
  culturalImportance: "A historic resort city attracting artists, writers, and aristocrats since the 18th century.",
  region: "Provence-Alpes-Côte d’Azur",
  nickname: "Capital of the French Riviera",

  landmarks: [
    "Promenade des Anglais",
    "Castle Hill (Colline du Château)",
    "Old Town (Vieux Nice)",
    "Marc Chagall National Museum",
    "Place Masséna"
  ],

  festivals: [
    "Nice Carnival",
    "Nice Jazz Festival",
    "Ironman France"
  ],

  famousFor: [
    "Mediterranean beaches",
    "Luxury tourism",
    "Italian-influenced architecture",
    "French Riviera lifestyle"
  ],

  facts: [
    "Home to the famous Promenade des Anglais",
    "Has a strong Italian influence",
    "Hosts one of the world's largest carnivals"
  ],

  streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1773342869895!6m8!1m7!1sNF77Gy1DAvv0EVKfJfgduA!2m2!1d43.69484836665666!2d7.267981026295776!3f249.782127569959!4f2.535282605731524!5f0.7820865974627469"
},
  {
  id: "bordeaux",
  name: "Bordeaux",
  coordinates: [-0.5792, 44.8378],
  description: "Bordeaux is a historic port city on the Garonne River known worldwide for its wine industry and elegant architecture.",
  population: "259,000",
  culturalImportance: "The global capital of wine production and one of France’s most architecturally beautiful cities.",
  region: "Nouvelle-Aquitaine",
  nickname: "Wine Capital of the World",

  landmarks: [
    "Place de la Bourse",
    "Water Mirror (Miroir d’Eau)",
    "Bordeaux Cathedral",
    "Pont de Pierre",
    "La Cité du Vin Museum"
  ],

  festivals: [
    "Bordeaux Wine Festival",
    "Bordeaux River Festival",
    "Bordeaux International Arts Festival"
  ],

  famousFor: [
    "World-renowned wine",
    "18th century architecture",
    "Historic port trade",
    "Vineyards surrounding the city"
  ],

  facts: [
    "Produces over 700 million bottles of wine annually",
    "Has the largest urban UNESCO heritage area",
    "Known as 'La Perle d'Aquitaine'"
  ],

  streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1773342968188!6m8!1m7!1sz00zpoMPvuHgnEZNwtp72A!2m2!1d44.84159019787207!2d-0.5695496669265474!3f250.76754155795763!4f3.6214535744035743!5f0.7820865974627469"
},
  {
  id: "toulouse",
  name: "Toulouse",
  coordinates: [1.4442, 43.6047],
  description: "Toulouse is a vibrant southern French city known for aerospace innovation and distinctive pink terracotta architecture.",
  population: "493,000",
  culturalImportance: "Europe’s aerospace capital and home to major research universities and aviation companies.",
  region: "Occitanie",
  nickname: "La Ville Rose (The Pink City)",

  landmarks: [
    "Capitole de Toulouse",
    "Basilica of Saint-Sernin",
    "Cité de l’Espace",
    "Pont Neuf",
    "Canal du Midi"
  ],

  festivals: [
    "Rio Loco Music Festival",
    "Toulouse Violet Festival",
    "Printemps du Rire comedy festival"
  ],

  famousFor: [
    "Airbus headquarters",
    "Aerospace research",
    "Pink brick architecture",
    "Student population and universities"
  ],

  facts: [
    "Known as 'La Ville Rose' due to its terracotta bricks",
    "Headquarters of Airbus",
    "Home to one of the oldest universities in Europe"
  ],

  streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1773343204151!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0VyTmIyR3c.!2m2!1d43.60438570556614!2d1.443239506404332!3f358.5313964648454!4f5.940097933558064!5f0.7820865974627469"
},
  {
  id: "strasbourg",
  name: "Strasbourg",
  coordinates: [7.7521, 48.5734],
  description: "Strasbourg sits on the border of France and Germany and blends French and German cultures in architecture, cuisine, and language.",
  population: "287,000",
  culturalImportance: "A major political center of Europe and home to several EU institutions.",
  region: "Grand Est",

  landmarks: [
    "Strasbourg Cathedral",
    "La Petite France district",
    "European Parliament",
    "Palais Rohan",
    "Covered Bridges"
  ],

  festivals: [
    "Strasbourg Christmas Market",
    "Strasbourg Music Festival",
    "Ososphere Digital Arts Festival"
  ],

  famousFor: [
    "European Parliament",
    "Christmas markets",
    "Half-timbered houses",
    "Franco-German cultural mix"
  ],

  facts: [
    "Official seat of the European Parliament",
    "Historic city center is a UNESCO World Heritage site",
    "Strasbourg Cathedral was once the tallest building in the world"
  ],

  streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1773343313075!6m8!1m7!1sYNZ0OGx5_iPmyjAG-g_OfQ!2m2!1d48.58147024407833!2d7.749901418456705!3f63.92934575317196!4f31.04640199373344!5f0.7776072424458328"
},
{
  id: "lille",
  name: "Lille",
  coordinates: [3.0573, 50.6292],
  description: "A vibrant northern French city near the Belgian border known for its Flemish architecture and strong student culture.",
  population: "234,000",
  culturalImportance: "An important cultural and university hub in northern France with deep Flemish and French influences.",
  region: "Hauts-de-France",

  landmarks: [
    "Grand Place (Place du Général-de-Gaulle)",
    "Lille Citadel",
    "Palais des Beaux-Arts",
    "Old Stock Exchange (Vieille Bourse)"
  ],

  festivals: [
    "Braderie de Lille flea market",
    "Lille Fantastic Festival"
  ],

  famousFor: [
    "Europe's largest flea market",
    "Flemish-style architecture",
    "Large student population"
  ],

  facts: [
    "Hosts the largest flea market in Europe every September",
    "European Capital of Culture in 2004",
    "Known for its red-brick Flemish architecture"
  ],

  streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1773343461993!6m8!1m7!1sNQ0zj0g9Pfu4HG6H6NIs6Q!2m2!1d50.63727474832769!2d3.063320850712961!3f171.26131198787868!4f5.37611825828381!5f1.1924812503605782"
},

{
  id: "nantes",
  name: "Nantes",
  coordinates: [-1.5536, 47.2184],
  description: "A historic and innovative city on the Loire River known for its creative art scene and maritime heritage.",
  population: "318,000",
  culturalImportance: "A cultural center combining history, modern art installations, and technological innovation.",
  region: "Pays de la Loire",

  landmarks: [
    "Château des Ducs de Bretagne",
    "Machines of the Isle of Nantes",
    "Nantes Cathedral",
    "Passage Pommeraye"
  ],

  festivals: [
    "Voyage à Nantes art festival",
    "Scopitone Digital Arts Festival"
  ],

  famousFor: [
    "The mechanical elephant of the Machines of Nantes",
    "Birthplace of Jules Verne",
    "Creative public art installations"
  ],

  facts: [
    "Former capital of the Duchy of Brittany",
    "Birthplace of the famous author Jules Verne",
    "One of France's most innovative cultural cities"
  ],

  streetViewUrl: "https://www.google.com/maps/embed?pb=!4v1773343579827!6m8!1m7!1sZwD-nHgS5JN3O3uALRRJRg!2m2!1d47.21635102894596!2d-1.548997474235953!3f247.75835664193897!4f8.932288553548332!5f0.7820865974627469"
}
];
