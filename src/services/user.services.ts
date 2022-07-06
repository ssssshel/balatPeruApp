import { useState } from "react"

export function UserServices() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState<boolean | null>(null)
  const [error, setError] = useState<boolean | null>(null)

  const SignUp = async (user: object) => {
    setIsLoading(true)
  }

  const Login = async (user: object) => {
    setIsLoading(true)

  }

  const Logout = async () => {
    setIsLoading(true)

  }


}