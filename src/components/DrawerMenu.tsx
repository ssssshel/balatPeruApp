import { IonContent, IonHeader, IonItem, IonList, IonMenu, IonRouterOutlet, IonToolbar } from "@ionic/react"
import { menuController } from '@ionic/core/components'
import './DrawerMenu.css'

const DrawerMenu: React.FC = () => {

  const handleCloseMenu = async () => {
    await menuController.toggle()
  }

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
            <IonItem onClick={() => handleCloseMenu()} routerLink="/trips/pending">
              Viajes Pendientes
            </IonItem>
            <IonItem onClick={() => handleCloseMenu()} routerLink="/trips/previous">
              Viajes Previos
            </IonItem>
            <IonItem onClick={() => handleCloseMenu()} slot="end">
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