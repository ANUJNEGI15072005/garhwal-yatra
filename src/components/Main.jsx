import React, { forwardRef } from 'react';
import Map from './map';
import Districts from './districts';
import CharDhama from './CharDhama';
import About from './About';

const Main = forwardRef(({ charDhamRef, districtRef, mapRef, aboutRef }, ref) => {
  return (
    <main className="flex-1">
      <Map ref={mapRef} />
      <Districts ref={districtRef} />
      <CharDhama ref={charDhamRef} />
      <About ref={aboutRef} />
    </main>
  );
});

export default Main;
