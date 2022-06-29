import { IonContent, IonHeader, IonItem, IonList, IonMenu, IonPage, IonRouterOutlet, IonToolbar } from "@ionic/react"
import './DrawerMenu.css'

const DrawerMenu = () => {
  return (
    <>
      <IonMenu side="start" contentId="main" menuId="leftdrawer">
        <IonHeader>
          <IonToolbar color={"primary"}>
            <div className="toolbar">
              <p className="logo">BalatPerú</p>
              <div className="driverData">
                <p>NOMBRE DE CONDUCTOR</p>
                <p>Conductor</p>
              </div>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/trips/pending">
              Viajes Pendientes
            </IonItem>
            <IonItem routerLink="/trips/previous">
              Viajes Previos
            </IonItem>
            <IonItem slot="start">
              Cerrar Sesión
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="main" />
    </>
  )
}

export default DrawerMenu