import { useState } from "react";


export function EventsService() {

  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState<boolean | null>(null)
  const [error, setError] = useState<boolean | null>(null)


  const API_URL = ""

  const handleEventUpload = async (event: EventRequest) => {
    setIsLoading(true)

    try {
      const req = await fetch(`${API_URL}/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      })
      const res: EventResponse = await req.json()

      if (res.success) {
        setSuccess(true)
        setIsLoading(false)
      }

    } catch (error) {
      setError(true)
      setIsLoading(false)
    }
  }

  return {
    handleEventUpload, isLoading, success, error
  }
}

export interface EventRequest {
  type: string,
  description: string,
  images: string[],
}

export interface EventResponse {
  success: boolean,
  error: string,
}