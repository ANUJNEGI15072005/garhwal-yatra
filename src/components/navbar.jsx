import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='fixed w-full top-0 flex font-montserrat px-5 items-center text-4xl bg-slate-50 text-green-900 h-20 border-b-2 border-slate-`00 
    3xl:h-32 3xl:text-7xl 2xl:h-28 2xl:text-6xl xl:text-5xl xl:h-24 lg:justify-start sm:h-20 sm:text-4xl
    md:justify-center sm::justify-center mobile:justify-center mobile:h-16 mobile:text-[31px]'>
      <Link to={'/'}>GARHWAL YATRA</Link>
    </header>
  );
};

export default Navbar;

