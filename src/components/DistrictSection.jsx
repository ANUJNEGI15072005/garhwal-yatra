import { Link } from 'react-router-dom';

const images = [
    {
        id: 1,
        district: 'Dehradun',
        src: 'https://www.shutterstock.com/image-photo/dehradun-uttarakhand-india-112020-public-600nw-1784416997.jpg'
    },
    {
        id: 2,
        district: 'Haridwar',
        src: '/district2.jpg'
    },
    {
        id: 3,
        district: 'Pauri',
        src: 'https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/cover-for-Places-To-Visit-In-Pauri_30th-nov.jpg'
    },
    {
        id: 4,
        district: 'Tehri',
        src: 'https://img.jagranjosh.com/images/2022/June/1562022/tehri-compressed.jpg'
    },
    {
        id: 5,
        district: 'Rudraprayag',
        src: 'https://www.chardhampackage.com/img/chardham-destination/rudraprayag1.jpg'
    },
    {
        id: 6,
        district: 'Chamoli',
        src: 'https://www.chardham-pilgrimage-tour.com/assets/images/badrinath-banner3.webp'
    },
    {
        id: 7,
        district: 'Uttarkashi',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Where_the_clouds_reign.jpg/1280px-Where_the_clouds_reign.jpg'
    },
];

const ImageSquare = ({ src, alt, district }) => {
    return (
        <Link to={`/${district.toLowerCase()}`} className="relative group overflow-hidden rounded-lg shadow-md">
            <img
                src={src}
                alt={alt}
                className="w-full h-full aspect-[3/2] object-cover transition duration-200 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-['outfit'] text-lg sm:text-[24px] font-semibold px-4 py-2 ">
                    {district}
                </span>
            </div>
        </Link>
    );
};

const DistrictSection = () => {
    return (
        <section className="">
            <div className='p-5'>
                <h2 className="text-3xl md:text-4xl font-bold text-center font-['outfit'] tracking-wide">
                    Discover the Vibrant Districts of Garhwal
                </h2>
                <p className="mt-4 text-base md:text-lg text-center text-gray-700 font-['Lato'] max-w-3xl mx-auto leading-relaxed">
                    Garhwal is divided into several unique districts, each offering a distinct blend of culture, nature, and tradition. From the spiritual aura of Rudraprayag and the scenic beauty of Chamoli to the historical richness of Pauri and the bustling energy of Dehradun, every district tells a different story. Exploring these regions offers a deeper understanding of Garhwal's diversity and enduring heritage.
                </p>
            </div>
            <div className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images
                        .filter((image) => image.district)
                        .map((image) => (
                            <ImageSquare
                                key={image.id}
                                src={image.src}
                                alt={image.alt || image.district}
                                district={image.district}
                            />
                        ))}

                </div>
            </div>
        </section>
    )
}

export default DistrictSection
