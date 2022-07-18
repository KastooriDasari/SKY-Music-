import {
    IonContent,
    IonPage,
  IonToolbar,
    IonIcon,
    IonRow,
    IonCol,
    IonSearchbar,
    IonLabel,
    IonTabButton,
    IonTabBar,
    IonButton,
   
  } from "@ionic/react";
  import {
    home,
    albumsOutline,
    heart,
    personAddOutline,
  
    arrowBackOutline
  } from "ionicons/icons";
  import "./Data.js";
  
  import './arjit.css'

const Profile = () => {
    return (
      <IonPage className="arjit">
 <IonToolbar className="toolbar-top " color="dark">
        <IonRow className="first-row ion-justify-content-between ion-padding">
        <IonCol size="2" sizeSm="2" sizeMd="0.5" className="menu-icon">
           <IonButton  fill="clear" routerLink="/dashboard"> <IonIcon
              icon={arrowBackOutline}
              className="ion-jutify-content-center ion-padding"
              style={{ float: "right", fontSize: "20px" }}
              color="warning"
            ></IonIcon>
            </IonButton>
          </IonCol>
          <IonCol size="10" sizeSm="10" sizeMd="11.5">
            <IonSearchbar className="ion-padding"></IonSearchbar>
          </IonCol>
         
        </IonRow>
      </IonToolbar>
      <IonContent>



</IonContent>   

<IonTabBar slot="bottom" className="tabbar-bottom">
<IonTabButton tab="tab1" href="/tab1">
  <IonIcon style={{ color: "orange" }} icon={home} />

  <IonLabel>Home</IonLabel>
</IonTabButton>
<IonTabButton tab="tab2" href="/tab2">
  <IonIcon style={{ color: "orange" }} icon={albumsOutline} />
  <IonLabel>Library</IonLabel>
</IonTabButton>

<IonTabButton tab="tab2" href="/tab2">
  <IonIcon style={{ color: "orange" }} icon={heart} />
  <IonLabel>Favourites</IonLabel>
</IonTabButton>

<IonTabButton tab="tab3" href="/tab3">
  <IonIcon style={{ color: "orange" }} icon={personAddOutline} />

  <IonLabel>Profile</IonLabel>
</IonTabButton>
</IonTabBar>
</IonPage>
);
};

export default Profile;