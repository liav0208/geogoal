import axios from 'axios'
import { useEffect, useState } from "react";
import { Marker } from '@react-google-maps/api';

import GoalImage from '../images/Goal.png';

const Goal = ({lat, lng}) => {
  const [goalLocation, setGoalLocation] = useState({lat, lng});
  
  useEffect(() => {
    const getLocation = async () => {
      try {
        
      const {data} = await axios.get(`http://localhost:3001/api/v1/goal?lat=${lat}&lng=${lng}`);
        setGoalLocation({lat: +data.data.point.latitude, lng: +data.data.longitude});
        console.log({lat: +data.data.point.latitude, lng: +data.data.point.longitude}, lat, lng);

      } catch(err) {
        console.log(err);
      }
    };

    getLocation();
  }, [lat, lng])
  
  return (<Marker position={goalLocation} icon={{url: GoalImage, scaledSize: new window.google.maps.Size(200, 200)}} /> );
}
 
export default Goal;