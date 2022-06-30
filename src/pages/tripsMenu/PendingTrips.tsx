import { IonButtons, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonMenuButton, IonPage, IonToolbar } from "@ionic/react"
import TripItem from "../../components/TripItem"

import './TripsMenu.css'

const PendingTrips: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"} >
          <p>Viajes Pendientes</p>
          <IonButtons slot="start">
            <IonMenuButton type="button" autoHide={false} menu="leftdrawer" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <TripItem arePreviousTrips={false} tripId="4fasf4" />
          {/* maqueta */}
          <TripItem arePreviousTrips={false} tripId="4fasgb" />
          <TripItem arePreviousTrips={false} tripId="4fasa4" />
          <TripItem arePreviousTrips={false} tripId="4fasff" />
          <TripItem arePreviousTrips={false} tripId="4fasad" />

        </IonList>

        <IonInfiniteScroll>
          <IonInfiniteScrollContent loadingSpinner={"crescent"}>

          </IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  )
}

export default PendingTrips