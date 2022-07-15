import {
  IonContent,
  IonPage,
  IonRow,
  IonIcon,
  IonInput,
  IonButton,
  IonLabel,
  useIonRouter,
  IonGrid,
  IonImg,
  IonCol,
  useIonLoading,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import "./Signin.css";
import { UserAuth } from "../context/AuthContext";
import img from "C:/Users/KastooriDasari/Desktop/sky-music/src/Images/logo-removebg-preview.png";
import { logoFacebook, logoGoogle, logoTwitter } from "ionicons/icons";
import {  useState } from "react";

import { alert } from "ionicons/icons";
import { Link } from "react-router-dom";
const SignIn = () => {

 
  const { signIn, user } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [present, dismiss] = useIonToast();
  const [presentAlert] = useIonAlert();
  const [showPresent,showDismiss] = useIonLoading();

  async function handleButtonClick(message) {
    present({
      message: message,
      duration: 2000,
      position: "top",
      color: "light",
      mode: "ios",
      icon: alert,
    });
  }
  async function handleAlert(message) {
    presentAlert({
      header: "Alert",
      message: message,
      buttons: ["OK"],
      mode: "md",
      animated: true,
      cssClass: "loginpage-alert",
      color: "light",
    });
  }
  const router = useIonRouter();
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const handleSignin = async (e) => {
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (email == null || email === "" || password == null || password === "") {
      handleButtonClick("Fill the required fields");
    } else if (password.length < 6) {
      handleButtonClick("Password must be of 6 characters");
    } else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= email.length
    ) {
      handleButtonClick("Please enter correct email");
    } else {
      try {

        showPresent({
          message: 'Please wait...',
          duration: 1000,
    
        })

        await signIn(email, password);
        handleButtonClick("Login successful");
        clearInputs();
       
        router.push("/dashboard");
      } catch (e) {
        setError(e.message);
        showDismiss();
        clearInputs();
        handleAlert(e.message);
      }
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-content">
        <IonGrid className="content-grid-in">
          <IonRow>
            <IonImg src={img} alt=" " className="signin-top-img"></IonImg>
          </IonRow>
          <IonRow className="content-grid-row1">
            {" "}
            <IonLabel className="text1">Welcome Back! </IonLabel>
          </IonRow>
          <IonRow className="content-grid-row2">
            {" "}
            <IonLabel className="text2"> Sign In </IonLabel>
          </IonRow>
          <IonRow className="content-grid-row3">
            <IonInput
              className="email"
              type="text"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value)}
              placeholder="please enter your email"
            ></IonInput>
          </IonRow>
        
          <IonRow className="content-grid-row4">
            <IonInput
              className="password"
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value)}
              placeholder="please enter your password"
            ></IonInput>
          </IonRow>
        
          <IonRow className="content-grid-row5">
            <IonCol >
            <IonButton
              className="signin-btn ion-text-capitalize" 
              onClick={handleSignin}
            >
              SignIn
            </IonButton>
            </IonCol>
            {/* <IonCol size="md">
            <IonButton  
            className="signout-btn ion-text-capitalize"
            onClick={handleSignout}
          >
            SignOut
            </IonButton>
            </IonCol> */}
            </IonRow>
          <IonRow className="text">
            <IonLabel className="text3">
              Don't have account ?{" "}
              <Link to="/signup" className="link"  onClick={clearInputs}>
                Sign Up
              </Link>{" "}
            </IonLabel>
          </IonRow>
         
          <IonRow className="icons">
            <IonIcon
           
              style={{ fontSize: "30px", color: "orange" }}
              icon={logoFacebook} 
            />
            &emsp;
            <IonIcon
           
              style={{ fontSize: "30px", color: "orange" }}
              icon={logoGoogle}
            />
            &emsp;
            <IonIcon
              
              style={{ fontSize: "30px", color: "orange" }}
              icon={logoTwitter}
            />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default SignIn;
