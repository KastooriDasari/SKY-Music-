import {
  IonContent,
  IonPage,
  IonRow,
  IonIcon,
  IonCol,
  IonButton,
  IonLabel,
  IonTabButton,
  IonTabBar,
  IonGrid,
  IonImg,
  IonCard,
  IonToolbar,
  IonAvatar,
  IonText,
  useIonRouter,
  IonThumbnail,
  IonItem,
  IonList
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
import { db, } from "../firebase";
import { useEffect, useState } from "react";
import {
  home,
  albumsOutline,
  heart,
  personCircleOutline,
  menu,
  arrowForward
} from "ionicons/icons";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { LazyLoadImage } from "@dcasia/react-lazy-load-image-component-improved";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Dashboard.css";
const Dashboard = () => {
  const [singer, setSinger] = useState([]);
  const singerRef = collection(db, "singers","");

  const router = useIonRouter();
  const handleCategory = (path) => {
    router.push(path);
  };

  useEffect(() => {
    getDocs(singerRef).then((snapshort) => {
      let singersList = [];
      snapshort.docs.forEach((doc) => {
        singersList.push({ ...doc.data(), id: doc.id });
      });
      console.log(singersList);
      setSinger(singersList);
    });
  }, []);
  // const slideData = [
  //   {
  //     id: "1",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2eYYLUto_ljyKeKcPXrqRjjLeaOoBsAVrg&usqp=CAU",
  //     song: "Agar thum saath ho",
  //     singer: "Arijit Singh",
  //   },
  //   {
  //     id: "2",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2eYYLUto_ljyKeKcPXrqRjjLeaOoBsAVrg&usqp=CAU",
  //     song: "Mere yaaraa",
  //     singer: "Arijit Singh",
  //   },
  //   {
  //     id: "3",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2eYYLUto_ljyKeKcPXrqRjjLeaOoBsAVrg&usqp=CAU",
  //     song: "Dhokha",
  //     singer: "Arijit Singh",
  //   },
  //   {
  //     id: "4",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2eYYLUto_ljyKeKcPXrqRjjLeaOoBsAVrg&usqp=CAU",
  //     song: "Dhokha",
  //     singer: "Arijit Singh",
  //   },
  //   {
  //     id: "5",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2eYYLUto_ljyKeKcPXrqRjjLeaOoBsAVrg&usqp=CAU",
  //     song: "Dhokha",
  //     singer: "Arijit Singh",
  //   },
  // ];

  return (
    <IonPage className="">
      {/* Toolbar */}
      <IonToolbar color="dark">
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

        <IonGrid className="content-gridd ">
          <IonRow className="dashboard-row1 ion-margin "> Popular Artist's</IonRow>
          <IonRow>
          {/* {singer.map((Data) => (
           
           <IonCol className="avatar-imgs " 
           key={Data.id}
           size="6"
           sizeSm="4"
           sizeMd="3"
           
           onClick={() =>  handleCategory("/Arijithsongslist")} 
           >
            <IonCard className="singers-cards" >
             <IonRow className="ion-margin-bottom" >
               <IonAvatar className="avatar-image">
                 <LazyLoadImage
                  src={Data.image}
                ></LazyLoadImage>
              </IonAvatar>
            </IonRow>
            <IonRow >
              <IonLabel
                id="text-btns"
                className="aijith-btn "
                fill="clear"
                color="dark"
              >
               {Data.button}
              </IonLabel>
            </IonRow>
            </IonCard>
          </IonCol>
        ))} */}
          </IonRow>
       
          {singer.map((Data) => (
          <IonList className="list-items"  onClick={() =>  handleCategory("/Songs")}>
            <IonItem className="list-items">
              <IonThumbnail className="ion-margin-end">
                <IonImg  src={Data.image}></IonImg>
              </IonThumbnail>
              <IonLabel>
                <IonCol slot="start">
                <IonRow><IonText className="song">{Data.title}</IonText></IonRow>
                <IonRow><IonText className="singer">{Data.subtitle}</IonText></IonRow>
                </IonCol>
             
              </IonLabel> <IonRow><IonButton fill="clear"> <IonIcon icon={arrowForward} color="dark"></IonIcon></IonButton></IonRow>

            </IonItem>
           
          </IonList>
        
           
        ))}


             
          {/* <IonRow className="dashboard-text">Recently Played</IonRow>
          <IonRow className="ion-padding">
            <Swiper
              spaceBetween={5}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {slideData.map((user) => (
                <SwiperSlide key={user.id} className="slide">
                  <div className="slide-content">
                    <div className="user-image">
                      <IonCard className="ion-padding">
                        <IonRow size="4" className="ion-justify-content-center">
                          <IonImg src={user.image}></IonImg>
                        </IonRow>
                        <IonRow
                          size="4"
                          className=" ion-padding-top ion-justify-content-center"
                        >
                          <IonText
                            style={{ fontSize: "10px", fontWeight: "bold" }}
                          >
                            {user.song}
                          </IonText>
                        </IonRow>
                        <IonRow size="4" className="ion-justify-content-center">
                          <IonText style={{ fontSize: "8px" }}>
                            {user.singer}
                          </IonText>
                        </IonRow>
                      </IonCard>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </IonRow> */}
        </IonGrid>
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

        <IonTabButton tab="tab3" href="/Favourites">
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

export default Dashboard;
