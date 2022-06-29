import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonText, IonTextarea, IonToolbar } from "@ionic/react"

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
          <p>Registro de Eventos</p>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form >
          <IonList className="eventForm" lines="none">
            <IonItem>
              <IonSelect placeholder="Seleccione una incidencia">
                <IonSelectOption value="1">Observación</IonSelectOption>
                <IonSelectOption value="2">Emergencia</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem >
              <IonText color={"medium"}>
                <p>Descripción</p>
              </IonText>
              <IonTextarea placeholder="Breve descripción" />
            </IonItem>
            <IonItem>
              <div>

              </div>
            </IonItem>
          </IonList>

        </form>
      </IonContent>
    </IonPage >
  )
}

export default EventsRegister