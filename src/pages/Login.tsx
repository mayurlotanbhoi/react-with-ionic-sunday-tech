import React, { useContext, useState } from 'react';
import {
  IonContent,
  IonPage,
  IonInput,
  IonLabel,
  IonButton,
  IonItem,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { getItemsFromLocalStorage } from '../Utilitys/LocalStorage';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../App';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const contextValue = useContext(LoginContext);

  const handleLogin = () => {
    // Implement your login logic here


    if(!email || !password){
        alert("password and email  required")
        // return;
   }
    const alluser =  getItemsFromLocalStorage("userdetail")
    const isUserPresent = alluser.some((item) => item.email === email && item.password === password )

    if(isUserPresent){
        alert("login success")
        contextValue?.setUserLogin(true);
        history.push('/dashboard');
    }else{
        alert("user Not Present")
    }
    console.log('Login button clicked');
  };

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
                    Login Page
                  </h1>
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
                    Login
                  </IonButton>

                  <IonText>
                    <p>
                      Don't have an account?{' '}
                      <Link to="/register">Register</Link>
                    </p>
                    <p>
                      <a href="/forgot-password">Forgot Password?</a>
                    </p>
                  </IonText>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
