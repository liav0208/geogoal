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
        setGoalLocation({lat: +data.data.point.latitude, lng: +data.data.point.longitude});

      } catch(err) {
        console.log(err);
      }
    };

    getLocation();
  }, [lat, lng])
  
  return (<Marker position={goalLocation} icon={{url: GoalImage, scaledSize: new window.google.maps.Size(50, 50)}} /> );
}
 
export default Goal;