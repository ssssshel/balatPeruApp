import { useEffect, useRef, useState } from 'react'
import { GoogleMap } from '@capacitor/google-maps'
import { Geolocation } from '@capacitor/geolocation'


export function useGoogleMaps() {

  const [myLocation, setMyLocation] = useState<CurrentLocationCoordinates>()
  const [isLoading, setIsLoading] = useState(false);
  const [errorMap, setErrorMap] = useState<boolean | null>(null);

  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  async function createMap() {
    if (!mapRef.current) return;

    newMap = await GoogleMap.create({
      id: 'map',
      element: mapRef.current,
      apiKey: "AIzaSyCqgfoQIQg7IXBq-xAa4o0tpQbDAVuMrsA",
      config: {
        center: {
          lat: 33.6,
          lng: -117.9
        },
        zoom: 8
      }
    });

    getCurrentLocation()
  }

  const getCurrentLocation = async () => {

    setIsLoading(true)
    const coordinates = await Geolocation.getCurrentPosition({ enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }).then(async position => {
      // const { latitude, longitude } = position.coords;
      // if (myLocation?.lat !== position.coords.latitude || myLocation?.lng !== position.coords.longitude) {
      //   newMap.removeMarker()
      // }
      await newMap.addMarker({
        coordinate: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        title: 'Mi Ubicación',
      }).then(() =>
        newMap.setCamera({
          coordinate: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          zoom: 18
        })
      )
      setMyLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
      setIsLoading(false)
    }).catch(error => { setErrorMap(true); setIsLoading(false) })

    return coordinates

  }

  return {
    createMap, mapRef, getCurrentLocation, isLoading, errorMap
  }
}

export function getCurrentLocationController() {

}

export interface CurrentLocationCoordinates {
  lat: number,
  lng: number
}