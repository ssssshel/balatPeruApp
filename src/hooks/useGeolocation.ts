import { Geolocation } from '@capacitor/geolocation'

export function useGeoLocation() {

  const getCurrentLocation = async () => {
    const coordinates = await Geolocation.getCurrentPosition({ enableHighAccuracy: true })
    const { coords } = coordinates
    return coords
  }
  return { getCurrentLocation }
}