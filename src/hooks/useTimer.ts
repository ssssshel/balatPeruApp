import { useEffect, useRef, useState } from "react";

export function useTimer() {
  const [timer, setTimer] = useState(300);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isTimeOut, setIsTimeOut] = useState(false);

  const countRef = useRef(0);


  // detecta si el timer llego a 0
  useEffect(() => {
    if (timer === 0) {
      setIsTimeOut(true);
      handlePause()
    }
  }, [timer])

  // inicia cuenta regresiva
  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    countRef.current = window.setInterval(() => {
      setTimer((timer) => timer - 1)
    }, 1000)
  }

  // detiene cuenta regresiva
  const handlePause = () => {
    clearInterval(countRef.current)
    setIsPaused(false)
  }

  // formateo del timer
  const formatTimer = (timer: number) => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = Math.floor(timer / 60)
    const getMinutes = `0${(minutes % 60)}`.slice(-2)
    return `${getMinutes} : ${getSeconds}`
  }

  return { handleStart, handlePause, timer, formatTimer, isActive, isPaused };

}

// interface TimerParams {
//   getSeconds: string
//   minutes: number
//   getMinutes: string
// }