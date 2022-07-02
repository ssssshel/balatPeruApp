import { useRef, useState } from 'react'
import { GoogleMap } from '@capacitor/google-maps'
import { Geolocation } from '@capacitor/geolocation'


export function useGoogleMaps() {

  const [myLocation, setMyLocation] = useState<CurrentLocationCoordinates>()


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

    const coordinates = await Geolocation.getCurrentPosition({ enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }).then(async position => {
      setMyLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
      await newMap.addMarker({
        coordinate: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        title: 'Mi Ubicación'
      })
    }).catch(async e => await newMap.addMarker({
      coordinate: {
        lat: 33.6,
        lng: -117.9
      }
    }))

    // await newMap.addMarker({
    //   coordinate: {
    //     lat: 33.6,
    //     lng: -117.9
    //   }
    // })

  }
  return {
    createMap, mapRef, getCurrentLocation
  }
}

export function getCurrentLocationController() {

}

export interface CurrentLocationCoordinates {
  lat: number,
  lng: number
}