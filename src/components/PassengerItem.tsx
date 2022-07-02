import { IonAlert, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonText } from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { useTimer } from "../hooks/useTimer";

interface PassengerProps {
  address: string
  name: string
  cellphone: string
  order: number
  state: string
}

const PassengerItem: React.FC<PassengerProps> = ({ address, name, cellphone, order, state }) => {

  const slideRef = useRef<HTMLIonItemSlidingElement>(null)

  const handleOpenSlide = () => {
    slideRef.current!.open("end")
  }

  // maqueta
  const [showStateAlert1, setShowStateAlert1] = useState(false)
  const [showStateAlert2, setShowStateAlert2] = useState(false)

  const [formattedTimer, setFormattedTimer] = useState("")

  const { formatTimer, handleStart, handlePause, isActive, isPaused, timer } = useTimer()
  console.log(formatTimer(timer))

  useEffect(() => {
    const newTimer = formatTimer(timer)
    setFormattedTimer(newTimer)
  }, [timer])


  return (
    <IonItemSliding className="slider" ref={slideRef} onClick={() => handleOpenSlide()} >
      <IonItemOptions>
        <IonItemOption color={"success"}>Iniciar</IonItemOption>
        <IonItemOption color={"light"}>Llamar</IonItemOption>
        <IonItemOption onClick={() => setShowStateAlert1(true)} color={"primary"}>Estado</IonItemOption>
      </IonItemOptions>
      {/* alert1 (activa el alert2) */}
      <IonAlert isOpen={showStateAlert1} onDidDismiss={() => setShowStateAlert1(false)} header={"Estado"} buttons={[{ text: "En punto de recojo", handler: () => { handleStart(); setShowStateAlert2(true) } }]} />
      {/* alert2 (aqui se deberia mostrar el estado del timer) */}
      <IonAlert isOpen={showStateAlert2} header={"Estado"} message={formatTimer(timer)} />
      <IonItem>
        <div className="leftItemSection">
          <p className="passengerAddress">{address}</p>
          <p className="passengerName">{name}</p>
          <p className="passengerNumber">{cellphone}</p>
        </div>
        <div className="rightItemSection">
          <p className="passengerOrder">Orden: {order}</p>
          <IonText color={"black"}><p className="passengerState">{state}</p></IonText>
        </div>
      </IonItem>
    </IonItemSliding>
  )
}

export default PassengerItem;