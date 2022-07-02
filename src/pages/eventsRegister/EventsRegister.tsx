import { IonActionSheet, IonAlert, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonModal, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTextarea, IonTitle, IonToolbar } from "@ionic/react"
import { eye, trash, close, camera } from 'ionicons/icons'
import { useRef, useState } from "react"

import { usePhotoTool, UserPhoto } from "../../hooks/usePhotoTool"

import './EventsRegister.css'

const EventsRegister: React.FC = () => {

  const modalRef = useRef<HTMLIonModalElement>(null)
  const pageRef = useRef(null)

  const [selectedPhoto, setSelectedPhoto] = useState<UserPhoto>()
  const [showSelectedPhoto, setShowSelectedPhoto] = useState(false)
  // const [selectedPhotoPath, setSelectedPhotoPath] = useState<string | undefined>(undefined)
  const { photos, deletePhoto, takePhoto } = usePhotoTool()

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
          <IonList className="inputList" lines="none">
            <IonItem>
              <IonLabel position="floating">Tipo de incidencia</IonLabel>
              <IonSelect placeholder="Seleccione un tipo">
                <IonSelectOption value="1">Observación</IonSelectOption>
                <IonSelectOption value="2">Emergencia</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem  >
              <IonLabel position="floating">Descripción</IonLabel>
              <IonTextarea className="description" placeholder="Breve descripción" />
            </IonItem>
            <IonItem className="imgcontainer">
              {/* <IonLabel>Agrega Imágenes</IonLabel> */}
              <IonGrid>
                <IonRow >
                  {photos.map((photo, index) => (
                    <IonCol size="4" key={index}>
                      <IonImg onClick={() => setSelectedPhoto(photo)} src={photo.webviewPath} />
                      <IonModal ref={modalRef} isOpen={showSelectedPhoto}  >
                        <IonHeader>
                          <IonToolbar>
                            <IonButtons slot="end">
                              <IonButton onClick={() => { setShowSelectedPhoto(false); }} >Cerrar</IonButton>
                            </IonButtons>
                          </IonToolbar>
                        </IonHeader>
                        <IonContent>
                          <div className="imgModalContainer">
                            <IonImg src={selectedPhoto?.webviewPath} />
                          </div>
                        </IonContent>
                      </IonModal>
                      <IonActionSheet isOpen={!!selectedPhoto} buttons={[{ text: 'Ver foto', role: 'informative', icon: eye, handler() { setShowSelectedPhoto(true); console.log(selectedPhoto) } }, {
                        text: 'Eliminar', role: 'destructive', icon: trash, handler() {
                          if (selectedPhoto) {
                            deletePhoto(selectedPhoto)
                            setSelectedPhoto(undefined)
                          }
                        },
                      }, {
                        text: 'Cancelar',
                        icon: close,
                        role: 'cancel'
                      }]} onDidDismiss={() => setSelectedPhoto(undefined)} />

                    </IonCol>
                  ))}
                </IonRow>
              </IonGrid>
            </IonItem>
          </IonList>
          <IonGrid className="btnRow">
            <IonRow>
              <IonCol>
                <IonButton onClick={() => takePhoto()} className="btnRegister" expand="block" color={"primary"} ><IonIcon icon={camera} />Tomar foto</IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="btnRegister" expand="block" color={"danger"}>Registrar</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>

        </form>
      </IonContent>
    </IonPage >
  )
}

export default EventsRegister