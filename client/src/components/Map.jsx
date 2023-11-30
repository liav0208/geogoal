import React, { useCallback, useEffect, useState } from "react";
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'

import Ball from "./Ball";
import Goal from "./Goal";

const containerStyle = {
  width: '600px',
  height: '600px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, 30%)'
};

const Map = () => {
  const [map, setMap] = useState(null);
  const [location, setLocation] = useState(false);
  
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
  })


const onLoad = useCallback((map) => {
  const bounds = new window.google.maps.LatLngBounds();
  bounds.extend(location);
  map.fitBounds(bounds);

  setMap(map);
}, [location]);

  const onUnmount = useCallback(map => {
    setMap(null)
  }, [])

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        setLocation({lat: pos.coords.latitude, lng: pos.coords.longitude})
      })
    }
  }, [])

  
  return (isLoaded && location) ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Ball />
      <Goal lat={location.lat} lng={location.lng}/>
    </GoogleMap>
) : <></>
}
 
export default Map;