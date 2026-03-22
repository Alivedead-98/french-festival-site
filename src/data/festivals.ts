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
    date: '6 janvier',
    month: 1,
    city: 'Nationwide',
    category: 'Cultural Traditions',
    description: `L'Épiphanie, célébrée le 6 janvier, marque l'arrivée des Rois mages. En France, cette fête religieuse s'est transformée en une tradition culturelle très appréciée, centrée autour de la « Galette des Rois ». Dans tout le pays, les boulangeries confectionnent des millions de ces pâtisseries feuilletées fourrées à la frangipane. Cette tradition est profondément ancrée dans la vie de famille française, rassemblant les générations autour du partage de la galette et de l'excitation de découvrir la fève cachée.`,
    facts: [
      'Une petite amulette appelée « la fève » (à l’origine une fève, aujourd’hui souvent une figurine en porcelaine ou en plastique) est cachée à l’intérieur de la galette.',
      'La personne qui trouve la fève dans sa part devient roi ou reine de la journée et porte une couronne en papier doré.',
      'Traditionnellement, l’enfant le plus jeune de la pièce se glisse sous la table pour distribuer les parts à l’aveugle, afin d’assurer l’équité.',
      'Chaque année, une gigantesque Galette des Rois est offerte au président français à l’Élysée, mais elle ne contient volontairement pas de fève, car un président ne peut pas être couronné dans une république.'
    ],
    image: 'https://www.france.fi/wp-content/uploads/2024/12/Soiree-galettes-1098x617.jpg'
  },
  {
    id: 'nice-carnival',
    name: 'Nice Carnival',
    date: '15 février - 2 mars',
    month: 2,
    city: 'Nice',
    category: 'Cultural Traditions',
    description: 'Le Carnaval de Nice est l’un des plus grands carnavals du monde, aux côtés de ceux de Rio et de Venise. Organisé sur la magnifique Côte d’Azur, il s’étend sur deux semaines de parades éclatantes, de chars en papier mâché géants et de spectacles de rue. Le carnaval est divisé en deux grands rendez-vous : le Corso Carnavalesque (parade) et la Bataille de Fleurs, qui transforment la ville en un kaléidoscope de couleurs, de musique et de fête.',
    facts: [
      'La Bataille de Fleurs met en scène des chars couverts de fleurs spectaculaires d’où des mannequins jettent plus de 100 000 fleurs locales (mimosas, lys, marguerites) dans la foule.',
      'Le carnaval remonte à 1294, ce qui en fait l’un des plus anciens carnavals enregistrés au monde.',
      'Chaque année a un thème spécifique (par exemple « Roi de l’Espace », « Roi du Cinéma »), qui inspire la conception des chars géants.',
      'L’événement se termine par la mise à feu du « Roi du Carnaval » en mer, suivie d’un feu d’artifice spectaculaire au-dessus de la Baie des Anges.'
    ],
    image: 'https://www.cia-france.com/media/3254/queen-of-the-carnivaljpg_1536x1024.webp'
  },
  {
    id: 'paris-marathon',
    name: 'Paris Marathon',
    date: 'début avril',
    month: 4,
    city: 'Paris',
    category: 'Sports',
    description: 'Le Schneider Electric Marathon de Paris est l’un des plus grands et prestigieux marathons du monde. Il offre aux coureurs une visite incomparable de la capitale française. Le parcours de 42,195 km traverse le cœur de la ville, passant devant des monuments emblématiques, traversant des parcs historiques et longeant les quais de la Seine. C’est une immense célébration de l’endurance, attirant athlètes et spectateurs des quatre coins du globe.',
    facts: [
      'La course commence sur la célèbre avenue des Champs-Élysées et se termine sur l’avenue Foch, près de l’Arc de Triomphe.',
      'Elle attire plus de 50 000 coureurs chaque année, venus de plus de 140 pays différents.',
      'Le parcours pittoresque passe par le Louvre, Notre-Dame, la Tour Eiffel et traverse le bois de Vincennes et le bois de Boulogne.',
      'Sur le parcours, les coureurs peuvent déguster des stations de vin et de fromage, surtout vers la fin de la course.'
    ],
    image: 'https://www.marathons.com/wp-content/uploads/20250413SEMP200120-min-scaled.jpg'
  },
  {
    id: 'cannes-film',
    name: 'Cannes Film Festival',
    date: 'mi-mai',
    month: 5,
    city: 'Cannes',
    category: 'Film',
    description: 'Le Festival de Cannes est sans doute le festival de cinéma le plus prestigieux et médiatisé au monde. Organisé chaque année dans la station balnéaire de Cannes, il présente des films de tous genres, y compris des documentaires, du monde entier. Le festival est un événement exclusif sur invitation qui réunit professionnels du cinéma, célébrités et journalistes, et influence fortement les tendances du cinéma mondial et le succès au box-office.',
    facts: [
      'Le prix le plus élevé décerné au festival est la Palme d’Or, l’une des récompenses les plus prestigieuses du cinéma.',
      'Fondé en 1946, il fait partie des « trois grands » festivals de cinéma européens, aux côtés de Venise et de Berlin.',
      'Les fameuses marches rouges (montée des marches) du Palais des Festivals et des Congrès sont un symbole du glamour cinématographique.',
      'Le festival accueille également le Marché du Film, le plus grand marché du film au monde, où producteurs et distributeurs achètent et vendent des droits de films.'
    ],
    image: 'https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/RZYYX4BEWUDWO3QTOCGY36547I.jpg'
  },
  {
    id: 'fete-musique',
    name: 'Fête de la Musique',
    date: '21 juin',
    month: 6,
    city: 'Nationwide',
    category: 'Music',
    description: 'La Fête de la Musique, aussi appelée Make Music Day, est une célébration musicale nationale qui a lieu chaque année le solstice d’été. Le concept est simple : de la musique partout et pour tous. Rues, parcs, places et même balcons se transforment en scènes improvisées. Le festival encourage musiciens amateurs et professionnels à jouer dans l’espace public, créant une fête joyeuse, anarchique et profondément démocratique de l’expression musicale.',
    facts: [
      'Une règle stricte du festival est que tous les concerts doivent être entièrement gratuits pour le public et que les artistes jouent bénévolement.',
      'Il a été initié en France en 1982 par le ministre de la Culture Jack Lang et est devenu un phénomène culturel mondial.',
      'L’événement a tellement de succès qu’il a été adopté par plus de 120 pays et 700 villes à travers le monde.',
      'On peut y entendre tous les genres possibles, des orchestres classiques dans les cours de musées aux groupes de punk dans la rue en passant par des DJ techno sur des places publiques.'
    ],
    image: 'https://www.fohhn.com/fileadmin/_processed_/d/5/csm_gallery_main_fete_de_la_musique_nice_france_fbf4dabadc.jpg'
  },
  {
    id: 'bastille-day',
    name: 'Bastille Day',
    date: '14 juillet',
    month: 7,
    city: 'Nationwide',
    category: 'National Holidays',
    description: 'Connue en France sous le nom de « Fête nationale » ou « le 14 juillet », la fête nationale commémore la prise de la Bastille en 1789, un moment clé de la Révolution française, ainsi que la Fête de la Fédération de 1790 qui célébrait l’unité du peuple français. La journée est marquée par une immense fierté patriotique, de grands défilés militaires, des festivités populaires et des feux d’artifice spectaculaires.',
    facts: [
      'Le matin, a lieu le plus ancien et le plus grand défilé militaire régulier d’Europe, sur les Champs-Élysées, en présence du président de la République.',
      'Des feux d’artifice spectaculaires illuminent le ciel dans tout le pays, le plus célèbre étant celui tiré près de la Tour Eiffel, synchronisé sur de la musique.',
      'Les soirs des 13 et 14 juillet, les casernes de pompiers ouvrent leurs portes au public pour les traditionnels bals des pompiers, avec de la musique live et des danses jusqu’à l’aube.',
      'La Patrouille de France (l’équipe de voltige aérienne de l’armée de l’air) effectue un passage avec un sillage bleu, blanc, rouge.'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/en/1/16/Feu_d%27artifice_du_14_juillet_2017_depuis_le_champ_de_Mars_%C3%A0_Paris%2C_devant_la_Tour_Eiffel%2C_Bastille_day_2017_%2835118978683%29.jpg'
  },
  {
    id: 'lorient-celtic',
    name: 'Festival Interceltique de Lorient',
    date: 'début août',
    month: 8,
    city: 'Lorient',
    category: 'Music',
    description: 'Le Festival Interceltique de Lorient est un immense rassemblement annuel en Bretagne qui célèbre le riche héritage culturel des nations celtiques. Pendant dix jours, la ville de Lorient devient la capitale mondiale de la musique, de la danse et de l’art celtiques. C’est un festival vibrant et profondément enraciné qui met en lumière les traditions communes et les évolutions modernes de la culture celtique venant de toute l’Europe et de la diaspora.',
    facts: [
      'C’est l’un des plus grands festivals d’Europe, attirant entre 700 000 et 800 000 visiteurs par an.',
      'Le festival réunit des milliers d’artistes de Bretagne, d’Irlande, d’Écosse, du Pays de Galles, de Cornouailles, de l’Île de Man, de Galice, des Asturies et même de la diaspora celtique en Australie et en Acadie.',
      'Le moment fort est la « Grande Parade des Nations Celtiques », où des milliers de musiciens et danseurs en costume traditionnel défilent dans les rues.',
      'Le festival propose non seulement de la musique, mais aussi des sports traditionnels, des expositions d’art et un grand marché celtique.'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/FIL2009-010_KevrennAlre.jpg'
  },
  {
    id: 'rio-loco',
    name: 'Rio Loco',
    date: 'début juin',
    month: 6,
    city: 'Toulouse',
    category: 'Music',
    description: 'Rio Loco est un festival vibrant qui célèbre la culture colombienne et latino-américaine à Toulouse. Cet événement énergique propose des concerts spectaculaires, des danses traditionnelles, des parades colorées et une cuisine authentique d’Amérique du Sud. Le festival transforme les rues de Toulouse en une fête joyeuse de rythmes latinos, rassemblant danseurs, musiciens et amateurs de culture venus de toute l’Europe. C’est un festival qui capture l’esprit, la passion et la joie des traditions colombiennes.',
    facts: [
      'Rio Loco présente des concerts d’artistes colombiens et latino-américains renommés.',
      'Le festival met en avant des danses traditionnelles comme la salsa, la cumbia et le reggaeton.',
      'Des parades de rue montrent des costumes élaborés, des couleurs vives et des danseurs énergiques.',
      'L’événement propose des ateliers, des expositions culturelles et des stands de cuisine colombienne authentique avec des plats traditionnels et des fruits tropicaux.'
    ],
    image: 'https://cdt31.media.tourinsoft.eu/upload/Festival-Rio-Loco-2024-copie.jpg'
  },
  {
    id: 'nuit-blanche',
    name: 'Nuit Blanche',
    date: 'premier samedi d’octobre',
    month: 10,
    city: 'Paris',
    category: 'Cultural Traditions',
    description: 'Nuit Blanche est un festival artistique nocturne annuel qui transforme Paris en une immense galerie d’art contemporain surréaliste et interactive. Du coucher au lever du soleil, musées, espaces publics, monuments et lieux inattendus accueillent des installations d’art avant-gardistes, des spectacles lumineux et des performances en direct. C’est une nuit où la ville elle-même devient une toile, invitant les habitants à redécouvrir leur environnement urbain.',
    facts: [
      'Tous les événements, expositions et transports en commun (y compris certaines lignes de métro) sont entièrement gratuits et fonctionnent toute la nuit pour accueillir les foules.',
      'Le festival propose souvent des installations monumentales et site-spécifiques, comme des œuvres flottantes sur la Seine ou de gigantesques projections lumineuses sur des façades historiques.',
      'Le concept a été créé à Paris en 2002 et a depuis été adopté par plus de 120 villes dans le monde, notamment Rome, Toronto et Kyoto.',
      'L’événement vise à rapprocher l’art contemporain d’un large public en brisant les barrières des espaces muséaux traditionnels.'
    ],
    image: 'https://cultmtl.com/wp-content/uploads/2018/02/nb-2018.jpg'
  },
  {
    id: 'beaujolais-nouveau',
    name: 'Beaujolais Nouveau Day',
    date: 'troisième jeudi de novembre',
    month: 11,
    city: 'Nationwide',
    category: 'Food & Wine',
    description: 'La Journée du Beaujolais Nouveau est une célébration joyeuse marquant la sortie du premier vin français de la saison. Issu du cépage Gamay dans la région du Beaujolais, ce vin jeune est fermenté pendant seulement quelques semaines avant d’être expédié sur les marchés. Sa sortie est un événement très attendu, célébré dans les bistrots, cafés et restaurants de France et du monde entier, symbolisant la fin des vendanges et le début de la saison festive.',
    facts: [
      'Par une loi française stricte, le vin ne peut être mis en vente qu’à 0h01 le troisième jeudi de novembre.',
      'La phrase « Le Beaujolais nouveau est arrivé ! » est utilisée pour annoncer la sortie du vin.',
      'Ce vin est léger, fruité et doit être bu jeune et légèrement frais ; il n’est pas fait pour être conservé.',
      'La région du Beaujolais organise d’immenses fêtes, notamment « Les Sarmentelles » à Beaujeu, avec un cortège aux flambeaux et des feux d’artifice.'
    ],
    image: 'https://cdn.shoplightspeed.com/shops/635650/files/66707883/copy-of-tasting-room-slides.png'
  },
  {
    id: 'strasbourg-christmas',
    name: 'Strasbourg Christmas Market',
    date: 'fin novembre - 24 décembre',
    month: 12,
    city: 'Strasbourg',
    category: 'Cultural Traditions',
    description: 'Le marché de Noël de Strasbourg (Christkindelsmärik) est l’un des plus anciens, des plus grands et des plus magiques d’Europe. Située en Alsace, la ville met à profit son héritage franco-allemand pour créer une atmosphère festive unique. Le centre-ville entier est illuminé de kilomètres de guirlandes, transformant Strasbourg en la « Capitale de Noël », embaumée par l’odeur du vin chaud, du pain d’épices et des marrons grillés.',
    facts: [
      'Créé en 1570, c’est le plus ancien marché de Noël de France et l’un des plus anciens d’Europe.',
      'Le marché comporte plus de 300 chalets en bois répartis sur plusieurs places du centre-ville, notamment autour de la magnifique cathédrale de Strasbourg.',
      'Un immense sapin de Noël décoré (Le Grand Sapin), souvent de plus de 30 mètres de haut, est dressé place Kléber.',
      'Le marché est réputé pour son artisanat alsacien traditionnel, ses décorations et ses spécialités culinaires comme les bredeles (biscuits de Noël) et le vin chaud.'
    ],
    image: 'https://www.afsf.com/media/website_pages/news/blog/bculture/the-strasbourg-christmas-market-a-celebration-of-magic-tradition-and-local-craftsmanship/strasbourg-marche-de-noel.jpeg'
  }
];
