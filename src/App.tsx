import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/login/Login';
import RecoverPassword from './pages/recoverPassword/RecoverPassword';
import PendingTrips from './pages/tripsMenu/PendingTrips';
import PreviousTrips from './pages/tripsMenu/PreviousTrips';
import IndividualTripMenu from './pages/individualTripMenu/IndividualTripMenu';
import EventsRegister from './pages/eventsRegister/EventsRegister';
import DrawerMenu from './components/DrawerMenu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// MainCSS
import './theme/main.css';
import IndividualPreviousTripMenu from './pages/individualTripMenu/IndividualPreviousTripMenu';

setupIonicReact();

// manejar estado de usuario con interfaces 

const App: React.FC = () => {

  const user = true

  return (

    <IonApp>
      <IonReactRouter>
        <DrawerMenu />
        <IonRouterOutlet id='main'>

          {/* login & recover password */}
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            {
              user ? <Redirect to="/trips/pending" /> : <Redirect to="/login" />
            }

          </Route>
          <Route exact path="/recover">
            <RecoverPassword />
          </Route>

          {/* tripsMenu */}
          <Route path="/trips/pending">
            <PendingTrips />
          </Route>
          <Route path="/trips/previous">
            <PreviousTrips />
          </Route>


          {/* individualTripMenu */}
          <Route path="/trip/:tripId">
            {/* <Route path="/trip/:userId/:tripId"> */}
            <IndividualTripMenu />
          </Route>
          <Route path="/previous_trip/:tripId">
            <IndividualPreviousTripMenu />
          </Route>

          {/* eventsRegister */}
          <Route path="/events">
            <EventsRegister />
          </Route>

        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
