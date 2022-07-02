import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonItem, IonList, IonPage, IonText, IonToolbar, useIonViewDidEnter } from "@ionic/react"
import { useEffect, useState, useRef } from "react"
import { useParams } from "react-router"
import { useIonViewWillEnter } from '@ionic/react';

import PassengerItem from "../../components/PassengerItem"
import { useGoogleMaps } from "../../hooks/useGoogleMaps";
import { useTripState } from "../../hooks/useTripState"
import { useTimer } from "../../hooks/useTimer"

import './IndividualTripMenu.css'


const IndividualTripMenu: React.FC = () => {

  // maqueta
  const { tripId } = useParams<{ tripId: string }>()

  const { formatTimer, handleStart, handlePause, isActive, isPaused, timer } = useTimer()

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
  }, [trip?.tripState])

  // console.log(formatTimer(timer))
  // console.log(trip)

  const { createMap, mapRef, getCurrentLocation } = useGoogleMaps();


  useIonViewWillEnter(() => { createMap() })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="start" >
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <p>Detalles de Viaje | cod: {tripId} </p>
        </IonToolbar>
      </IonHeader>

      <IonContent className="content" scrollY fullscreen>

        <capacitor-google-map ref={mapRef} style={{
          display: 'inline-block',
          width: 100 + '%',
          height: 60 + 'vh',
        }}></capacitor-google-map>

        <IonList>
          <IonButton onClick={() => { getCurrentLocation() }}>Ubicacion</IonButton>
          <IonItem >
            <div className="leftItemSection">
              <p className="date">Inicio: 23/06/22 | 07:30 AM</p>
              <p className="date">Fin: 23/06/22 | 08:30 AM</p>
              <p className="address">Dest: Calle Armendáriz 3465 - Comas</p>
            </div>
            <div className="rightItemSection">
              <IonText color={"black"}><p className="state">{trip?.tripId === tripId ? stateOfTrip : "Sin iniciar"}</p></IonText>
              <IonText color={"primary"}><p className="type">Tipo de viaje</p></IonText>
            </div>
          </IonItem>

          <IonItem >
            <div className="passengersListContainer" >

              <p className="passengersNumber">Pasajeros (8)</p>

              <IonList className="passengersList">
                <PassengerItem address="Av. Aviación 124 - San Borja" name="Fernanda Rosales" cellphone="954 541 241" order={1} state="En espera" />
                {/* maqueta */}
                <PassengerItem address="Av. Aviación 124 - San Borja" name="Fernanda Rosales" cellphone="954 541 241" order={1} state="En espera" />
                <PassengerItem address="Av. Aviación 124 - San Borja" name="Fernanda Rosales" cellphone="954 541 241" order={1} state="En espera" />
                <PassengerItem address="Av. Aviación 124 - San Borja" name="Fernanda Rosales" cellphone="954 541 241" order={1} state="En espera" />
                <PassengerItem address="Av. Aviación 124 - San Borja" name="Fernanda Rosales" cellphone="954 541 241" order={1} state="En espera" />
                <PassengerItem address="Av. Aviación 124 - San Borja" name="Fernanda Rosales" cellphone="954 541 241" order={1} state="En espera" />
                <PassengerItem address="Av. Aviación 124 - San Borja" name="Fernanda Rosales" cellphone="954 541 241" order={1} state="En espera" />
                <PassengerItem address="Av. Aviación 124 - San Borja" name="Fernanda Rosales" cellphone="954 541 241" order={1} state="En espera" />
              </IonList>
            </div>
          </IonItem>
        </IonList>
      </IonContent>

      {
        trip?.tripState === "pickingup" || trip?.tripState === "onway" ? (
          <IonFooter className="footer" >
            {
              trip?.tripId === tripId ? (
                <IonButton expand="block" routerLink="/events" color={"danger"}>Reportar Incidencia</IonButton>
              ) : (
                <IonButton expand="block" disabled color={"medium"}>Tienes un viaje en curso</IonButton>
              )
            }
          </IonFooter>) : (
          <IonFooter className="footer" >
            <IonButton expand="block" onClick={() => { startTrip(tripId) }} color={"success"}>Iniciar Viaje</IonButton>
          </IonFooter>
        )
      }
    </IonPage>
  )
}

export default IndividualTripMenu