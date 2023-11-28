'use client';

import GoogleMapReact from 'google-map-react';

const KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

export default function Map() {
  const cordinates = { lat: 0, lng: 0 };
  if (!KEY) {
    throw new Error('Google Map API key is missing');
  }

  return (
    <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
      <GoogleMapReact
        bootstrapURLKeys={{ key: KEY }}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={}
        // onChange={}
        // onChildClick={}
      ></GoogleMapReact>
    </div>
  );
}
