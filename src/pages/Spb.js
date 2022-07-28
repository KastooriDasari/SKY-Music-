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
  IonButton,
  IonText,
} from "@ionic/react";
import "./shreyagoshal.css";
import {
  home,
  albumsOutline,
  heart,
  personCircleOutline,
  menu,
} from "ionicons/icons";

const Spb = () => {
  return (
    <IonPage className="">
      {/* Toolbar */}
      <IonToolbar color="dark">
        <IonText className="ion-padding" color="warning">Sky-Music</IonText>
        <IonButton slot="end" fill="clear">
          <IonIcon
            icon={menu}
            style={{ float: "right", fontSize: "20px" }}
            color="warning"
          ></IonIcon>
        </IonButton>
      </IonToolbar>

      <IonContent className="ion-content "></IonContent>

      {/* TabBar */}
      <IonTabBar slot="bottom" className="tabbar-bottom">
        <IonTabButton tab="tab1" href="/dashboard">
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
          <IonIcon style={{ color: "orange" }} icon={personCircleOutline} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};
export default Spb;
