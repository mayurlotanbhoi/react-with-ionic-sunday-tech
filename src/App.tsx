import React, { createContext, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import DashBoard from './pages/DashBoard';
import TodoApp from './pages/TodoApp';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

interface LoginContextProps {
  isUserLogin: boolean;
  setUserLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

const App: React.FC = () => {
  const [isUserLogin, setUserLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isUserLogin, setUserLogin }}>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>

            <Route exact path="/dashboard">
              <DashBoard />
            </Route>

            <Route exact path="/dashboard/todo">
              <TodoApp />
            </Route>

            <Redirect exact from="/" to="/Login" />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </LoginContext.Provider>
  );
};



export default App;
export {LoginContext}
