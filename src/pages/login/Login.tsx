import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonList, IonPage, IonText } from "@ionic/react"
import { person, key } from 'ionicons/icons'
import { Link, useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"

import './LoginAndRecover.css'

const Login: React.FC = () => {

  const history = useHistory()

  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      username: "",
      password: "",
    }
  })

  function onSubmit(data: any) {
    // alert(JSON.stringify(data, null, 2));
    history.push('/trips/pending')
  }

  return (
    <IonPage>
      <IonContent fullscreen >
        <div className="container">
          <IonText color={"dark"}>
            <p className="balat">BalatPerú</p>

          </IonText>
          <form className="form" onSubmit={handleSubmit(onSubmit)} >

            <IonList>

              {/* USERNAME */}
              <IonItem>
                <IonIcon icon={person} />
                <div className="spacer" />
                <IonInput type="text" minlength={8} placeholder="Usuario" {...register('username', { required: "Ingresa un nombre de usuario" })} />
              </IonItem>

              {/* PASSWORD */}
              <IonItem>
                <IonIcon icon={key} />
                <div className="spacer" />
                <IonInput type="password" minlength={8} placeholder="Contraseña" {...register('password', { required: "Ingresa tu contraseña" })} />
              </IonItem>
            </IonList>
            <IonButton expand="block" type="submit" >Iniciar sesión</IonButton>
            <Link className="recover" to="/recover"><p>Olvidé mi contraseña</p></Link>
            <div className="bottomInfo">
              <p>
                BalatPerú
              </p>
              <div className="line" />
              <p>Versión 1.0.2</p>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Login