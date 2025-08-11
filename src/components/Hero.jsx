// const images = [
//     {
//         id: 1,
//         src: '/hero1.jpg'
//     },
//     {
//         id: 2,
//         src: '/hero2.jpg'
//     },
//     {
//         id: 3,
//         src: '/hero3.jpg'
//     },
//     {
//         id: 4,
//         src: '/hero4.jpg'
//     },
//     {
//         id: 5,
//         src: '/hero5.jpg'
//     },
//     {
//         id: 6,
//         src: '/hero6.jpg'
//     },
//     {
//         id: 7,
//         src: '/hero7.jpg'
//     },
//     {
//         id: 8,
//         src: '/hero8.jpg'
//     },
// ];

const ImageSquare = ({ src, alt }) => {
    return (
        <div className="w-full aspect-[4/3] overflow-hidden relative">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    );
};

const Hero = () => {
    return (
        <section className="">
            <div className="p-5 flex justify-center">
                <div className="w-full sm:w-1/2 aspect-[16/9] overflow-hidden relative">
                    <img
                        src='/hero1.jpg'
                        alt='hero image'
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="p-5">
                <h2 className="text-3xl md:text-4xl font-bold text-center font-['outfit'] tracking-wide">
                    Explore the Divine Beauty of Garhwal
                </h2>
                <p className="mt-4 text-base md:text-lg text-center text-gray-700 font-['Lato'] max-w-3xl mx-auto leading-relaxed">
                    Nestled in the majestic Himalayas, Garhwal is a land of timeless spirituality and breathtaking landscapes. From the sacred temples of Char Dham to the serene rivers and verdant valleys, every corner whispers ancient legends and natural splendor. Whether you're seeking divine peace or adventurous trails, Garhwal offers an unforgettable journey into nature and soul.
                </p>
            </div>
            {/* <div className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {images.map((image) => (
                        <ImageSquare key={image.id} src={image.src} alt={image.alt} />
                    ))}
                </div>
            </div> */}
        </section>

    );
};

export default Hero;
