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
  IonSearchbar,
  IonCard,
  IonToolbar,
  IonAvatar,
  IonText,
} from "@ionic/react";

import {
  home,
  albumsOutline,
  heart,
  personAddOutline,
  menu,

} from "ionicons/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { LazyLoadImage } from "@dcasia/react-lazy-load-image-component-improved";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Dashboard.css";
const Dashboard = () => {
  const slideData = [
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2eYYLUto_ljyKeKcPXrqRjjLeaOoBsAVrg&usqp=CAU",
      song: "Agar thum saath ho",
      singer: "Arijit Singh",
    },
    {
      id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2eYYLUto_ljyKeKcPXrqRjjLeaOoBsAVrg&usqp=CAU",
      song: "Mere yaaraa",
      singer: "Arijit Singh",
    },
    {
      id: "3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2eYYLUto_ljyKeKcPXrqRjjLeaOoBsAVrg&usqp=CAU",
      song: "Dhokha",
      singer: "Arijit Singh",
    },
    {
      id: "4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2eYYLUto_ljyKeKcPXrqRjjLeaOoBsAVrg&usqp=CAU",
      song: "Dhokha",
      singer: "Arijit Singh",
    },
    {
      id: "5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2eYYLUto_ljyKeKcPXrqRjjLeaOoBsAVrg&usqp=CAU",
      song: "Dhokha",
      singer: "Arijit Singh",
    },
  ];

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
        <IonGrid className="content-gridd ">
          <IonRow className="dashboard-row1">Top Artist's</IonRow>
          <IonRow>
            <IonCol className="avatar-imgs " size="6" sizeSm="3" sizeMd="3">
              <IonRow>
                <IonAvatar className="avatar-image">
                  <LazyLoadImage
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2eYYLUto_ljyKeKcPXrqRjjLeaOoBsAVrg&usqp=CAU "
                    routerLink="/Arijith"
                  ></LazyLoadImage>
                </IonAvatar>
              </IonRow>
              <IonRow>
                <IonButton
                  id="text-btns"
                  className="aijith-btn ion-text-capitalize"
                  routerLink="/arijith"
                  fill="clear"
                  color="light"
                >
                  Arijit
                </IonButton>
              </IonRow>
            </IonCol>
            <IonCol className="avatar-imgs " size="6" sizeSm="3" sizeMd="3">
              <IonRow>
                <IonAvatar className="avatar-image">
                  <LazyLoadImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJNTLtJjzZYhf7eS0j1HxS2UnJR7HzDk4hg&usqp=CAU"></LazyLoadImage>
                </IonAvatar>
              </IonRow>

              <IonRow>
                <IonButton
                  id="text-btns"
                  className="aijith-btn ion-text-capitalize"
                  routerLink="/arijith"
                  fill="clear"
                  color="light"
                >
                  Sheya Goshal
                </IonButton>
              </IonRow>
            </IonCol>
            <IonCol className="avatar-imgs " size="6" sizeSm="3" sizeMd="3">
              <IonRow>
                <IonAvatar className="avatar-image">
                  <LazyLoadImage src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/11/mv5bmzeyotnlyzcty2y1nc00zmrlltllmjqtmmrlogqyyjg3ztvjxkeyxkfqcgdeqxvyndqxnjcxnq-1543069911.jpg"></LazyLoadImage>
                </IonAvatar>
              </IonRow>
              <IonRow>
                <IonButton
                  id="text-btns"
                  className="aijith-btn ion-text-capitalize"
                  routerLink="/arijith"
                  fill="clear"
                  color="light"
                >
                  Lata Mangeshkar
                </IonButton>
              </IonRow>
            </IonCol>
            <IonCol className="avatar-imgs " size="6" sizeSm="3" sizeMd="3">
              <IonRow>
                <IonAvatar className="avatar-image">
                  <LazyLoadImage src="https://c.files.bbci.co.uk/BC4D/production/_113950284_spbbygvenketram.jpg"></LazyLoadImage>
                </IonAvatar>
              </IonRow>
              <IonRow>
                <IonButton
                  id="text-btns"
                  className="aijith-btn ion-text-capitalize"
                  routerLink="/arijith"
                  fill="clear"
                  color="light"
                >
                  SPB
                </IonButton>
              </IonRow>
            </IonCol>
            <IonCol className="avatar-imgs " size="6" sizeSm="3" sizeMd="3">
              <IonRow>
                <IonAvatar className="avatar-image">
                  <LazyLoadImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfXZomHTw0EfP4NOMdsMI77k9SLvlWDiZK2g&usqp=CAU"></LazyLoadImage>
                </IonAvatar>
              </IonRow>
              <IonRow>
                <IonButton
                  id="text-btns"
                  className="aijith-btn ion-text-capitalize"
                  routerLink="/arijith"
                  fill="clear"
                  color="light"
                >
                  Hariharan
                </IonButton>
              </IonRow>
            </IonCol>
            <IonCol className="avatar-imgs " size="6" sizeSm="3" sizeMd="3">
              <IonRow>
                <IonAvatar className="avatar-image">
                  <LazyLoadImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4In6boUM84FB984nLGZCbk4ThhhBdtynRPQ&usqp=CAU"></LazyLoadImage>
                </IonAvatar>
              </IonRow>
              <IonRow>
                <IonButton
                  id="text-btns"
                  className="aijith-btn ion-text-capitalize"
                  routerLink="/arijith"
                  fill="clear"
                  color="light"
                >
                  Armaan Malik
                </IonButton>
              </IonRow>
            </IonCol>
            <IonCol className="avatar-imgs " size="6" sizeSm="3" sizeMd="3">
              <IonRow>
                <IonAvatar className="avatar-image">
                  <LazyLoadImage src="data:image/jpeg;base64,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"></LazyLoadImage>
                </IonAvatar>
              </IonRow>
              <IonRow>
                <IonButton
                  id="text-btns"
                  className="aijith-btn ion-text-capitalize"
                  routerLink="/arijith"
                  fill="clear"
                  color="light"
                >
                  Dardhan Raval
                </IonButton>
              </IonRow>
            </IonCol>
            <IonCol className="avatar-imgs " size="6" sizeSm="3" sizeMd="3">
              <IonRow>
                <IonAvatar className="avatar-image">
                  <LazyLoadImage src="data:image/jpeg;base64,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"></LazyLoadImage>
                </IonAvatar>
              </IonRow>
              <IonRow>
                <IonButton
                  id="text-btns"
                  className="aijith-btn ion-text-capitalize"
                  routerLink="/arijith"
                  fill="clear"
                  color="light"
                >
                  Neha Kakkar
                </IonButton>
              </IonRow>
            </IonCol>
          </IonRow>

          <IonRow className="dashboard-text">Recently Played</IonRow>
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
          </IonRow>

          <IonRow>
            <IonButton
              className="signout-btn ion-text-capitalize"
              routerLink="/signin"
            >
              SignOut
            </IonButton>
          </IonRow>
        </IonGrid>
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
};

export default Dashboard;
