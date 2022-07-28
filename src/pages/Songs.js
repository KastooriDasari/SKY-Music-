import {
  IonContent,
  IonPage,
  IonRow,
  IonIcon,
  
  IonLabel,
  IonTabButton,
  IonTabBar,
  IonButton,
  IonToolbar,
 
  IonImg,
  IonText,
  IonList,
  IonItem,
  IonThumbnail,
  IonCol,
  useIonRouter
} from "@ionic/react";
import "./shreyagoshal.css";
import {
  home,
  albumsOutline,
  heart,
  personCircleOutline,
  menu,
} from "ionicons/icons";
import {
  collection,
  getDocs,
  // doc,
  // deleteDoc,
  // orderBy,
  // onSnapshot,
  // query,
} from "firebase/firestore";

import { db, auth } from "../firebase";
import { useEffect, useState } from "react";

const Songs = () => {
  //const getDocs = doc(db, "image", "song" ,"singer");
  const [singer, setSinger] = useState([]);
  const singerRef = collection(db, "category",);
  const router = useIonRouter();
  const handleCategory = (path) => {
    router.push(path);
  };

  useEffect(() => {
    getDocs(singerRef).then((snapshort) => {
      let singers = [];
      snapshort.docs.forEach((doc) => {
        singers.push({ ...doc.data(), id: doc.id });
      });
      console.log(singers);
      setSinger(singers);
    });
  }, []);

  return (
    <IonPage className="">
      {/* Toolbar */}
      <IonToolbar color="dark" className="">
        <IonText className="ion-padding" color="warning">
          Sky-Music
        </IonText>
        <IonButton slot="end" fill="clear">
          <IonIcon
            icon={menu}
            style={{ float: "right", fontSize: "20px" }}
            color="warning"
          ></IonIcon>
        </IonButton>
      </IonToolbar>

      <IonContent className="ion-content ">
        {singer.map((Data) => (
          <IonList className="ion-margin"  onClick={() =>  handleCategory("/Play")}>
            <IonItem>
              <IonThumbnail className="ion-margin-end">
                <IonImg  src={Data.image}></IonImg>
              </IonThumbnail>
              <IonLabel>
                <IonRow><IonText className="song">{Data.song}</IonText></IonRow>
                <IonRow><IonText className="singer">{Data.singer}</IonText></IonRow>
                
              </IonLabel>
            </IonItem>
          </IonList>
        ))}
      </IonContent>

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
export default Songs;
