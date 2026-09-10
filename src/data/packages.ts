import { Package } from '@/types';

export const packages: Package[] = [
  {
    id: 'amalfi-grand-azure',
    title: 'Amalfi Coast: Grand Azure & Capri Yacht Voyage',
    destination: 'Amalfi Coast & Capri',
    country: 'Italy',
    region: 'Europe',
    type: 'Coastal & Island',
    duration: '7 Days / 6 Nights',
    groupSize: 'Private (2-8 Guests)',
    price: 4850,
    originalPrice: 5600,
    rating: 4.98,
    reviewCount: 94,
    badge: 'Signature Expedition',
    featured: true,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop',
    overview:
      'Indulge in the premier Italian Riviera lifestyle. Featuring clifftop 5-star Belmond sanctuaries, private Riva speedboat cruising to the Faraglioni rocks of Capri, lemon-scented terrace dinners, and exclusive vintage cellar tastings.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Naples & Helicopter Transfer to Positano',
        description:
          'VIP tarmac greeting, scenic helicopter flight over Mount Vesuvius to your clifftop villa suite. Welcome champagne dinner on private terrace.',
      },
      {
        day: 2,
        title: 'Private Yacht Charter to Capri & Blue Grotto',
        description:
          'Board a sleek 48ft Riva yacht for a day circumnavigating Capri, secluded swim stops in turquoise coves, and lunch at legendary La Fontelina.',
      },
      {
        day: 3,
        title: 'Artisan Perfumeries & Ravello Infinity Gardens',
        description:
          'Stroll the romantic clifftop gardens of Villa Cimbrone and Villa Rufolo with an architectural historian, followed by a bespoke perfume crafting atelier.',
      },
      {
        day: 4,
        title: 'Sentiero degli Dei (Path of the Gods) & Vineyard Lunch',
        description:
          'Guided private morning ridge hike with breathtaking aerial coastal views, descending into an organic terraced vineyard for wine pairings.',
      },
      {
        day: 5,
        title: 'Hidden Grottos of Praiano & Sunset Aperitivo',
        description:
          'Private wooden gozzo boat ride to secret coastal sea-caves, followed by evening cocktails at a cliff-carved lounge overlooking the sunset.',
      },
      {
        day: 6,
        title: 'Michelin-Starred Gastronomy Masterclass',
        description:
          'Exclusive morning market sourcing with an Executive Chef, cooking in a private cliffside estate, culminated by a 7-course pairing gala.',
      },
      {
        day: 7,
        title: 'Farewell Vista & Luxury Chauffeur Departure',
        description:
          'Final morning espresso overlooking Positano cove before private Mercedes-Maybach transfer to Naples or Rome airport.',
      },
    ],
    inclusions: [
      '6 nights in 5-Star Sea-View Luxury Clifftop Suites',
      'Private Riva Yacht Charter with skipper & sommelier',
      'Helicopter arrival transfer & private Maybach departures',
      'Daily gourmet breakfast & 3 Michelin-level curated dinners',
      'Dedicated 24/7 bilingual Italian concierge',
    ],
  },
  {
    id: 'kyoto-zen-imperial',
    title: 'Kyoto Imperial: Ancient Zen & Master Artisans',
    destination: 'Kyoto & Nara',
    country: 'Japan',
    region: 'Asia',
    type: 'Cultural Heritage',
    duration: '8 Days / 7 Nights',
    groupSize: 'Private (2-6 Guests)',
    price: 5400,
    originalPrice: 6200,
    rating: 4.99,
    reviewCount: 118,
    badge: 'Curated Heritage',
    featured: true,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop',
    overview:
      'Step beyond temple velvet ropes into the hidden realms of imperial Kyoto. Experience private tea ceremonies with 15th-generation grandmasters, after-hours temple gardens, Kaiseki dining with geiko, and private onsen bathing.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival Tokyo to Kyoto via Gran Class Bullet Train',
        description:
          'VIP escort onto the Shinkansen Gran Class. Check-in to a historic Relais & Châteaux ryokan with private Japanese cypress onsen bath.',
      },
      {
        day: 2,
        title: 'After-Hours Zen Temple Meditation & Karesansui Gardens',
        description:
          'Enter Daitoku-ji before public hours. Private conversation and guided Zazen meditation with the head resident monk.',
      },
      {
        day: 3,
        title: 'Early Bamboo Whispers & Master Sword Smith Atelier',
        description:
          'Sunrise walk through Arashiyama bamboo forest, followed by a private demonstration inside a master katana bladesmith’s family forge.',
      },
      {
        day: 4,
        title: 'The Art of Chado & Private Gion Geiko Evening',
        description:
          'Formal tea ceremony in a 400-year-old teahouse. In the evening, an intimate traditional banquet in Gion with an authentic Geiko and Maiko.',
      },
      {
        day: 5,
        title: 'Nara Sacred Sika Deer & Ancient Wooden Pagodas',
        description:
          'Chauffeured trip to Nara. Private access to Todai-ji Great Buddha temple and afternoon matcha tasting at a pristine mountain retreat.',
      },
      {
        day: 6,
        title: 'Fushimi Inari Torii Gates & Sake Brewery Vaults',
        description:
          'Morning trek through the upper mountain shrine paths avoiding crowds, followed by private tasting of premier Daiginjo sakes in Fushimi.',
      },
      {
        day: 7,
        title: 'Bespoke Kintsugi Workshop & 3-Star Michelin Kaiseki',
        description:
          'Learn the ancient art of repairing gold pottery with a designated living artisan master. Grand farewell Kaiseki tasting feast.',
      },
      {
        day: 8,
        title: 'Tea Garden Contemplation & Luxury Departure',
        description:
          'Final morning stroll in your private ryokan moss garden. Limousine transfer to Kansai International or Shinkansen connection.',
      },
    ],
    inclusions: [
      '7 nights in Luxury Ryokan with In-Room Private Cedar Onsen',
      'All Shinkansen First-Class / Gran Class Tickets',
      'Private Master Cultural Historian Guide throughout',
      'Exclusive private temple permits and artisan ateliers',
      'All Kaiseki multi-course dinners and curated beverage pairings',
    ],
  },
  {
    id: 'swiss-matterhorn-alpine',
    title: 'Swiss Alps: The Matterhorn & Glacier Express Luxe',
    destination: 'Zermatt & St. Moritz',
    country: 'Switzerland',
    region: 'Europe',
    type: 'Alpine & Adventure',
    duration: '8 Days / 7 Nights',
    groupSize: 'Private (2-10 Guests)',
    price: 6400,
    originalPrice: 7100,
    rating: 4.96,
    reviewCount: 79,
    badge: 'Alpine Prestige',
    featured: true,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1600&auto=format&fit=crop',
    overview:
      'Traverse Switzerland in supreme style. Board the ultra-exclusive Glacier Express Excellence Class, stay in world-renowned alpine chalets in Zermatt and St. Moritz, and take private helicopter tours over sheer glacial walls.',
    itinerary: [
      {
        day: 1,
        title: 'Zurich Arrival & Private Panorama Flight to Zermatt',
        description:
          'VIP airport lounge reception and private helicopter flight directly into car-free Zermatt with front-row Matterhorn approaches.',
      },
      {
        day: 2,
        title: 'Gornergrat Glacier Ascent & Private Snow Adventure',
        description:
          'Private historic cogwheel carriage to 3,100m. Guided glacier walking or skiing with personal mountain guide and champagne lunch.',
      },
      {
        day: 3,
        title: 'Matterhorn Heli-Skiing or Glacial Ice Cave Trek',
        description:
          'Helicopter landing on Monte Rosa plateau. Untracked powder descents or private ice palace spelunking inside glacial caverns.',
      },
      {
        day: 4,
        title: 'Glacier Express: Excellence Class Journey',
        description:
          'Board the legendary Glacier Express in the premier Excellence Class: guaranteed window seats, dedicated concierge, and 7-course wine pairing.',
      },
      {
        day: 5,
        title: 'St. Moritz Glamour & Frozen Lake Carriage Ride',
        description:
          'Arrive at Badrutt’s Palace or Kulm Hotel. Afternoon horse-drawn sleigh ride through the snow-laden Roseg Valley with hot spiced cider.',
      },
      {
        day: 6,
        title: 'Diavolezza High Alpine Panoramic Dining',
        description:
          'Cable car to high Engadin peaks. Savor thermal outdoor whirlpool over the glaciers followed by private cellar fondue tasting.',
      },
      {
        day: 7,
        title: 'Engadin Artisan Village Stroll & Alpine Spa Rejuvenation',
        description:
          'Visit historic sgraffito-painted villages of Zuoz and Guarda. Afternoon in a world-class thermal mineral spa with mountain vistas.',
      },
      {
        day: 8,
        title: 'Private Chauffeur Transfer to Zurich',
        description:
          'Panoramic chauffeured ride through the Swiss valleys to Zurich International for your return flight.',
      },
    ],
    inclusions: [
      '7 nights in 5-Star Leading Hotels of the World alpine suites',
      'Guaranteed Glacier Express Excellence Class reserved carriage',
      'Private helicopter panoramic glacier flight',
      'Dedicated mountain guide & ski butler services',
      'Daily breakfast and gourmet alpine dinners',
    ],
  },
  {
    id: 'serengeti-great-migration',
    title: 'Serengeti & Ngorongoro: The Great Wildlife Odyssey',
    destination: 'Serengeti & Ngorongoro Crater',
    country: 'Tanzania',
    region: 'Africa',
    type: 'Wildlife & Safari',
    duration: '9 Days / 8 Nights',
    groupSize: 'Private (2-6 Guests)',
    price: 7800,
    originalPrice: 8900,
    rating: 4.99,
    reviewCount: 86,
    badge: 'Ultimate Wildlife',
    featured: true,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1600&auto=format&fit=crop',
    overview:
      'Immerse yourself into earth’s greatest wildlife drama. Experience private canvas luxury lodges situated right along the Great Migration routes, sunrise hot-air balloon flights, and secluded crater floor expeditions.',
    itinerary: [
      {
        day: 1,
        title: 'Kilimanjaro to Arusha Coffee Plantation Lodge',
        description:
          'Arrive into JRO with fast-track VIP customs assistance. Unwind in a tranquil colonial coffee estate villa.',
      },
      {
        day: 2,
        title: 'Bush Flight to North Serengeti & Mara River Lodge',
        description:
          'Fly into Kogatende airstrip. Check into an ultra-exclusive mobile canvas camp with vintage copper bathtubs overlooking the savannah.',
      },
      {
        day: 3,
        title: 'The Great River Crossing: Mara River Spectacle',
        description:
          'Full-day private game drive in customized open-sided 4x4. Track massive wildebeest and zebra herds braving crocodile waters.',
      },
      {
        day: 4,
        title: 'Dawn Hot-Air Balloon Flight & Champagne Bush Breakfast',
        description:
          'Silent sunrise flight floating over boundless herds. Land on the open plains for silver-service bush breakfast and champagne.',
      },
      {
        day: 5,
        title: 'Central Serengeti Big Cats Expedition',
        description:
          'Track pride of lions, leopards resting on acacia limbs, and cheetah sprints alongside veteran indigenous trackers.',
      },
      {
        day: 6,
        title: 'Ngorongoro Crater Rim Clifftop Sanctuary',
        description:
          'Transfer to the rim of the ancient volcanic crater. Stay in an architectural lodge overlooking the mystical cloud forest.',
      },
      {
        day: 7,
        title: 'Descent into the "Eighth Wonder": Ngorongoro Floor',
        description:
          'Early dawn descent to the 2,000ft crater floor. Encounter endangered black rhinos, flamingo flocks, and huge bull tuskers.',
      },
      {
        day: 8,
        title: 'Maasai Cultural Dialogue & Golden Hour Sundowners',
        description:
          'Authentic educational dialogue with Maasai elders and medicine men, followed by lantern-lit sundowners on a scenic escarpment.',
      },
      {
        day: 9,
        title: 'Scenic Flight to Kilimanjaro for International Departure',
        description:
          'Morning bush flight back to Kilimanjaro with VIP day-room access before your long-haul flight.',
      },
    ],
    inclusions: [
      '8 nights in award-winning Singita / Sanctuary luxury safari lodges',
      'All private chartered domestic flights between reserves',
      'Sunrise hot-air balloon safari with champagne bush breakfast',
      'Private 4x4 vehicle with veteran naturalist and wildlife photographer',
      'All Tanzania National Park & Crater conservation royalties',
      'Full board gourmet dining, premium spirits, and open bar',
    ],
  },
  {
    id: 'bali-island-sanctuary',
    title: 'Bali Sanctuary: Ubud Rainforest & Uluwatu Clifftops',
    destination: 'Ubud & Uluwatu',
    country: 'Indonesia',
    region: 'Asia',
    type: 'Luxury & Wellness',
    duration: '8 Days / 7 Nights',
    groupSize: 'Private (2-4 Guests)',
    price: 3600,
    originalPrice: 4200,
    rating: 4.94,
    reviewCount: 142,
    badge: 'Holistic Retreat',
    featured: false,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop',
    overview:
      'The definitive mind and body retreat. Stay in riverside bamboo and teak villas surrounded by emerald rice fields in Ubud, followed by dramatic clifftop infinity ocean villas in Uluwatu with private butler service.',
    itinerary: [
      {
        day: 1,
        title: 'Denpasar Arrival to Ubud Jungle Haven',
        description:
          'VIP airport fast-track. Scenic drive to your private infinity pool villa suspended above the sacred Ayung River.',
      },
      {
        day: 2,
        title: 'Tirta Empul Water Purification & Herbal Mastery',
        description:
          'Private morning blessing at holy water temples, followed by a guided botanical walk through medicinal spice gardens.',
      },
      {
        day: 3,
        title: 'Sound Healing Bath in Pyramids of Chi',
        description:
          'Immersive acoustic resonance meditation session, followed by private vegan 5-course garden feast.',
      },
      {
        day: 4,
        title: 'Helicopter Transfer to Uluwatu Clifftops',
        description:
          'Aerial transfer along Bali’s coast to your cliff-edge villa perched 150 meters above the roaring Indian Ocean.',
      },
      {
        day: 5,
        title: 'Private Catamaran Sail to Nusa Penida Coves',
        description:
          'Snorkel with gentle manta rays in crystal waters, anchor at secluded bays, and enjoy freshly caught seafood grilled on board.',
      },
      {
        day: 6,
        title: 'Balinese Royal Massage & Sunset Clifftop Fire Dance',
        description:
          '3-hour holistic Balinese body therapy, followed by reserved VIP seats at the mesmerizing Kecak performance at Uluwatu Temple.',
      },
      {
        day: 7,
        title: 'Private Beach Club Day & Candlelit Cave Dinner',
        description:
          'Exclusive access to private beach cove via cliff inclinator, ending with an unforgettable candlelit dining experience inside a natural sea cave.',
      },
      {
        day: 8,
        title: 'Morning Yoga & Chauffeured Departure',
        description:
          'Sunrise rooftop yoga session overlooking ocean swells before your private transfer to Ngurah Rai Airport.',
      },
    ],
    inclusions: [
      '7 nights in Private Pool Luxury Villas (Ubud Jungle + Uluwatu Cliff)',
      'Daily 90-minute customized Ayurvedic and Balinese spa therapies',
      'Private catamaran cruise to Nusa Penida with marine biologist guide',
      'Helicopter scenic transfer between Ubud and Uluwatu',
      'Dedicated personal villa butler throughout your stay',
    ],
  },
  {
    id: 'iceland-aurora-expedition',
    title: 'Icelandic Wonders: Northern Lights & Glacial Lagoons',
    destination: 'Reykjavik, South Coast & Vatnajökull',
    country: 'Iceland',
    region: 'Nordic',
    type: 'Alpine & Adventure',
    duration: '7 Days / 6 Nights',
    groupSize: 'Private (2-8 Guests)',
    price: 5200,
    originalPrice: 5900,
    rating: 4.97,
    reviewCount: 68,
    badge: 'Arctic Wonder',
    featured: false,
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1600&auto=format&fit=crop',
    overview:
      'Chase celestial dancing auroras from secluded glass-roofed eco-villas and geothermal hot springs. Explore turquoise ice caves, drive customized arctic super-jeeps across glaciers, and unwind at the exclusive Retreat at Blue Lagoon.',
    itinerary: [
      {
        day: 1,
        title: 'Keflavik Arrival & Retreat at Blue Lagoon VIP Suite',
        description:
          'Direct transfer into the private Retreat Spa. Soak in private mineral lagoons and enjoy bespoke in-water massage treatments.',
      },
      {
        day: 2,
        title: 'Golden Circle via Custom Arctic Super-Jeep',
        description:
          'Witness Thingvellir tectonic rift, erupting Strokkur geyser, and roaring Gullfoss waterfall from private off-road viewpoints.',
      },
      {
        day: 3,
        title: 'South Coast Waterfalls & Black Sand Basalt Columns',
        description:
          'Walk behind Seljalandsfoss cascades and stroll the otherworldly volcanic sands of Reynisfjara with an expert geologist.',
      },
      {
        day: 4,
        title: 'Sapphire Crystal Ice Cave & Glacial Lagoon Cruise',
        description:
          'Equip crampons to enter deep blue caverns sculpted within Vatnajökull glacier, followed by private zodiac sail amongst floating icebergs.',
      },
      {
        day: 5,
        title: 'Snowmobiling on Eyjafjallajökull Ice Cap',
        description:
          'High-altitude adrenaline ride across boundless white snowfields with panoramic views of the Atlantic Ocean below.',
      },
      {
        day: 6,
        title: 'Astrophotographer Aurora Hunt & Midnight Thermal Bath',
        description:
          'Follow real-time satellite solar data to secluded dark-sky locations with a professional photographer for guaranteed shots.',
      },
      {
        day: 7,
        title: 'Reykjavik Cultural Stroll & Airport Departure',
        description:
          'Sample modern Nordic cuisine in downtown Reykjavik before your VIP transfer to Keflavik airport.',
      },
    ],
    inclusions: [
      '6 nights in 5-Star Scandinavian design hotels & Glass Aurora Villas',
      'Exclusive private VIP Retreat at Blue Lagoon passes',
      'Private 4x4 Arctic Super-Jeep and dedicated expedition guide',
      'Specialized arctic gear, glacier equipment, and snowmobiles',
      'Nightly professional Aurora Borealis hunting excursions',
    ],
  },
];
