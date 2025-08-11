import { Link, useParams } from 'react-router-dom';
import garhwalData from "../data/garhwalData";

const District = () => {
  const { districtname } = useParams();
  const district = garhwalData.find(
    d => d.district.toLowerCase() === districtname.toLowerCase()
  );

  if (!district) {
    return <h2 className="text-center">District not found</h2>;
  }

  return (
    <section className="pb-3">
      <div className="p-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-['outfit'] tracking-wide">
          {district.heading}
        </h2>
        <p className="mt-4 text-base md:text-lg text-center text-gray-700 font-['Lato'] max-w-3xl mx-auto leading-relaxed">
          {district.description}
        </p>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {district.places.map((place, index) => (
            <Link
              to={`/${districtname}/${place.name.toLowerCase().replace(/\s+/g, '-')}`}
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full aspect-[3/2] object-cover transition duration-200 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-['outfit'] text-lg sm:text-[24px] font-semibold px-4 py-2">
                  {place.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default District;
