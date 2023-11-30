import axios from 'axios'
import { useEffect, useState } from "react";
import { Marker } from '@react-google-maps/api';

import GoalImage from '../images/Goal.png';

const Goal = ({lat, lng}) => {
  const [goalLocation, setGoalLocation] = useState({lat, lng});
  
  useEffect(() => {
    const getLocation = async () => {
      try {
        
      const goalGeneratedLocation = await axios.get(`http://localhost:3001/api/v1/goal?lat=${0}&lng=${0}`);

      console.log(goalGeneratedLocation);
      } catch(err) {
        console.log(err);
      }
    };

    getLocation();
  }, [])
  
  return (<Marker position={goalLocation} icon={{url: GoalImage, scaledSize: new window.google.maps.Size(100, 100)}} /> );
}
 
export default Goal;