import React, { useRef } from 'react';
import Sidebar from './sidebar';
import Main from './Main';

const App = () => {
  const charDhamRef = useRef(null);
  const districtRef = useRef(null);
  const mapRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Sidebar charDhamRef={charDhamRef} districtRef={districtRef} mapRef={mapRef} aboutRef={aboutRef} />
        <Main charDhamRef={charDhamRef} districtRef={districtRef} mapRef={mapRef} aboutRef={aboutRef}/>
      </div>
    </div>
  );
};

export default App;
