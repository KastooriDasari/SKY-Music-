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
  IonGrid,
  IonImg,
  IonCard,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  useIonViewWillEnter,
  IonText
} from "@ionic/react";
import {
  home,
  menu,
  albumsOutline,
  heart,
  personCircleOutline,
  arrowBackOutline,
} from "ionicons/icons";

import "./Data.js";

import "./arjit.css";
import { Data } from "./Data.js";
import { useState } from "react";
const Arijith = () => {
  const [datas, setData] = useState([]);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  const pushData = () => {
    const max = datas.length + 10;
    const min = max - 10;
    const newData = [];

    if (datas.length === 40) {
      setInfiniteDisabled(true);
    } else {
      for (let i = min; i < max; i++) {
        newData.push(Data[i]);
      }
      setData([...datas, ...newData]);
    }
  };
  const loadData = (ev) => {
    console.log(datas.length);
    setTimeout(() => {
      pushData();
      console.log("Loaded data");
      ev.target.complete();
      if (datas.length === 1000) {
        setInfiniteDisabled(true);
      }
    }, 2000);
  };
  useIonViewWillEnter(() => {
    pushData();
  });
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
        <IonGrid>
          {datas.map((data) => {
            return (
              <IonCard className="kkk">
                <IonRow size="4">
                  <IonCol>
                    <IonImg src={data.image} />
                  </IonCol>
                  <IonCol size="7">
                    <IonRow className="kk">{data.song}</IonRow>
                    <IonRow className="k">{data.singer}</IonRow>
                  </IonCol>
                </IonRow>
              </IonCard>
            );
          })}
          <IonInfiniteScroll
            onIonInfinite={loadData}
            threshold="100px"
            disabled={isInfiniteDisabled}
          >
            <IonInfiniteScrollContent
              loadingSpinner="bubbles"
              loadingText="Loading more data..."
            ></IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </IonGrid>
      </IonContent>

      <IonTabBar slot="bottom" className="tabbar-bottom">
        <IonTabButton tab="tab1" href="/dashboard">
          <IonIcon style={{ color: "orange" }} icon={home} />

          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/library">
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

export default Arijith;
