import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonToolbar } from "@ionic/react"
import { person } from 'ionicons/icons'

const RecoverPassword: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" />
          </IonButtons>
          {/* <IonTitle>Recuperar contraseña</IonTitle> */}
          <p>Recuperar contraseña</p>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <p className="balat">BalatPerú</p>
          <form className="form">
            <IonItem>
              <IonIcon icon={person} />
              <div className="spacer" />
              <IonInput type="text" placeholder="Usuario" />
            </IonItem>
            <IonButton expand="block" type="submit">Enviar</IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default RecoverPassword