import { IonButtons, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonMenuButton, IonPage, IonToolbar } from "@ionic/react"
import TripItem from "../../components/TripItem"

const PreviousTrips: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"} >
          <p>Viajes Previos</p>
          <IonButtons slot="start">
            <IonMenuButton type="button" autoHide={false} menu="leftdrawer" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <TripItem arePreviousTrips={true} />
          {/* maqueta */}

        </IonList>

        <IonInfiniteScroll>
          <IonInfiniteScrollContent loadingSpinner={"crescent"} />
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  )

}

export default PreviousTrips