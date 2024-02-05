import { useEffect, useState } from "react";
import IconLocationArrow from "components/icons/LocationIcon";

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
      <div className="flex flex-col items-center justify-between">
        <p className="font-bold p-5">
          Don&apos;t know? Check which airport is closer
        </p>
        <div className="flex items-center justify-center border border-solid border-slate-800 rounded-lg p-5"
          onClick={() => { setClicked(true) }}
        >
          <IconLocationArrow />
        </div>
        {(longitude == 0 || latitude == 0) && (isClicked) &&
          <>
            <div role="status">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </>

        }
        {kmToDulles >= 0 && kmToReagan >= 0 && (isClicked) &&
          <>
            <div className="p-5">
              {kmToDulles < kmToReagan &&
                <div>{"Dulles airport (IAD) is the closest to you"}{kmToMiles(kmToDulles)}</div>
              }
              {kmToDulles >= kmToReagan &&
                <div>{"Reagan airport (DCA) is the closest to you"}{kmToMiles(kmToReagan)}</div>
              }
            </div>
          </>
        }
      </div>
    </>
  )
}

const kmToMiles = (km: number) => {
  const conversionFactor = 0.621371;
  const miles = km * conversionFactor;
  return miles.toFixed(2);
}