import { IonButtons, IonContent, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonMenu, IonMenuButton, IonPage, IonText, IonToolbar } from "@ionic/react"
import { person } from 'ionicons/icons'


const PreviousTrips: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"tertiary"} >
          <p>Viajes Previos</p>
          <IonButtons slot="start">
            <IonMenuButton type="button" autoHide={false} menu="leftdrawer" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItemSliding>
            <IonItemOptions side="end">
              <IonItemOption routerLink="/trip" color={"success"}>Ver</IonItemOption>
            </IonItemOptions>
            <IonItem className="item">

              <div className="left">
                <p className="date">23/06/22 | 07:30 AM - 8:30 AM</p>
                <p className="car">Suzuki APV 2020 | DF7-540</p>
                <p className="address">Calle Armendáriz 3465 - Comas</p>
              </div>
              <div className="right">
                <div className="passengers"><IonIcon className="icon" icon={person} /> <p>8</p></div>
                <IonText color={"black"}><p className="state">Estado</p></IonText>
                <IonText color={"primary"}><p className="type">Tipo de viaje</p></IonText>
              </div>
            </IonItem>
          </IonItemSliding>
        </IonList>

        <IonInfiniteScroll>
          <IonInfiniteScrollContent loadingSpinner={"crescent"} />
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  )

}

export default PreviousTrips