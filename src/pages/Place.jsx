import { useParams } from 'react-router-dom';
import garhwalData from "../data/garhwalData";

const Place = () => {
  const {placename}=useParams();

  const allPlaces = garhwalData.flatMap(district =>
    district.places.map(place => ({
      ...place,
      district: district.district,
      districtHeading: district.heading,
      districtDescription: district.description,
    }))
  );

  const placeData = allPlaces.find(
    place => place.id.toLowerCase() === placename.toLowerCase()
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
                        className="w-full h-full object-cover"
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

export default Place
