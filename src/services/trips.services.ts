import { useState } from "react";

export function TripsServices() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState<boolean | null>(null)
  const [error, setError] = useState<boolean | null>(null)


  const API_URL = ""

  // GET: trips
  const handleGetTrips = async () => {
    setIsLoading(true)
    try {
      const req = await fetch(`${API_URL}/trips`)
      const res = await req.json()
      if (res.success) {
        setData(res)
        setIsLoading(false)
      }
    } catch (error) {
      setError(true)
      setIsLoading(false)
    }
  }

  // GET: trip
  const handleGetTrip = async (tripId: string) => {
    setIsLoading(true)
    try {
      const req = await fetch(`${API_URL}/trips/${tripId}`)
      const res = await req.json()
      if (res.success) {
        setData(res)
        setIsLoading(false)
      }
    } catch (error) {
      setError(true)
      setIsLoading(false)
    }
  }

  // UPDATE
  const handleUpdateTrip = async (tripId: string, tripData: object) => {
    setIsLoading(true)
    try {
      const req = await fetch(`${API_URL}/trips/${tripId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tripData)
      })
      const res = await req.json()
      setData(res)
      setIsLoading(false)
    } catch (error) {
      setError(true)
      setIsLoading(false)
    }
  }

  return {
    handleGetTrips, handleUpdateTrip, data, isLoading, success, error
  }
}
