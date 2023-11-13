import { IonButton, IonFooter, IonIcon, IonToolbar } from '@ionic/react'
import React from 'react'
import { homeOutline, settingsOutline, personOutline } from 'ionicons/icons';

export default function Footer() {
  return (
    
    <IonFooter>
    <IonToolbar >
        <div style={{ display :"flex" , justifyContent:"center"}}>
      <IonButton expand="full" color="primary">
        <IonIcon icon={homeOutline} />
        Home
      </IonButton>
      <IonButton expand="full" color="primary">
        <IonIcon icon={settingsOutline} />
        Settings
      </IonButton>
      <IonButton expand="full" color="primary">
        <IonIcon icon={personOutline} />
        Profile
      </IonButton>
      </div>
    </IonToolbar>
  </IonFooter>
  )
}
