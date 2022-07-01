import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonItem, IonList, IonPage, IonText, IonToolbar } from "@ionic/react"
import PreviousPassengerItem from "../../components/PreviousPassengerItem"

import './IndividualTripMenu.css'

const IndividualPreviousTripMenu: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="start" >
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <p>Detalles de Viaje</p>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY fullscreen>
        <IonList>
          <IonItem >
            <div className="leftItemSection">
              <p className="date">Inicio: 23/06/22 | 07:30 AM</p>
              <p className="date">Fin: 23/06/22 | 08:30 AM</p>
              <p className="address">Dest: Calle Armendáriz 3465 - Comas</p>
            </div>
            <div className="rightItemSection">
              <IonText color={"black"}><p className="state">Finalizado</p></IonText>
              <IonText color={"primary"}><p className="type">Ida</p></IonText>
            </div>
          </IonItem>

          <IonItem >
            <div className="passengersListContainer" >

              <p className="passengersNumber">Pasajeros (8)</p>

              <IonList>
                <PreviousPassengerItem address="Av. Aviación 124 - San Borja" name="Fernanda Rosales" cellphone="954 541 241" order={1} state="En espera" />
                {/* maqueta */}

              </IonList>
            </div>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default IndividualPreviousTripMenu