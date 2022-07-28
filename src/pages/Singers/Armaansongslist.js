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
    personCircleOutline,
    menu,
    arrowBackOutline,
    
  } from "ionicons/icons";
  import "../Data.js";
  
 
  
  const Armaansongslist = () => {
    return (
      <IonPage className="arjit">
  <IonToolbar color="dark">
    <IonButton slot="start" fill="clear" routerLink="/Dashboard">
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
  
  export default Armaansongslist;