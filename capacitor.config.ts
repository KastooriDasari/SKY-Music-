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
    }

  }
};

export default config;
