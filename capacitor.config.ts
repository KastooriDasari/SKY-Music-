import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.skymusicptg.app',
  appName: 'skymusic',
  webDir: 'build',
  bundledWebRuntime: false,
  // server:{

  //   url:"http://172.17.1.111:8100",

  //   cleartext: true

  //   },
  plugins: {
    SplashScreen: {
        launchShowDuration : 1000
    },
    GoogleAuth: {
      scopes: ["profile","email"],
      serverClientId: "969316985179-52g0d37kfl6n6c98di65m603o4j2hchq.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },

  }
};

export default config;
