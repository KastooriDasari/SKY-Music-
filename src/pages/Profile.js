import {
  IonContent,
  IonPage,
  IonToolbar,
  IonIcon,
  IonRow,
  IonCol,
  IonLabel,
  IonTabButton,
  IonTabBar,
  IonButton,
  IonGrid,
  IonCard,
  useIonAlert,
  useIonRouter
  
} from "@ionic/react";
import { useAuth } from "../context/AuthContext";

import {
  home,
  albumsOutline,
  heart,
  menu,
  arrowBackOutline,
  personCircleOutline,
} from "ionicons/icons";
import "./Data.js";
import "./Profile.css";
// import { Profile } from "console";
const Profile = () => {
  const currentUser = useAuth();
  const [presentAlert] = useIonAlert();
  const router=useIonRouter();
  
  
  const handleSignout= async (e) => {
  
    presentAlert({
      header:'Signout',
      subHeader:'Are you sure',
      message:'You want to signout? ',
      buttons:['YES'],
    onClick:router.push("/signin"),
      duration: 1000,
    //  onDidPresent:router.push("/signin"),
      })
    
      // router.push("/signin");
  }
  return (
    <IonPage className="arjit">
     <IonToolbar color="dark">
  <IonButton slot="start" fill="clear"  routerLink="/Dashboard">
          <IonIcon
            icon={arrowBackOutline}
            style={{ float: "right", fontSize: "20px" }}
            color="warning"
           
          ></IonIcon>
        </IonButton>
      
        <IonButton slot="end" fill="clear">
          <IonIcon
            icon={menu}
            style={{ float: "right", fontSize: "20px" }}
            color="warning"
          ></IonIcon>
        </IonButton>
      </IonToolbar>

      <IonContent>
        <IonGrid className="profile-grid">
          <IonCard className="profile-grid-card">
            <IonRow className="profile-grid-card-row1 ion-margin" ><IonIcon icon={personCircleOutline}></IonIcon></IonRow>
          <IonRow className="profile-grid-card-row2">
            <IonLabel>{currentUser?.email}</IonLabel>
          </IonRow>
          <IonRow className="profile-grid-card-row3 ion-margin">
            <IonButton
              className="signout-btn ion-text-capitalize"
             onClick={handleSignout}
            >
              SignOut
            </IonButton>
          </IonRow>
          </IonCard>
         
        </IonGrid>
      </IonContent>

      <IonTabBar slot="bottom" className="tabbar-bottom">
        <IonTabButton tab="tab1" href="/Dashboard">
          <IonIcon style={{ color: "orange" }} icon={home} />

          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/Library">
          <IonIcon style={{ color: "orange" }} icon={albumsOutline} />
          <IonLabel>Library</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab2" href="/Favourites">
          <IonIcon style={{ color: "orange" }} icon={heart} />
          <IonLabel>Favourites</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab3" href="/Profile">
          <IonIcon style={{ color: "orange" }} icon={personCircleOutline} />

          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default Profile;
