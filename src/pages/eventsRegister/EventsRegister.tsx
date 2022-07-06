import { IonActionSheet, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonModal, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea, IonToolbar } from "@ionic/react"
import { eye, trash, close, camera } from 'ionicons/icons'
import { useEffect, useRef, useState } from "react"
import { Controller, useForm } from "react-hook-form"

import { usePhotoTool, UserPhoto } from "../../hooks/usePhotoTool"

import './EventsRegister.css'

const EventsRegister: React.FC = () => {

  const modalRef = useRef<HTMLIonModalElement>(null)

  const [selectedPhoto, setSelectedPhoto] = useState<UserPhoto>()
  const [showSelectedPhoto, setShowSelectedPhoto] = useState(false)
  const { photos, deletePhoto, takePhoto } = usePhotoTool()


  const { control, handleSubmit, setValue, register, getValues, formState: { errors } } = useForm({
    defaultValues: {
      type: "",
      description: "",
      images: Array<string | undefined>(),
    }
  })


  useEffect(() => {
    const bse64Info = photos.map((photo) => photo.b64Data)

    setValue('images', bse64Info)

  }, [photos.length])


  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };


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
        <form className="eventForm" onSubmit={handleSubmit(onSubmit)}>
          <IonList className="inputList" lines="none">

            {/* ======= TIPO DE INCIDENCIA ====== */}
            <IonItem>
              <IonLabel position="floating">Tipo de incidencia</IonLabel>
              <Controller


                render={({ field }) => (
                  <IonSelect placeholder="Seleccione un tipo" value={field.value} onIonChange={e => setValue('type', e.detail.value)} >
                    <IonSelectOption value="OBSERVACION">Observación</IonSelectOption>
                    <IonSelectOption value="EMERGENCIA">Emergencia</IonSelectOption>
                  </IonSelect>

                )} control={control} name="type" rules={{ required: 'Selecciona un tipo de incidencia' }} />
            </IonItem>

            {/* ======= DESCRIPCION ====== */}
            <IonItem  >
              <IonLabel position="floating">Descripción</IonLabel>
              <IonTextarea className="description" maxlength={120} minlength={10} placeholder="Breve descripción" {...register('description', { required: "Ingresa una descripción" })} />
            </IonItem>


            {/* ======= IMAGENES ====== */}
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
                <IonButton className="btnRegister" expand="block" color={"danger"} type="submit" >Registrar</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>

        </form>
      </IonContent>
    </IonPage >
  )
}

export default EventsRegister