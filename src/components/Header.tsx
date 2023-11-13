import React from 'react';
import {
 
  IonHeader,
  IonToolbar,
  IonTitle,
  
  IonButtons,
 
  IonMenuButton,
  IonBackButton,
 
} from '@ionic/react';

interface CustomComponentProps {
    headingText: string;
  }


const Header: React.FC<CustomComponentProps> = ({headingText}) => {

    
  return (
    <IonHeader color="primary" >
      <IonToolbar>
        <IonButtons slot="start">
        <IonBackButton />
        </IonButtons>
        <IonTitle> {headingText}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
