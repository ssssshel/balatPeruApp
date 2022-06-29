import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonText } from "@ionic/react"
import { person } from "ionicons/icons"

interface TripItemProps {
  arePreviousTrips: boolean
}

const TripItem: React.FC<TripItemProps> = ({ arePreviousTrips }) => {
  return (
    <IonItemSliding>
      <IonItemOptions side="end">
        <IonItemOption routerLink={arePreviousTrips ? '/previous_trip' : '/trip'} color={"success"}>Ver</IonItemOption>
      </IonItemOptions>
      <IonItem >

        <div className="leftItemSection">
          <p className="date">23/06/22 | 07:30 AM - 8:30 AM</p>
          <p className="car">Suzuki APV 2020 | DF7-540</p>
          <p className="address">Calle Armendáriz 3465 - Comas</p>
        </div>
        <div className="rightItemSection">
          <div className="passengers"><IonIcon className="icon" icon={person} /> <p>8</p></div>
          <IonText color={"black"}><p className="state">Estado</p></IonText>
          <IonText color={"primary"}><p className="type">Tipo de viaje</p></IonText>
        </div>
      </IonItem>
    </IonItemSliding>
  )
}

export default TripItem