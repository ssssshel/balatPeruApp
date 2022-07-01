import { IonButtons, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonMenuButton, IonPage, IonToolbar } from "@ionic/react"
import PreviousTripItem from "../../components/PreviousTripItem"
import TripItem from "../../components/TripItem"
import { previoustripMock } from "../../mocks/previousTripmock"

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
          {
            previoustripMock.map(({ tripId, carModel, date, end, destiny, licPlate, passengers, start, type }) => (
              <PreviousTripItem arePreviousTrips={true} tripId={tripId} carModel={carModel} date={date} end={end} destiny={destiny} licPlate={licPlate} passengers={passengers} start={start} type={type} />

            ))
          }
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