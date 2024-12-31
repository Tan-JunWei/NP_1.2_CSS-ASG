'use client';

import { useRef, useEffect } from 'react';

const GoogleMap = () => {
  const mapRef = useRef(null); // Reference to the map container

  useEffect(() => {
    if (!mapRef.current) return; // Early return if map ref is not available

    const loadMap = () => {
      // Initialize Google Map
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 1.3521, lng: 103.8198 }, // Singapore coordinates
        zoom: 12,
      });

      // Add a marker (optional)
      new google.maps.Marker({
        position: { lat: 1.3521, lng: 103.8198 },
        map,
        title: 'Singapore',
      });
    };

    const initializeGoogleMaps = () => {
      window.initMap = loadMap;

      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBWoUrTUh0AjQSwmhnmU0fWq6WbzdWZYGg&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      } else {
        loadMap();
      }
    };

    initializeGoogleMaps();
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '500px', border: '1px solid #ccc' }}
    ></div>
  );
};

export default GoogleMap;
