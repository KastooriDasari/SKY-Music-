import {
    IonContent,
  IonPage,
  IonRow,
  IonIcon,
  IonCol,
  IonLabel,
  IonTabButton,
  IonTabBar,
  IonSearchbar,
  IonToolbar,
  
  } from "@ionic/react";
  import {
    home,
    albumsOutline,
    heart,
    personAddOutline,
    menu,
  
  } from "ionicons/icons";
  const Shreyagoshal = () => {
    return (
        <IonPage className="">
      {/* Toolbar */}
      <IonToolbar className="toolbar-top " color="dark">
        <IonRow className="first-row ion-justify-content-between ion-padding">
          <IonCol size="10" sizeSm="10" sizeMd="11">
            <IonSearchbar className="ion-padding"></IonSearchbar>
          </IonCol>
          <IonCol size="2" sizeSm="2" sizeMd="1" className="menu-icon">
            <IonIcon
              icon={menu}
              className="ion-jutify-content-center ion-padding"
              style={{ float: "right", fontSize: "20px" }}
              color="warning"
            ></IonIcon>
          </IonCol>
        </IonRow>
      </IonToolbar>
      <IonContent className="ion-content ">
        
        </IonContent>
    {/* TabBar */}
    <IonTabBar slot="bottom" className="tabbar-bottom">
    <IonTabButton tab="tab1" routerLink="/dashboard">
      <IonIcon style={{ color: "orange" }} icon={home} />

      <IonLabel>Home</IonLabel>
    </IonTabButton>
    <IonTabButton tab="tab2" href="/Library">
      <IonIcon style={{ color: "orange" }} icon={albumsOutline} />
      <IonLabel>Library</IonLabel>
    </IonTabButton>

    <IonTabButton tab="tab3" href="/Favorites">
      <IonIcon style={{ color: "orange" }} icon={heart} />
      <IonLabel>Favourites</IonLabel>
    </IonTabButton>

    <IonTabButton tab="tab4" href="/Profile">
      <IonIcon style={{ color: "orange" }} icon={personAddOutline} />
      <IonLabel>Profile</IonLabel>
    </IonTabButton>
  </IonTabBar>
</IonPage>
);
  }
  export default Shreyagoshal;
