import React, { useContext } from 'react';
import { IonButton, IonContent, IonIcon, IonPage } from '@ionic/react';
import { handRight } from 'ionicons/icons';
import { LoginContext } from '../App'; // Adjust the path accordingly
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useHistory } from 'react-router-dom';



const DashBoard: React.FC = () => {

  
  const contextValue = useContext(LoginContext);
  const history = useHistory();

  if(!contextValue?.isUserLogin){
    history.push('/login');
  }

  return (
    <IonPage>
      <Header headingText="Your Heading Here" />
      <IonContent className="ion-padding">
        <div>
          <h2>Click Here to go Todo App</h2>
          <p>This is some content in the main area of the app.</p>
          <IonButton expand="full" color="primary" routerLink="/dashboard/todo">
            <IonIcon icon={handRight} slot="start" />
            Go to Todo App
          </IonButton>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default DashBoard;
