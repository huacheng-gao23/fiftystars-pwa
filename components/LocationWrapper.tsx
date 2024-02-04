import { useEffect, useState } from "react";

export default function LocationWrapper() {
  const [isClicked, setClicked] = useState(false);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [kmToReagan, setKmToReagan] = useState(-1);
  const [kmToDulles, setKmToDulles] = useState(-1);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180; // Convert degrees to radians
    const dLon = (lon2 - lon1) * Math.PI / 180; // Convert degrees to radians
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  }

  useEffect(() => {
    const latReagan = 38.852396;
    const lonReagan = -77.039888;
    const latDulles = 38.951982;
    const lonDulles = -77.458527;

    if ('geolocation' in navigator) {
      if (isClicked) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLongitude(position.coords.longitude);
          setLatitude(position.coords.latitude);
          setKmToReagan(calculateDistance(position.coords.latitude, position.coords.longitude, latReagan, lonReagan));
          setKmToDulles(calculateDistance(position.coords.latitude, position.coords.longitude, latDulles, lonDulles));
        });
      }
    }
  }, [isClicked]);

  return (
    <>
      <div onClick={() => { setClicked(true) }}>
        Location Button
      </div>
      {(longitude == 0 || latitude == 0) && (isClicked) &&
        <div>Loading...</div>
        // add loading animation
      }
      {kmToDulles >=0 && kmToReagan >= 0 && (isClicked) && 
        <>
          {kmToDulles < kmToReagan &&
            <div>{"Dulles airport (IAD) is the closest to you"}{kmToMiles(kmToDulles)}</div>
          }
          {kmToDulles >= kmToReagan &&
            <div>{"Reagan airport (DCA) is the closest to you"}{kmToMiles(kmToReagan)}</div>
          }
        </>
      }
    </>
  )
}

const kmToMiles = (km: number) => {
  const conversionFactor = 0.621371;
  const miles = km * conversionFactor;
  return miles.toFixed(2);
}