import { useRef } from 'react'
import { GoogleMap } from '@capacitor/google-maps'


export function useGoogleMaps() {
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
    })
  }

  return {
    createMap, mapRef
  }
}