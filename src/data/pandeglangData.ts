export interface Destination {
  id: string;
  title: string;
  tagline: string;
  category: 'eco-tourism' | 'coastal' | 'heritage' | 'culinary';
  zone: 'north' | 'central' | 'south';
  badge: string;
  heroImage: string;
  description: string;
  highlights: string[];
  travelTime: string;
  coordinates: string;
  bestTime: string;
  conservationStatus?: string;
  ticketPrice: string;
}

export interface ZoneInfo {
  id: 'north' | 'central' | 'south';
  name: string;
  title: string;
  subtitle: string;
  theme: string;
  accentColor: string;
  gradient: string;
  elevation: string;
  travelFromJakarta: string;
  keyDistricts: string[];
  climate: string;
  summary: string;
  topSpots: { name: string; type: string; distance: string }[];
}

export interface ItineraryItem {
  time: string;
  activity: string;
  location: string;
  zone: string;
  notes: string;
  type: 'travel' | 'adventure' | 'meal' | 'culture' | 'leisure';
}

export interface DynamicItinerary {
  id: string;
  profile: 'solo' | 'family' | 'adventurer';
  duration: '24h' | '48h' | '72h';
  title: string;
  tagline: string;
  budgetEstimate: {
    budget: string;
    comfort: string;
    luxury: string;
  };
  recommendedGear: string[];
  schedule: ItineraryItem[];
  routeHighlights: string[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'ujung-kulon',
    title: 'Ujung Kulon National Park',
    tagline: 'Last Prehistoric Sanctuary of the Javan Rhino',
    category: 'eco-tourism',
    zone: 'south',
    badge: 'UNESCO World Heritage Site',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    description: 'An irreplaceable biosphere sanctuary at the southwesternmost tip of Java. Preserving the world’s last remaining 80+ wild Javan Rhinos (Rhinoceros sondaicus), ancient lowland rainforests, and the crystalline coral shores of Peucang Island.',
    highlights: [
      'Java Rhino conservation monitoring zone',
      'Cidaon Savannah — wild banteng & peacock grazing grounds',
      'Peucang Island pristine turquoise coral reef waters',
      'Cigenter river canoeing through mangrove canopies',
      'Mount Honje buffer community eco-villages'
    ],
    travelTime: '5.5h from Jakarta (via Serang-Panimbang corridor & Sumur)',
    coordinates: '6°45\'S 105°20\'E',
    bestTime: 'April to October (Dry Trade Winds)',
    conservationStatus: 'Strict Nature Reserve (Zona Inti Konservasi)',
    ticketPrice: 'IDR 150,000 / $10 USD (Permit & Ranger Escort required)'
  },
  {
    id: 'tanjung-lesung',
    title: 'Tanjung Lesung Special Economic Zone',
    tagline: 'Sunsets, World-Class Watersports & Krakatau Panoramas',
    category: 'coastal',
    zone: 'south',
    badge: 'National Tourism SEZ (KEK)',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description: 'A 1,500-hectare pristine coastal enclave fronting the legendary Sunda Strait. Known as the sunset capital of Western Java, where golden hour illuminates the distant silhouette of Anak Krakatau across tranquil waters.',
    highlights: [
      'Lalassa Beach Club & deep-sea catamaran sailing',
      'Bodur Beach private coastal cliff sunset pavilion',
      'Coral garden rehabilitation & snorkel safaris',
      'Bantenese culinary pavilions & seafront villas',
      'Certified PADI dive training center'
    ],
    travelTime: '3.5h from Jakarta via Toll Road Serang Barat',
    coordinates: '6°29\'S 105°39\'E',
    bestTime: 'Year-round, exceptional sunsets June–September',
    ticketPrice: 'IDR 40,000 - 60,000 / Resort Day Pass'
  },
  {
    id: 'mount-karang-cisolong',
    title: 'Highlands & Ancient Heritage',
    tagline: 'Misty Summits, Geothermal Springs & Sacred Stone Basins',
    category: 'heritage',
    zone: 'north',
    badge: 'Sacred Geopark & Geothermal Springs',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    description: 'The green roof of Pandeglang. Dominated by the 1,778-meter stratovolcano Mount Karang, ancient megalithic bathing springs of Citaman fed by volcanic aquifers, and the restorative sulfur baths of Cisolong.',
    highlights: [
      'Mount Karang peak trail (Sumur Tujuh mystical highland ponds)',
      'Cisolong Natural Geothermal Spa with therapeutic mineral waters',
      'Citaman megalithic prehistoric stone pool (water cold as mountain ice)',
      'Cadasari agro-tourism organic coffee & clove terraces',
      'Panoramic viewpoints overlooking the Sunda Strait from 1,200m'
    ],
    travelTime: '2h from Jakarta via Serang Timur Exit',
    coordinates: '6°16\'S 106°03\'E',
    bestTime: 'Early morning for sunrise hikes; evening for geothermal baths',
    ticketPrice: 'IDR 10,000 - 25,000'
  },
  {
    id: 'flavors-crafts-labuan',
    title: 'Authentic Flavors & Menes Heritage',
    tagline: 'Smoked Labuan Catch, Balok Cakes & Melinjo Artisans',
    category: 'culinary',
    zone: 'central',
    badge: 'Living Intangible Heritage',
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    description: 'A sensory journey through historic trading hubs. From the bustling wooden bagan fish docks of Labuan smoking sweet coconut husk fish, to the centuries-old recipe of Balok Menes cassava cakes and hand-hammered melinjo emping.',
    highlights: [
      'Labuan Fresh Fish Market — charcoal grill with sambal kecap & honje',
      'Kue Balok Menes — soft cassava cake with fragrant toasted coconut serundeng',
      'Emping Menes — artisanal melinjo chips hand-hammered since 1890',
      'Bantenese Angeun Lada spicy stew with wild torch ginger leaves',
      'Traditional pandan mat weaving workshops in Cikeusik'
    ],
    travelTime: '2.5h from Jakarta (via Menes cultural corridor)',
    coordinates: '6°24\'S 105°55\'E',
    bestTime: 'Morning markets (06:00 - 10:00) & Night Seafood Grills',
    ticketPrice: 'Free exploration / Street eats IDR 5,000 - 65,000'
  }
];

export const ZONES: ZoneInfo[] = [
  {
    id: 'north',
    name: 'North Zone',
    title: 'Heritage, Highlands & Agro-Tourism',
    subtitle: 'Mount Karang • Cadasari • Citaman Springs • Cisolong',
    theme: 'Lush misty highlands, therapeutic thermal springs, and sacred megalithic archaeological grounds.',
    accentColor: '#0F382C',
    gradient: 'from-emerald-900 via-emerald-800 to-teal-950',
    elevation: '400m – 1,778m ASL',
    travelFromJakarta: '2.0 Hours (via Serang Exit)',
    keyDistricts: ['Pandeglang Kota', 'Cadasari', 'Mandalawangi', 'Kaduhejo'],
    climate: 'Cool Mountain Breeze, 19°C – 26°C',
    summary: 'The highland sanctum of Banten. Mount Karang towers over ancient stone springs and geothermal waters, offering high-elevation trekking and tranquil agro-forestry estates producing clove, robusta coffee, and wild forest honey.',
    topSpots: [
      { name: 'Mount Karang Summit (Sumur Tujuh)', type: 'Hiking & Sacred Springs', distance: '12 km from center' },
      { name: 'Cisolong Geothermal Bathing', type: 'Natural Mineral Spa', distance: '8 km from center' },
      { name: 'Citaman Megalithic Pool', type: 'Prehistoric Bathing Basin', distance: '14 km from center' },
      { name: 'Kampung Domba Highland Vista', type: 'Agro-Tourism & Scenic Cafe', distance: '6 km from center' }
    ]
  },
  {
    id: 'central',
    name: 'Central Zone',
    title: 'Cultural Heartland & Coastal Trading Hubs',
    subtitle: 'Menes Cultural Cradle • Labuan Port • Carita Coast',
    theme: 'Centuries of folk arts, Rampak Beduk masters, maritime fish docks, and vibrant local trade.',
    accentColor: '#1B4965',
    gradient: 'from-slate-900 via-blue-950 to-sky-950',
    elevation: '0m – 150m ASL',
    travelFromJakarta: '2.5 – 3.0 Hours',
    keyDistricts: ['Menes', 'Labuan', 'Carita', 'Jiput', 'Pagelaran'],
    climate: 'Coastal Tropical, 26°C – 32°C',
    summary: 'The living heartbeat of Pandeglang tradition. Menes is revered across Banten for its master percussions and culinary craft, while Labuan acts as the historic marine nexus connecting sea voyages, fishing fleets, and beach retreats.',
    topSpots: [
      { name: 'Menes Town Square & Craft Center', type: 'Rampak Beduk Hub & Emping', distance: 'Historic district' },
      { name: 'Labuan Traditional Fish Market & Harbor', type: 'Seafood Grills & Bagan Fleet', distance: '18 km from Menes' },
      { name: 'Carita White Sandy Beach', type: 'Family Coastal Recreation', distance: '22 km from Menes' },
      { name: 'Curug Putri Little Grand Canyon', type: 'River Trekking & Waterfalls', distance: '15 km from Carita' }
    ]
  },
  {
    id: 'south',
    name: 'South Zone',
    title: 'Prehistoric Conservation & Untamed Horizons',
    subtitle: 'Ujung Kulon Sanctuary • Tanjung Lesung SEZ • Panimbang • Sumur',
    theme: 'Untouched Jurassic wilderness, wild Javan rhinos, world-class luxury resorts, and wild Indian Ocean surf.',
    accentColor: '#E76F51',
    gradient: 'from-amber-950 via-stone-900 to-emerald-950',
    elevation: 'Sea Level to 600m (Mt. Honje)',
    travelFromJakarta: '3.5 – 5.5 Hours (direct coastal expressway link)',
    keyDistricts: ['Panimbang', 'Sumur', 'Cimanggu', 'Cikeusik', 'Tanjung Lesung'],
    climate: 'Maritime Equatorial, 25°C – 31°C',
    summary: 'The dramatic edge of Java. Here, luxury coastal lifestyle in Tanjung Lesung meets the raw biodiversity of Ujung Kulon National Park. Pristine coral islands, savannahs grazed by wild bantengs, and breathtaking Krakatau sunset vistas.',
    topSpots: [
      { name: 'Ujung Kulon National Park (Tamanjaya Entry)', type: 'UNESCO Biosphere Reserve', distance: 'Gateway: Sumur' },
      { name: 'Tanjung Lesung Marina & Beach Club', type: 'Resort SEZ & Diving Hub', distance: 'Panimbang corridor' },
      { name: 'Peucang Island & Coral Reef', type: 'White Sand & Snorkel Safari', distance: '2h boat ride from Sumur' },
      { name: 'Cidaon Grazing Savannah', type: 'Wild Javan Rhino & Banteng Area', distance: 'Boat access only' }
    ]
  }
];

export const CULTURAL_STORIES = [
  {
    id: 'rampak-beduk',
    title: 'Rampak Beduk: The Thunder of Pandeglang',
    subtitle: 'Rhythmic martial choreography meets sacred Islamic drumming',
    quote: '"When the beduk roars in unison across the square, every heartbeat in Pandeglang finds its collective cadence."',
    storyteller: 'Ki Tubagus Syafi’i, 4th-generation Menes Master Drummer',
    tag: 'Living Masterpiece',
    content: 'Originating in Menes as an improvisational announcement before Ramadan evening prayers, Rampak Beduk evolved into a world-renowned ensemble performance. Teams of male and female drummers combine thunderous acoustic percussion with energetic Silat martial arts stances, kaleidoscopic costumes, and synchronized acrobatic stick maneuvers.',
    audioCue: '60–120 BPM polyrhythmic syncopation with copper gong accents',
    culturalRole: 'Inscribed as Regional Intangible Cultural Heritage of Pandeglang, performed annually during the Pandeglang Geopark & Culture Festival.'
  },
  {
    id: 'maritime-bagan',
    title: 'Echoes of the Sunda Strait: The Bagan Fishermen',
    subtitle: 'Centuries-old sustainable night fishing from floating bamboo sanctuaries',
    quote: '"We read the stars and the tide of Krakatau; the sea gives everything to those who respect its silence."',
    storyteller: 'Pak Juhri, Labuan Bagan Cooperative Leader',
    tag: 'Coastal Lifeline',
    content: 'Under the inky night skies of the Sunda Strait, floating bamboo outposts known as "Bagan" illuminate the water with kerosene lanterns and warm LEDs to attract squid and anchovy shoals. By dawn, the Labuan harbor comes alive as fishermen unload shimmering catches straight to the charcoal grills along the shore.',
    audioCue: 'Gentle night swell against bamboo pylons and crackling charcoal embers',
    culturalRole: 'Provides sustainable livelihoods for over 4,200 coastal families while preserving traditional maritime knowledge passed through songs.'
  },
  {
    id: 'rhino-guardians',
    title: 'Guardians of the Last Javan Rhino',
    subtitle: 'Community-led anti-poaching patrols and rainforest restoration in Ujung Kulon',
    quote: '"Protecting the Javan Rhino is not merely biology; it is keeping the spirit of ancient Java alive for humanity."',
    storyteller: 'Siti Rohimah, Rainforest Buffer Zone Conservation Educator',
    tag: 'Biosphere Sanctuary',
    content: 'Operating deep in the untamed rainforests of Ujung Kulon, Rhino Protection Units (RPUs) formed by indigenous village rangers trek through muddy swamp trails for weeks at a time. Through camera trapping, invasive plant removal, and community agroforestry, Pandeglang leads the global effort to shield this solitary mammal from extinction.',
    audioCue: 'Dense tropical canopy sounds, distant hornbill calls, and rain on wild banana leaves',
    culturalRole: 'Ensures zero poaching incidents over the past decade and fosters regenerative eco-tourism homestays around Mount Honje.'
  }
];

export const DYNAMIC_ITINERARIES: DynamicItinerary[] = [
  {
    id: 'solo-24h',
    profile: 'solo',
    duration: '24h',
    title: 'The Solitary Highlands & Sunset Chase',
    tagline: 'An introspective 24-hour sprint from Mount Karang dawn mist to Tanjung Lesung golden hour.',
    budgetEstimate: {
      budget: 'IDR 450,000 (~$28)',
      comfort: 'IDR 850,000 (~$55)',
      luxury: 'IDR 2,200,000 (~$140)'
    },
    recommendedGear: [
      'Light trail shoes with grip',
      'Quick-dry swim gear for geothermal springs',
      'Camera with polarising filter for coastal sunset',
      'Cash for village markets'
    ],
    routeHighlights: ['Mount Karang foothills', 'Cisolong Hot Springs', 'Menes balok cake brunch', 'Tanjung Lesung sunset point'],
    schedule: [
      { time: '06:00 AM', activity: 'Highland sunrise trek through Cadasari clove estates', location: 'Mount Karang North Ridge', zone: 'North', notes: 'Breathtaking sea-of-clouds view across Pandeglang valley.', type: 'adventure' },
      { time: '08:30 AM', activity: 'Therapeutic sulfur soak & volcanic tea degustation', location: 'Cisolong Geothermal Bath', zone: 'North', notes: 'Relax tired muscles in naturally heated 40°C mineral pools.', type: 'leisure' },
      { time: '11:30 AM', activity: 'Artisanal Balok Menes cake & kopi robusta tasting', location: 'Menes Old Market Hub', zone: 'Central', notes: 'Watch cassava cakes steamed fresh and tossed in savory coconut serundeng.', type: 'meal' },
      { time: '02:00 PM', activity: 'Scenic coastal drive along Panimbang bypass', location: 'Panimbang Corridor', zone: 'South', notes: 'Windows down through tropical rice paddies meeting the coast.', type: 'travel' },
      { time: '04:30 PM', activity: 'Sunset paddleboard & Krakatau horizon viewing', location: 'Tanjung Lesung Lalassa Bay', zone: 'South', notes: 'Golden hour at the edge of Java with sunset cocktails.', type: 'leisure' },
      { time: '07:30 PM', activity: 'Charcoal grilled red snapper with honje sambal', location: 'Labuan Waterfront Grill Hub', zone: 'Central', notes: 'Fresh catch cooked over coconut husks before journey home.', type: 'meal' }
    ]
  },
  {
    id: 'solo-48h',
    profile: 'solo',
    duration: '48h',
    title: 'Sunda Strait Eco-Expedition & Coral Solitude',
    tagline: 'A weekend solo sanctuary: river canoeing, coastal cliffs, and village homestays.',
    budgetEstimate: {
      budget: 'IDR 950,000 (~$60)',
      comfort: 'IDR 1,900,000 (~$120)',
      luxury: 'IDR 4,800,000 (~$310)'
    },
    recommendedGear: [
      'Dry bag (20L) for boat transfers',
      'Snorkel mask & reef-safe sunblock',
      'Comfortable lightweight rain shell',
      'Headlamp for night village walks'
    ],
    routeHighlights: ['Citaman sacred pool', 'Labuan fish docks', 'Sumur gateway', 'Handeuleum island mangrove kayak'],
    schedule: [
      { time: 'Day 1 • 07:00 AM', activity: 'Ice-cold dip in prehistoric Citaman spring pool', location: 'Citaman Megalithic Site', zone: 'North', notes: 'Crystal clear volcanic spring surrounded by thousand-year-old trees.', type: 'adventure' },
      { time: 'Day 1 • 12:00 PM', activity: 'Fisherman harbor lunch & wooden boat docks', location: 'Labuan Fish Auction', zone: 'Central', notes: 'Interact with local bagan skippers and sample fried baby squid.', type: 'meal' },
      { time: 'Day 1 • 05:00 PM', activity: 'Sumur coastal sunset check-in at eco-lodge', location: 'Sumur Coast', zone: 'South', notes: 'Stargazing by the bay; quiet preparation for national park entry.', type: 'leisure' },
      { time: 'Day 2 • 06:30 AM', activity: 'Traditional wooden klotok boat to Handeuleum', location: 'Cigenter Estuary', zone: 'South', notes: 'Quiet morning water glide spotting monitor lizards and kingfishers.', type: 'adventure' },
      { time: 'Day 2 • 09:30 AM', activity: 'Canoeing through Ujung Kulon virgin mangrove forests', location: 'Cigenter River Safari', zone: 'South', notes: 'Jurassic atmosphere flanked by untouched primordial rainforest canopy.', type: 'adventure' },
      { time: 'Day 2 • 03:30 PM', activity: 'Artisanal melinjo chip workshop & souvenir stop', location: 'Menes Village Collective', zone: 'Central', notes: 'Pack fresh emping chips directly from the hammer smiths.', type: 'culture' }
    ]
  },
  {
    id: 'solo-72h',
    profile: 'solo',
    duration: '72h',
    title: 'The Untamed Wilds: Ujung Kulon Deep Trek',
    tagline: 'The ultimate explorer’s quest to the prehistoric edge of Java: Peucang Island & Cidaon.',
    budgetEstimate: {
      budget: 'IDR 2,400,000 (~$155)',
      comfort: 'IDR 4,600,000 (~$295)',
      luxury: 'IDR 8,900,000 (~$570)'
    },
    recommendedGear: [
      'High-ankle hiking boots for wet terrain',
      'Leech socks & jungle mosquito repellent',
      'Powerbank (20,000mAh) — limited island grid',
      'Waterproof binoculars for wildlife spotting'
    ],
    routeHighlights: ['Tamanjaya Ranger Post', 'Peucang Island White Sand', 'Cidaon Savannah Watchtower', 'Karang Copong sunset arch'],
    schedule: [
      { time: 'Day 1 • Full Day', activity: 'Ranger briefing & speedboat transfer to Peucang Island', location: 'Peucang Island Biosphere', zone: 'South', notes: 'Wild deer roaming freely on white sand beach; check-in at national park lodge.', type: 'adventure' },
      { time: 'Day 2 • 05:30 AM', activity: 'Dawn wildlife vigil at Cidaon savannah', location: 'Cidaon Grazing Ground', zone: 'South', notes: 'Lookout tower views of wild banteng herds, green peacocks, and rhino tracks.', type: 'adventure' },
      { time: 'Day 2 • 02:00 PM', activity: 'Jungle trek to Karang Copong natural sea rock arch', location: 'Peucang North Cape', zone: 'South', notes: 'Vibrant reef snorkeling; sunset over the open Indian Ocean.', type: 'leisure' },
      { time: 'Day 3 • 10:00 AM', activity: 'Return voyage along Mount Honje coastal buffer', location: 'Sumur to Panimbang', zone: 'South', notes: 'Restful seaside lunch with fresh coconut water.', type: 'travel' }
    ]
  },
  {
    id: 'family-24h',
    profile: 'family',
    duration: '24h',
    title: 'Family Coastal Sun & Heritage Fun',
    tagline: 'Easy-access recreation, calm sandy bays, and kid-friendly cultural sweets.',
    budgetEstimate: {
      budget: 'IDR 800,000 (~$50)',
      comfort: 'IDR 1,600,000 (~$100)',
      luxury: 'IDR 3,500,000 (~$225)'
    },
    recommendedGear: [
      'Kids life jackets & beach footwear',
      'Sun hats, UV rash guards & towels',
      'Family picnic mat & foldable chairs',
      'Portable mini cooler'
    ],
    routeHighlights: ['Carita calm beach', 'Menes sweet treats', 'Cisolong warm mineral family pools'],
    schedule: [
      { time: '08:30 AM', activity: 'Gentle morning splash in shallow sandy waters', location: 'Carita White Sand Bay', zone: 'Central', notes: 'Gentle waves suitable for toddlers; banana boat rides for older kids.', type: 'leisure' },
      { time: '12:00 PM', activity: 'Family seafood feast at coastal garden pavilion', location: 'Carita Seafood Terrace', zone: 'Central', notes: 'Grilled sweet butter prawns, calamari, and mild sweet-sour fish.', type: 'meal' },
      { time: '02:30 PM', activity: 'Interactive Balok Menes sweet cake workshop', location: 'Menes Heritage House', zone: 'Central', notes: 'Kids can shape and sprinkle sweet coconut onto soft cassava balok.', type: 'culture' },
      { time: '04:30 PM', activity: 'Relaxing soak in shallow warm family springs', location: 'Cisolong Hot Springs', zone: 'North', notes: 'Soothing temperature pools surrounded by shaded fruit trees.', type: 'leisure' }
    ]
  },
  {
    id: 'family-48h',
    profile: 'family',
    duration: '48h',
    title: 'Tanjung Lesung Resort & Marine Safari',
    tagline: 'A seamless multi-generation getaway with resort amenities and glass-bottom boats.',
    budgetEstimate: {
      budget: 'IDR 1,800,000 (~$115)',
      comfort: 'IDR 3,800,000 (~$245)',
      luxury: 'IDR 7,500,000 (~$480)'
    },
    recommendedGear: [
      'Reef booties for family reef exploration',
      'Board games & evening books',
      'Camera with video stabilizer',
      'Motion sickness drops for boat trips'
    ],
    routeHighlights: ['Tanjung Lesung SEZ private villas', 'Liwungan Island coral garden', 'Rampak Beduk children ensemble'],
    schedule: [
      { time: 'Day 1 • 10:00 AM', activity: 'Check-in to beachfront family villa in Tanjung Lesung', location: 'Tanjung Lesung Beach Hotel', zone: 'South', notes: 'Spacious lawns, bicycle rentals, and calm infinity pools.', type: 'leisure' },
      { time: 'Day 1 • 02:00 PM', activity: 'Glass-bottom boat tour to Liwungan Island reef', location: 'Liwungan Marine Park', zone: 'South', notes: 'Marvel at colorful clownfish and coral rehabilitation nurseries.', type: 'adventure' },
      { time: 'Day 1 • 06:00 PM', activity: 'Beachside barbecue buffet under the stars', location: 'Lalassa Beach Club', zone: 'South', notes: 'Live acoustic music and marshmallow campfire for children.', type: 'meal' },
      { time: 'Day 2 • 09:30 AM', activity: 'Private Rampak Beduk drumming demonstration', location: 'Menes Cultural Studio', zone: 'Central', notes: 'Hands-on percussions lesson where children play small beduk drums.', type: 'culture' }
    ]
  },
  {
    id: 'family-72h',
    profile: 'family',
    duration: '72h',
    title: 'The Great Pandeglang Grand Tour',
    tagline: 'From volcanic highland strawberry farms to Krakatau coastal sailing.',
    budgetEstimate: {
      budget: 'IDR 3,200,000 (~$205)',
      comfort: 'IDR 6,500,000 (~$415)',
      luxury: 'IDR 13,000,000 (~$830)'
    },
    recommendedGear: ['Full outdoor family kit', 'Binoculars', 'Stroller with all-terrain wheels', 'Waterproof phone pouches'],
    routeHighlights: ['Kampung Domba highland park', 'Carita beach lodge', 'Tanjung Lesung SEZ', 'Liwungan Island'],
    schedule: [
      { time: 'Day 1 • Full Day', activity: 'Highland agro-farm tour & fruit picking on Mt Karang slopes', location: 'Kampung Domba & Cadasari', zone: 'North', notes: 'Feed sheep, pick fresh organic vegetables, and taste fresh goat milk.', type: 'leisure' },
      { time: 'Day 2 • Full Day', activity: 'Curug Putri river canyon splash & Carita beach sunset', location: 'Carita & Curug Putri', zone: 'Central', notes: 'Walk along safe shallow stream gorge nicknamed the Little Grand Canyon.', type: 'adventure' },
      { time: 'Day 3 • Full Day', activity: 'Tanjung Lesung resort watersports & cultural dinner', location: 'Tanjung Lesung SEZ', zone: 'South', notes: 'Catamaran cruise, sunset photos, and farewell Bantenese banquet.', type: 'leisure' }
    ]
  },
  {
    id: 'adventurer-24h',
    profile: 'adventurer',
    duration: '24h',
    title: 'The Volcano-to-Reef Extreme Challenge',
    tagline: 'Summit Mount Karang by night, canyon-trek Curug Putri by noon, and surf by dusk.',
    budgetEstimate: {
      budget: 'IDR 500,000 (~$32)',
      comfort: 'IDR 950,000 (~$60)',
      luxury: 'IDR 2,400,000 (~$150)'
    },
    recommendedGear: [
      'Grip trekking boots with gaiters',
      'Waterproof action camera (GoPro)',
      'Life vest & river trekking shoes',
      'High-protein trail snacks'
    ],
    routeHighlights: ['Mt. Karang night trail', 'Curug Putri river canyon', 'Carita coastal reef surf point'],
    schedule: [
      { time: '02:30 AM', activity: 'Midnight summit ascent of Mount Karang (1,778m)', location: 'Mount Karang Trailhead', zone: 'North', notes: 'Climb through dense mossy forest to reach Sumur Tujuh for dawn.', type: 'adventure' },
      { time: '06:00 AM', activity: 'Summit sunrise spectacle overlooking Sunda Strait', location: 'Mount Karang Peak', zone: 'North', notes: 'Panoramic views across the whole Banten peninsula in golden light.', type: 'adventure' },
      { time: '11:00 AM', activity: 'Body-rafting through Curug Putri Little Grand Canyon', location: 'Tahura Banten Canyon', zone: 'Central', notes: 'Float between towering 15m curved basalt canyon walls in teal water.', type: 'adventure' },
      { time: '04:00 PM', activity: 'Surf session on Carita reef break at outgoing tide', location: 'Carita Surf Break', zone: 'Central', notes: 'Consistent right-hand reef waves framed by sunset clouds.', type: 'adventure' }
    ]
  },
  {
    id: 'adventurer-48h',
    profile: 'adventurer',
    duration: '48h',
    title: 'Wild Coast Traverse & Mangrove Survival',
    tagline: 'Klotok navigation, open sea kayaking, and jungle survival in Ujung Kulon buffer.',
    budgetEstimate: {
      budget: 'IDR 1,200,000 (~$77)',
      comfort: 'IDR 2,400,000 (~$155)',
      luxury: 'IDR 5,500,000 (~$350)'
    },
    recommendedGear: [
      'Sea kayak dry packs',
      'Marine compass & GPS watch',
      'Sturdy jungle machete / multitool',
      'Water purification tablets'
    ],
    routeHighlights: ['Curug Putri canyon', 'Cigenter river kayak', 'Sumur wild coastline', 'Handeuleum island'],
    schedule: [
      { time: 'Day 1 • 08:00 AM', activity: 'Technical canyoning down Curug Gendang waterfall', location: 'Carita Forest Reserve', zone: 'Central', notes: 'Rappelling down 18-meter spray face into cool forest basin.', type: 'adventure' },
      { time: 'Day 1 • 03:00 PM', activity: 'Overland dirt track ride to Sumur southern outpost', location: 'Sumur Coast', zone: 'South', notes: 'Pass remote coastal fishing settlements and rugged palm bluffs.', type: 'travel' },
      { time: 'Day 2 • 06:00 AM', activity: 'Open water sea kayak to Handeuleum Island', location: 'Sunda Strait Inner Bay', zone: 'South', notes: 'Paddle across mirror-calm coastal bay with flying fish gliding alongside.', type: 'adventure' },
      { time: 'Day 2 • 10:30 AM', activity: 'Deep river mangrove navigation tracking python habitats', location: 'Cigenter Wild River', zone: 'South', notes: 'Silent canoe stroke through primeval river bends with local ranger.', type: 'adventure' }
    ]
  },
  {
    id: 'adventurer-72h',
    profile: 'adventurer',
    duration: '72h',
    title: 'The Edge of Java: Ujung Kulon Wilderness Expedition',
    tagline: 'A multi-day ranger-led wilderness trek through the core zone of Javan Rhinos.',
    budgetEstimate: {
      budget: 'IDR 2,800,000 (~$180)',
      comfort: 'IDR 5,200,000 (~$335)',
      luxury: 'IDR 9,800,000 (~$630)'
    },
    recommendedGear: [
      'Expedition 65L rucksack',
      'Survival water filter & electrolyte packs',
      'Full satellite communicator / InReach',
      'Snake gaiters & heavy-duty jungle hammock'
    ],
    routeHighlights: ['Tamanjaya Basecamp', 'Peucang Coral Reserve', 'Cidaon Grasslands', 'Ciramea Turtle Beach', 'Karang Copong'],
    schedule: [
      { time: 'Day 1 • Full Day', activity: 'Expedition crossing to Peucang Island & night turtle patrol', location: 'Peucang & Ciramea Beach', zone: 'South', notes: 'Witness olive ridley and green sea turtles nesting on isolated southern surf beaches.', type: 'adventure' },
      { time: 'Day 2 • Full Day', activity: 'Deep jungle tracking with official anti-poaching ranger', location: 'Ujung Kulon Core Biosphere', zone: 'South', notes: 'Identify fresh rhino wallows, scratch markings, and wild banteng trails.', type: 'adventure' },
      { time: 'Day 3 • Full Day', activity: 'Free-dive coral drop-off & sea-cave exploration', location: 'Karang Copong Reef Wall', zone: 'South', notes: 'Dive along 30-meter vertical drop-off teeming with pelagic fish and sea turtles.', type: 'adventure' }
    ]
  }
];

export const EMERGENCY_CONTACTS = [
  { name: 'Balai Taman Nasional Ujung Kulon (TNUK)', phone: '+62 253 880 864', role: 'National Park Dispatch & Ranger Emergency', location: 'Labuan & Tamanjaya' },
  { name: 'Tourist Police Station Pandeglang', phone: '+62 253 201 110', role: '24/7 Visitor Security & Incident Support', location: 'Pandeglang Regency Command' },
  { name: 'RSUD Berkah Pandeglang (General Hospital)', phone: '+62 253 202 056', role: 'Regional Emergency & Medical Trauma Care', location: 'Jl. Raya Labuan KM 3' },
  { name: 'Basarnas / SAR Banten Sea Rescue', phone: '+62 254 397 788', role: 'Marine Search & Coastal Evacuation Dispatch', location: 'Sunda Strait Operations' },
  { name: 'Tanjung Lesung Medical Clinic', phone: '+62 253 802 900', role: 'Resort Emergency First Aid & Doctor on Call', location: 'KEK Tanjung Lesung' },
  { name: 'HPI Pandeglang (Licensed Tour Guides)', phone: '+62 812 8890 2341', role: 'Verified Eco-Guides & Translator Registry', location: 'Menes & Labuan' }
];

export const REGIONAL_EVENTS = [
  {
    month: 'AUG 2026',
    title: 'Pandeglang Geopark & Culture Week',
    location: 'Menes & Pandeglang Square',
    category: 'Culture & Arts',
    desc: 'Featuring the legendary 500-drummer Rampak Beduk Grand Championship, heirloom culinary bazaar, and traditional silat martial demonstrations.'
  },
  {
    month: 'SEP 2026',
    title: 'Tanjung Lesung Sunset Jazz & Regatta',
    location: 'KEK Tanjung Lesung Marina',
    category: 'Music & Watersports',
    desc: 'Sailing regatta across the Sunda Strait followed by sunset acoustic jazz on the beach as the sun drops behind the horizon.'
  },
  {
    month: 'OCT 2026',
    title: 'Ujung Kulon World Heritage Trail Run',
    location: 'Sumur & Mount Honje Buffer',
    category: 'Eco-Athletics',
    desc: '25K and 50K trail marathon traversing coastal bluffs, coastal villages, and secondary rainforests promoting rhino conservation.'
  },
  {
    month: 'NOV 2026',
    title: 'Labuan Nadran Sea Harvest Festival',
    location: 'Labuan Traditional Fish Harbor',
    category: 'Maritime Heritage',
    desc: 'Vibrant sea-offering ritual with over 200 decorated wooden bagan fishing vessels parading into the Sunda Strait in Thanksgiving.'
  }
];

