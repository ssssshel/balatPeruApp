import { IonButtons, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonMenuButton, IonPage, IonToolbar } from "@ionic/react"
import TripItem from "../../components/TripItem"

import { tripMock } from "../../mocks/tripmock"
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
          {
            tripMock.map(({ tripId, carModel, date, end, destiny, licPlate, passengers, start, type }) => (
              <TripItem arePreviousTrips={false} tripId={tripId} carModel={carModel} date={date} end={end} destiny={destiny} licPlate={licPlate} passengers={passengers} start={start} type={type} />

            ))
          }
          {/* maqueta */}
          {/* <TripItem arePreviousTrips={false} tripId="4fasgb" />
          <TripItem arePreviousTrips={false} tripId="4fasa4" />
          <TripItem arePreviousTrips={false} tripId="4fasff" />
          <TripItem arePreviousTrips={false} tripId="4fasad" /> */}

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