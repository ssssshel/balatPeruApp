import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonToolbar } from "@ionic/react"
import { person } from 'ionicons/icons'
import { useForm } from "react-hook-form"

const RecoverPassword: React.FC = () => {

  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      username: "",
    }
  })

  function onSubmit(data: any) {
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" />
          </IonButtons>
          <p>Recuperar contraseña</p>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <p className="balat">BalatPerú</p>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>

            {/* USERNAME */}
            <IonItem>
              <IonIcon icon={person} />
              <div className="spacer" />
              <IonInput type="text" placeholder="Usuario" minlength={8} {...register('username', { required: "Ingrese un nombre de usuario" })} />
            </IonItem>
            <IonButton expand="block" type="submit">Enviar</IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default RecoverPassword