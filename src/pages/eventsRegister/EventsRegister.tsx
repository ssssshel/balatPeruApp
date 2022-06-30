import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonText, IonTextarea, IonToolbar } from "@ionic/react"

import './EventsRegister.css'

const EventsRegister: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="start">
            {/* configurar con history */}
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <p>Registro de Incidencia: Viaje</p>
        </IonToolbar>
      </IonHeader>
      <IonContent className="container" fullscreen>
        <form className="eventForm">
          <IonList lines="none">
            <IonItem>
              <IonSelect placeholder="Tipo de incidencia">
                <IonSelectOption value="1">Observación</IonSelectOption>
                <IonSelectOption value="2">Emergencia</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem className="item" >
              <IonTextarea placeholder="Breve descripción" />
            </IonItem>
            <IonItem>
              <IonText color={"medium"}>
                <p>Agrega imágenes</p>
              </IonText>
              <div className="imgRow">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </IonItem>
          </IonList>
          <IonButton expand="block" color={"danger"}>Registrar</IonButton>
        </form>
      </IonContent>
    </IonPage >
  )
}

export default EventsRegister