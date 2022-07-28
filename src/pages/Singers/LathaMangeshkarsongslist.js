import {
    IonContent,
    IonPage,
  IonToolbar,
    IonIcon,
    IonRow,
   
    IonLabel,
    IonTabButton,
    IonTabBar,
    IonButton,
    useIonRouter,
    IonThumbnail,
    IonList,
    IonText,
    IonItem,
    IonImg
  } from "@ionic/react";
  import {
 
    collection,
    getDocs,
    // orderBy,
    // onSnapshot,
    // query,
    // doc,
    // deleteDoc,
  } from "firebase/firestore";
  import {
    home,
    albumsOutline,
    heart,
    personCircleOutline,
    menu,
    arrowBackOutline,
    
  } from "ionicons/icons";
  import "../Data.js";
  import { auth, db, } from "../../firebase";
  import { useEffect, useState } from "react";
  
  const LathaMangeshkarsongslist = () => {
    const [lathamangeshkarsinger, setSinger] = useState([]);
  const singerRef = collection(db,"singers","4WniBfic0f1xz5n3p7V6","songs",);

  const router = useIonRouter();
  const handleCategory = (path) => {
    router.push(path);
  };
  useEffect(() => {
    getDocs(singerRef).then((snapshort) => {
      let songsList = [];
      snapshort.docs.forEach((doc) => {
        songsList.push({ ...doc.data(), id: doc.id });
      });
      console.log(songsList);
      setSinger(songsList);
    });
  }, []);
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
      {lathamangeshkarsinger.map((Data) => (
          <IonList onClick={() =>  handleCategory("/Track")}>
            <IonItem>
              <IonThumbnail className="ion-margin-end">
                <IonImg  src={Data.image.id}></IonImg>
              </IonThumbnail>
              <IonLabel>
                <IonRow><IonText className="song">{Data.song.id}</IonText></IonRow>
                {/* <IonRow><IonText className="singer">{Data.singer}</IonText></IonRow> */}
              </IonLabel>
            </IonItem>
          </IonList>
        
           
        ))}

  
  
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
  
  export default LathaMangeshkarsongslist;