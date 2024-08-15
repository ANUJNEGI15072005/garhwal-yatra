import React, { useState } from 'react';

function Sidebar({ charDhamRef, districtRef, mapRef, aboutRef }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToElement = (ref) => {
    if (ref && ref.current) {
      let headerOffset;
  
      const screenWidth = window.innerWidth;
  
      if (screenWidth < 640) { 
        headerOffset = 67; 
      } else if (screenWidth < 1280) { 
        headerOffset = 83; 
      } else if (screenWidth<1536) { 
        headerOffset = 98; 
      } else if (screenWidth<1920){
        headerOffset = 114
      }
      else{
        headerOffset = 130
      }
  
      const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };
  
  

  return (
    <>
      <button
        className="text-green-600 pl-2 h-5 bg-slate-50 top-20 left-0 z-50 lg:hidden fixed sm:top-20 mobile:top-[64px]"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div
        className={`fixed top-20 left-0 min-h-screen h-full w-52 font-montserrat bg-slate-50 text-green-600 shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 3xl:top-32 3xl:w-80 2xl:top-28 2xl:w-60 xl:top-24 sm:top-20 mobile:top-[64px] lg:overflow-y-auto`}
      >
        <div className="p-4">
          <ul className="mt-4">
            <li className="mt-2">
              <div
                onClick={() => scrollToElement(mapRef)}
                className="p-1 hover:text-green-900 hover:bg-slate-200 hover:cursor-pointer 3xl:text-[28px] 2xl:text-[20px] xl:text-[17px]"
              >
                GARHWAL REGION
              </div>
            </li>
            <li className="mt-2">
              <div
                onClick={() => scrollToElement(districtRef)}
                className="p-1 hover:text-green-900 hover:bg-slate-200  hover:cursor-pointer 3xl:text-[28px] 2xl:text-[20px] xl:text-[17px]"
              >
                DISTRICTS
              </div>
            </li>
            <li className="mt-2">
              <div
                onClick={() => scrollToElement(charDhamRef)}
                className="p-1 hover:text-green-900 hover:bg-slate-200 hover:cursor-pointer 3xl:text-[28px] 2xl:text-[20px] xl:text-[17px]"
              >
                CHAR DHAM
              </div>
            </li>
            <li className="mt-2">
              <div
                onClick={() => scrollToElement(aboutRef)}
                className="p-1 hover:text-green-900 hover:bg-slate-200 hover:cursor-pointer 3xl:text-[28px] 2xl:text-[20px] xl:text-[17px]"
              >
                ABOUT
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
