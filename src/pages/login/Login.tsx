import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonList, IonPage } from "@ionic/react"
import { person, key } from 'ionicons/icons'
import { Link } from "react-router-dom"

import './LoginAndRecover.css'

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen >
        <div className="container">
          <p className="balat">BalatPerú</p>
          <form className="form" >

            <IonList>
              <IonItem>
                <IonIcon icon={person} />
                <div className="spacer" />
                <IonInput type="text" placeholder="Usuario" />
              </IonItem>
              <IonItem>
                <IonIcon icon={key} />
                <div className="spacer" />
                <IonInput type="password" placeholder="Contraseña" />
              </IonItem>
            </IonList>
            <IonButton expand="block" type="submit">Iniciar sesión</IonButton>
            <Link className="recover" to="/recover"><p>Olvidé mi contraseña</p></Link>
            <div className="bottomInfo">
              <p>
                BalatPerú
              </p>
              <div className="line" />
              <p>Versión 0.0.2</p>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Login