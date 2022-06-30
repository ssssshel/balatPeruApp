import { Storage } from "@capacitor/storage"
import { useEffect, useState } from "react";

const TRIP_STORAGE = "current_trip"

export function useTripState() {

  const [trip, setTrip] = useState<Trip>()

  const [trigger, setTrigger] = useState(false)

  const [error, setError] = useState<Error>()

  useEffect(() => {
    let currentTrip
    const currentTripValue = async () => {
      const { value } = await Storage.get({ key: TRIP_STORAGE })
      currentTrip = await JSON.parse(value!)
      setTrip(currentTrip)
    }
    currentTripValue()
  }, [trigger])


  const startTrip = (newTripId: string) => {

    // si el viaje no tiene asignado un id (por defecto), se asigna un viaje nuevo
    if (trip?.tripId === undefined) {
      const newTrip = {
        tripId: newTripId,
        tripState: 'pickingup'
      }
      setTrigger(true)
      Storage.set({ key: TRIP_STORAGE, value: JSON.stringify(newTrip) }).then(() => console.log('trip saved')).catch(err => console.log(err))
    } else {
      // sino, se comparan los estados del viaje asignado en el state y se realiza una accion
      // dependiendo del estado
      switch (trip?.tripState) {
        case "finalized":
          setTrip({
            tripId: newTripId,
            tripState: 'pickingup'
          })
          Storage.set({ key: TRIP_STORAGE, value: JSON.stringify(trip) })

          break;
        case "suspended":
          setTrip({
            tripId: newTripId,
            tripState: 'pickingup'
          })
          Storage.set({ key: TRIP_STORAGE, value: JSON.stringify(trip) })

          break;
        case "unstarted":
          setTrip({
            tripId: newTripId,
            tripState: 'pickingup'
          })
          Storage.set({ key: TRIP_STORAGE, value: JSON.stringify(trip) })

          break;
        case "pickingup":
          setError({
            message: 'El viaje ya se encuentra en proceso',
            isError: true
          })
          break
        case "onway":
          setError({
            message: 'El viaje ya se encuentra en proceso',
            isError: true
          })
          break
        default:

          break;
      }
    }
  }

  const finalizeTrip = () => {
    setTrip({
      tripId: trip!.tripId,
      tripState: "finalized"
    })
    Storage.set({ key: TRIP_STORAGE, value: JSON.stringify(trip) })
  }

  return {
    startTrip, finalizeTrip, trip, error
  }

}

type TripStateType = 'unstarted' | 'pickingup' | 'onway' | 'finalized' | 'suspended';

export interface Trip {
  tripId: string | undefined
  tripState: TripStateType
}

export interface Error {
  message: string
  isError: boolean
}