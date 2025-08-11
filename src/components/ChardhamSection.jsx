import { Link } from 'react-router-dom';

const images = [
    {
        id: 1,
        dham: 'Yamunotri',
        src: 'https://uttarakhandtrips.com/blogs/wp-content/uploads/2024/01/Untitled-design-53.jpg'
    },
    {
        id: 2,
        dham: 'Gangotri',
        src: 'https://static.toiimg.com/photo/msid-69159957,width-96,height-65.cms'
    },
    {
        id: 3,
        dham: 'Kedarnath',
        src: 'https://mohitbangari.com/wp-content/uploads/2024/07/Kedarnath-Mandir.jpg'
    },
    {
        id: 4,
        dham: 'Badrinath',
        src: 'https://www.chardham-pilgrimage-tour.com/assets/images/badrinath-banner3.webp'
    },
];

const ImageSquare = ({ src, alt, dham }) => {
    return (
        <Link to={`/chardham/${dham.toLowerCase()}`} className="relative group overflow-hidden rounded-lg shadow-md">
            <img
                src={src}
                alt={alt}
                className="w-full h-full aspect-[3/2] object-cover transition duration-200 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-['outfit'] text-lg sm:text-[24px] font-semibold px-4 py-2 ">
                    {dham}
                </span>
            </div>
        </Link>
    );
};

const ChardhamSection = () => {
    return (
        <section className="pb-3">
            <div className='p-5'>
                <h2 className="text-3xl md:text-4xl font-bold text-center font-['outfit'] tracking-wide">
                    Explore the Sacred Char Dham of Garhwal
                </h2>
                <p className="mt-4 text-base md:text-lg text-center text-gray-700 font-['Lato'] max-w-3xl mx-auto leading-relaxed">
                    Nestled in the majestic Himalayas of Garhwal, the Char Dham — Yamunotri, Gangotri, Kedarnath, and Badrinath — form the spiritual backbone of Uttarakhand. Each of these sacred shrines holds immense religious significance and attracts millions of devotees and adventurers every year. Whether you're seeking divine blessings, natural serenity, or a journey of inner awakening, the Char Dham Yatra offers a deeply enriching experience that transcends faith and fills the soul with peace.
                </p>
            </div>
            <div className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images
                        .filter((image) => image.dham)
                        .map((image) => (
                            <ImageSquare
                                key={image.id}
                                src={image.src}
                                alt={image.alt || image.dham}
                                dham={image.dham}
                            />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default ChardhamSection
