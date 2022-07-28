import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  useIonAlert,
  useIonToast,
  isPlatform,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Arijith from "./pages/arijith";
import Shreyagoshal from "./pages/shreyagoshal";
import Spb from "./pages/Spb";
import Profile from "./pages/Profile";
import Songs from "./pages/Songs";
import Play from "./pages/Play";
import Arijithsongslist from "./pages/Singers/Arijithsongslist";
import Armaansongslist from "./pages/Singers/Armaansongslist";
import Darshanravelsongslist from './pages/Singers/Darshanravelsongslist';
import Hariharansongslist from './pages/Singers/Hariharansongslist';
import LathaMangeshkarsongslist from './pages/Singers/LathaMangeshkarsongslist';
import Nehakakkarsongslist from './pages/Singers/Nehakakkarsongslist';
import Shreyasongslist from './pages/Singers/Shreyasongslist';
import Spbsongslist from "./pages/Singers/Spbsongslist";



import { Browser } from "@capacitor/browser";
import { App as app } from "@capacitor/app";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import Library from "./pages/Library";
import Favourites from "./pages/Favourites";


setupIonicReact();

const App = () => {
  const [updateDetails, setUpdateDetails] = useState({});
  const [appVersion, setAppVersion] = useState("");
  const updateRef = doc(db, "Sky-music", "UM2TCbkYJXJaKqIhlOgk");

  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();

  const handleToast = (msg) => {
    present({
      message: msg,
      position: "top",
      animated: true,
      duration: 2000,
      color: "white",
      mode: "ios",
    });
  };

  const handleAlert = (msg, title, btn, appVersion) => {
    presentAlert({
      header: title,
      subHeader: `Version: ${appVersion}`,
      message: msg,
      buttons: [
        {
          text: btn,
          role: "Download",
          handler: async () => {
            handleToast("Download Clicked");
            await Browser.open({
              url: "https://play.google.com/store/apps/details?id=com.skymusicptg.app",
            });
          },
        },
      ],
      backdropDismiss: true,
      translucent: true,
      animated: true,
    });
  };

  const getAppInfo = async () => {
    let info = await app.getInfo();
    return info;
  };

  const getConfigData = async () => {
    const docSnap = await getDoc(updateRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log("Document data:", docSnap.data());
      setUpdateDetails(data.updateMsg);
      setAppVersion(data.current);
    } else {
      console.log("No such document!");
    }
  };

  const checkUpdate = async () => {
    try {
      if (isPlatform("android")) {
        const currentAppInfo = getAppInfo();
        if (appVersion > (await currentAppInfo).version) {
          const msg = updateDetails.msg;
          const title = updateDetails.title;
          const btn = updateDetails.btn;
          handleAlert(msg, title, btn, appVersion);
        }
      }
    } catch (error) {
      handleAlert(error.message);
    }
  };

  useEffect(() => {
    getConfigData();
    getAppInfo();
    
  },[]);

  checkUpdate();

  return (
    <AuthContextProvider>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/Signup">
              <SignUp />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/Songs">
              <Songs />
            </Route>
            <Route exact path="/Play">
              <Play/>
            </Route>
            <Route exact path="/Arijithsongslist">
              <Arijithsongslist/>
            </Route>

            <Route path="/Arijithsongslist" exact pages={Arijithsongslist}/>
            <Route path="/Armaansongslist" exact pages={Armaansongslist}/>
            <Route path="/Darshanravelsongslist" exact pages={Darshanravelsongslist}/>
            <Route path="/Hariharansongslist" exact pages={Hariharansongslist}/>
            <Route path="/LathaMangeshkarsongslist" exact pages={LathaMangeshkarsongslist}/>
            <Route path="/Nehakakkarsongslist" exact pages={Nehakakkarsongslist}/>
            <Route path="/Shreyasongslist" exact pages={Shreyasongslist}/>
            <Route path="/Spbsongslist" exact pages={Spbsongslist}/>

            <Route path="/Arijithsongslist/:id" exact>
              <Arijithsongslist />
            </Route>
            <Route path="/Armaansongslist/:id" exact>
              <Armaansongslist/>
            </Route>
            <Route path="/Darshanravelsongslist/:id" exact>
              <Darshanravelsongslist/>
            </Route>
            <Route path="/Hariharansongslist/:id" exact>
              <Hariharansongslist/>
            </Route>

            <Route path="/LathaMangeshkarsongslist/:id" exact>
              <LathaMangeshkarsongslist/>
            </Route>

            <Route path="/Nehakakkarsongslist/:id" exact>
              <Nehakakkarsongslist/>
            </Route>

            <Route path="/shreyasongslist/:id" exact>
              <Shreyasongslist/>
            </Route>
            <Route path="/Spbsongslist/:id" exact>
              <Spbsongslist/>
            </Route>

            <Route exact path="/Arijith">
              <Arijith />
            </Route>
            <Route exact path="/Shreyagoshal">
              <Shreyagoshal />
            </Route>
            <Route exact path="/Spb">
              <Spb/>
            </Route>
            <Route exact path="/Library">
              <Library />
            </Route>
            <Route exact path="/Favourites">
              <Favourites />
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
              <SignUp />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </AuthContextProvider>
  );
};

export default App;
