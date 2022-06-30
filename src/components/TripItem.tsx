import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonText } from "@ionic/react"
import { person } from "ionicons/icons"
import { useEffect, useRef, useState } from "react"
import { useTripState } from "../hooks/useTripState"

interface TripItemProps {
  arePreviousTrips: boolean

  // maqueta
  tripId: string
  type: string
  date: string
  start: string
  end: string
  carModel: string
  licPlate: string
  destiny: string
  passengers: Array<object>
}

const TripItem: React.FC<TripItemProps> = ({ arePreviousTrips, tripId, type, date, start, end, carModel, licPlate, destiny, passengers }) => {

  const slideRef = useRef<HTMLIonItemSlidingElement>(null)

  const { startTrip, finalizeTrip, trip, error } = useTripState()

  const [stateOfTrip, setStateOfTrip] = useState("")

  useEffect(() => {
    switch (trip?.tripState) {
      case "unstarted":
        setStateOfTrip("Sin iniciar")
        break
      case "pickingup":
        setStateOfTrip("Recogiendo pasajeros")
        break
      case "onway":
        setStateOfTrip("En camino")
        break
      case "finalized":
        setStateOfTrip("Finalizado")
        break
      case "suspended":
        setStateOfTrip("Suspendido")
        break
      default:
        setStateOfTrip("Sin iniciar")
        break;
    }
  }, [trip?.tripState, trip?.tripId])

  const handleOpenSlide = () => {
    slideRef.current!.open("end")
  }

  return (
    <IonItemSliding ref={slideRef} id="tripOptions" onClick={() => { handleOpenSlide() }}>
      <IonItemOptions side="end">
        <IonItemOption routerLink={arePreviousTrips ? `/previous_trip/${tripId}` : `/trip/${tripId}`} color={"success"}>Ver</IonItemOption>
      </IonItemOptions>
      <IonItem >

        <div className="leftItemSection">
          <p className="date">{date} | {start} - {end}</p>
          <p className="car">{carModel} | {licPlate}</p>
          <p className="address">{destiny}</p>
        </div>
        <div className="rightItemSection">
          <div className="passengers"><IonIcon className="icon" icon={person} /> <p>{passengers.length}</p></div>
          <IonText color={"black"}><p className="state">{trip?.tripId === tripId ? stateOfTrip : "Sin iniciar"}</p></IonText>
          <IonText color={"primary"}><p className="type">{type}</p></IonText>
        </div>
      </IonItem>
    </IonItemSliding>
  )
}

export default TripItem