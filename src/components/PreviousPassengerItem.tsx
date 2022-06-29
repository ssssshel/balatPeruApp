import { IonItem, IonText } from "@ionic/react";

interface PreviousPassengerItemProps {
  address: string
  name: string
  cellphone: string
  order: number
  state: string
}

const PreviousPassengerItem: React.FC<PreviousPassengerItemProps> = ({ address, name, cellphone, order, state }) => {
  return (
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
  )
}

export default PreviousPassengerItem;