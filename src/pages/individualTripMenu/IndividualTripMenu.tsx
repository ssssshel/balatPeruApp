import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonPage, IonText, IonToolbar } from "@ionic/react"
import { person } from 'ionicons/icons'

import './IndividualTripMenu.css'

const IndividualTripMenu: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"tertiary"}>
          <IonButtons slot="start" >
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <p>Detalles de Viaje</p>
        </IonToolbar>
        <IonContent scrollY fullscreen>
          <div className="mapContainer">

          </div>
          <IonList>
            <IonItem >
              <div className="leftItemSection">
                <p className="date">Inicio: 23/06/22 | 07:30 AM</p>
                <p className="date">Fin: 23/06/22 | 08:30 AM</p>
                <p className="address">Dest: Calle Armendáriz 3465 - Comas</p>
              </div>
              <div className="rightItemSection">
                <IonText color={"black"}><p className="state">Estado</p></IonText>
                <IonText color={"primary"}><p className="type">Tipo de viaje</p></IonText>
              </div>
            </IonItem>

            <IonItem >
              <div className="passengersListContainer" >

                <p className="passengersNumber">Pasajeros (8)</p>

                <IonList>
                  <IonItemSliding>
                    <IonItemOptions>
                      <IonItemOption color={"success"}>Iniciar</IonItemOption>
                      <IonItemOption color={"light"}>Llamar</IonItemOption>
                      <IonItemOption color={"tertiary"}>Estado</IonItemOption>
                    </IonItemOptions>
                    <IonItem>
                      <div className="leftItemSection">
                        <p className="passengerAddress">Av. José Pardo 4512 - Independencia</p>
                        <p className="passengerName">Fernando Torres Villa</p>
                        <p className="passengerNumber">982 451 214</p>
                      </div>
                      <div className="rightItemSection">
                        <p className="passengerOrder">Orden: 7</p>
                        <IonText color={"black"}><p className="passengerState">Estado</p></IonText>
                      </div>
                    </IonItem>
                  </IonItemSliding>
                </IonList>
              </div>
            </IonItem>
          </IonList>
        </IonContent>

        <IonFooter class="footer" >
          <IonButton expand="full" color={"success"}>Iniciar Viaje</IonButton>
        </IonFooter>
      </IonHeader>
    </IonPage>
  )
}

export default IndividualTripMenu