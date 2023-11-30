import {Marker} from '@react-google-maps/api'
import { useState, useEffect } from 'react';

import BallImage from '../images/Ball.png'

const Ball = () => {

  const [location, setLocation] = useState({lat: 0, lng: 0});

  
  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        setLocation({lat: pos.coords.latitude, lng: pos.coords.longitude})
      })
    }
  }, [])
  return (<Marker position={location} icon={{url: BallImage, scaledSize: new window.google.maps.Size(100, 100)}} /> );
}
 
export default Ball;