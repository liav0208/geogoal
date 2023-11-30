import {Marker} from '@react-google-maps/api'
import { useState, useEffect } from 'react';

import BallImage from '../images/Ball.png'
import axios from 'axios';

const Ball = () => {

  const [location, setLocation] = useState({lat: 0, lng: 0});
  
  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        setLocation({lat: pos.coords.latitude, lng: pos.coords.longitude})
      })

      navigator.geolocation.watchPosition(async pos => {
        const distance = await axios.get(`http://localhost:3001/api/v1/distance?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}`);
      })
    }
  }, []);



  return (<Marker position={location} icon={{url: BallImage, scaledSize: new window.google.maps.Size(80, 80)}} /> );
}
 
export default Ball;