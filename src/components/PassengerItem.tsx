import { IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonText } from "@ionic/react";
import { useRef } from "react";

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

  return (
    <IonItemSliding className="slider" ref={slideRef} onClick={() => handleOpenSlide()} >
      <IonItemOptions>
        <IonItemOption color={"success"}>Iniciar</IonItemOption>
        <IonItemOption color={"light"}>Llamar</IonItemOption>
        <IonItemOption color={"primary"}>Estado</IonItemOption>
      </IonItemOptions>
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