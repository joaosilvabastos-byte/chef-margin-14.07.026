import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
<<<<<<< HEAD
  appId: 'com.joaobastos.chefmargin',
=======
  appId: 'co.chefmargin.app',
>>>>>>> 1ffe12e49144d1e3561fe845fc60bd4dd968e06b
  appName: 'ChefMargin',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#1a0b2eff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true
    },
    StatusBar: {
      overlaysWebView: false
    }
  }
};

export default config;
