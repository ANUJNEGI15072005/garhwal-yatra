import { useParams } from 'react-router-dom';

const ChardhamPlaces = [
  {
    id: "yamunotri",
    name: "Yamunotri Temple",
    title: "Yamunotri Temple – Source of the Yamuna",
    description: "Yamunotri Temple is one of the four sacred Char Dham sites and the source of the Yamuna River. Surrounded by majestic peaks and glaciers, it is dedicated to Goddess Yamuna. Pilgrims trek through rugged terrains and hot springs like Surya Kund before reaching the temple.",
    image: "https://uttarakhandtrips.com/blogs/wp-content/uploads/2024/01/Untitled-design-53.jpg",
    Location: "Yamunotri, Uttarkashi district, Uttarakhand, India",
    Elevation: "~10,804 feet (3,293 meters) above sea level",
    NearestRailwayStation: "Rishikesh Railway Station (~210 km to Janki Chatti)",
    NearestAirport: "Jolly Grant Airport, Dehradun (~196 km to Janki Chatti)",
    BestTimetoVisit: "May to June and September to October",
    OpeningHours: "6:00 AM – 8:00 PM",
    EntryFee: "Free entry"
  },
  {
    id: "gangotri",
    name: "Gangotri Temple",
    title: "Gangotri Temple – Origin of the Ganges",
    description: "Gangotri Temple is a revered Hindu shrine dedicated to Goddess Ganga, marking the origin of the sacred River Ganges. Located in the Garhwal Himalayas, it is part of the Char Dham pilgrimage and offers stunning views of snow-clad peaks and the Bhagirathi River.",
    image: "https://www.pilgrimagetour.in/blog/wp-content/uploads/2023/09/Best-Time-to-Visit-Gangotri.jpg",
    Location: "Gangotri, Uttarkashi district, Uttarakhand, India",
    Elevation: "~10,200 feet (3,100 meters) above sea level",
    NearestRailwayStation: "Rishikesh Railway Station (~270 km)",
    NearestAirport: "Jolly Grant Airport, Dehradun (~250 km)",
    BestTimetoVisit: "May to June and September to October",
    OpeningHours: "6:15 AM – 2:00 PM, 3:00 PM – 9:30 PM",
    EntryFee: "Free entry"
  },
  {
    id: "kedarnath",
    name: "Kedarnath",
    title: "Kedarnath Temple – Jyotirlinga in the Himalayas",
    description: "Kedarnath Temple is one of the twelve Jyotirlingas of Lord Shiva and a key Char Dham pilgrimage site. Located near the Mandakini River and surrounded by snow-clad peaks, the temple is accessible via a challenging 16 km trek from Gaurikund.",
    image: "https://mohitbangari.com/wp-content/uploads/2024/07/Kedarnath-Mandir.jpg",
    Location: "Kedarnath, Rudraprayag district, Uttarakhand, India",
    Elevation: "~11,755 feet (3,583 meters) above sea level",
    NearestRailwayStation: "Rishikesh Railway Station (~229 km to Gaurikund)",
    NearestAirport: "Jolly Grant Airport, Dehradun (~238 km to Gaurikund)",
    BestTimetoVisit: "May to June and September to October",
    OpeningHours: "4:00 AM – 9:00 PM",
    EntryFee: "Free entry"
  },
  {
    id: "badrinath",
    name: "Badrinath",
    title: "Badrinath Temple – Abode of Lord Vishnu",
    description: "Badrinath Temple, dedicated to Lord Vishnu, is one of the most important pilgrimage sites in India and a key part of the Char Dham Yatra. Situated between the Nar and Narayan mountain ranges, the temple stands near the banks of the Alaknanda River.",
    image: "https://www.datocms-assets.com/46272/1633190157-1633190156217.jpg?auto=format&fit=max&w=1200",
    Location: "Badrinath, Chamoli district, Uttarakhand, India",
    Elevation: "~10,827 feet (3,300 meters) above sea level",
    NearestRailwayStation: "Rishikesh Railway Station (~294 km)",
    NearestAirport: "Jolly Grant Airport, Dehradun (~311 km)",
    BestTimetoVisit: "May to June and September to October",
    OpeningHours: "4:30 AM – 9:00 PM",
    EntryFee: "Free entry"
  }
];

const Chardham = () => {
  const { dhamName } = useParams();

  const placeData = ChardhamPlaces.find(
    (place) => place.id.toLowerCase() === dhamName.toLowerCase()
  );

  if (!placeData) {
    return <h2 className="text-center">Place not found</h2>;
  }
  return (
    <section className="pb-3">
      <div className="p-5 flex justify-center">
        <div className="w-full sm:w-1/2 aspect-[16/9] overflow-hidden relative">
          <img
            src={placeData.image}
            alt='hero image'
            className="w-full h-full aspect-[3/2] object-cover"
          />
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-['outfit'] tracking-wide">
          {placeData.title}
        </h2>
        <p className="mt-4 text-base md:text-lg text-center text-gray-700 font-['Lato'] max-w-3xl mx-auto leading-relaxed">
          {placeData.description}
        </p>
      </div>
      <div className="p-5 text-base md:text-lg text-center text-gray-700 font-['Lato'] max-w-3xl mx-auto leading-relaxed">
        <div className='mt-2'>
          <p><span className='text-black font-bold mr-2'>LOCATION:</span>{placeData.Location}</p>
        </div>
        <div>
          <p><span className='text-black font-bold mr-2'>ELEVATION:</span>{placeData.Elevation}</p>
        </div>
        <div>
          <p><span className='text-black font-bold mr-2'>NEAREST RAILWAY:</span>{placeData.NearestRailwayStation}</p>
        </div>
        <div>
          <p><span className='text-black font-bold mr-2'>NEAREST AIRPORT:</span>{placeData.NearestAirport}</p>
        </div>
        <div>
          <p><span className='text-black font-bold mr-2'>BEST TIME TO VISIT:</span>{placeData.BestTimetoVisit}</p>
        </div>
        <div>
          <p><span className='text-black font-bold mr-2'>OPENING HOURS:</span>{placeData.OpeningHours}</p>
        </div>
        <div>
          <p><span className='text-black font-bold mr-2'>ENTRY FEE:</span>{placeData.EntryFee}</p>
        </div>
      </div>
    </section>
  )
}

export default Chardham
