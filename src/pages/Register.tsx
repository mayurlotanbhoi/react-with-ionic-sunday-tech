import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText } from '@ionic/react'
import React, { useState } from 'react'
import { addItemToLocalStorage } from '../Utilitys/LocalStorage';
import { useHistory } from 'react-router-dom';
// const navigeter = useNavigate()

const Register: React.FC =() => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const history = useHistory();

//   password: string;
//   username : string;
//   email: string

  const handleLogin = () => {
    // Implement your login logic here
    if(email &&password &&  username){
        const isUserRegistered =  addItemToLocalStorage("userdetail",{password,username,email})
        console.log(isUserRegistered)
        history.push('/login');
          console.log('Login button clicked');
        }else{
            alert("all Field Requird")
        }
    }

 
  return (
    <IonPage>
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol size="6">
            {/* Image Side */}
            <IonImg
              src="https://media.istockphoto.com/id/135018895/photo/laboratory.jpg?s=2048x2048&w=is&k=20&c=vsT4OTJTTvLB_cJhX3hRkupvpD6dU4ws2qVyoruaqkQ="
              alt="Login Image"
              style={{ width: '50vw', height: '100vh', objectFit: 'cover' }}
            />
          </IonCol>
          <IonCol size="6">
            {/* Login Form Side */}
            <div
              className="ion-padding"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                background: '#f8f8f8', // Background color
              }}
            >
              <div
                style={{
                  width: '80%', // Adjust the width of the form container
                  maxWidth: '400px', // Maximum width for responsiveness
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Box shadow for a card-like appearance
                  background: 'white', // Form background color
                }}
              >
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
                  Register Page
                </h1>

                <IonItem>
                    <IonLabel position="floating">User Name</IonLabel>
                    <IonInput
                      type="text"
                      value={username}
                      onIonChange={(e) => setUsername(e.detail.value!)}
                      style={{ marginBottom: '20px' }}
                    ></IonInput>
                  </IonItem>

                <IonItem>
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput
                    type="email"
                    value={email}
                    onIonChange={(e) => setEmail(e.detail.value!)}
                    style={{ marginBottom: '10px' }}
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput
                    type="password"
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)}
                    style={{ marginBottom: '20px' }}
                  ></IonInput>
                </IonItem>

                <IonButton
                  expand="full"
                  onClick={handleLogin}
                  style={{ marginBottom: '20px' }}
                >
                  Register
                </IonButton>

                
              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
  )
}
export default Register
