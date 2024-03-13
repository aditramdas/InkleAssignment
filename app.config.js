export default{
  "expo": {
    "name": "InkleAssignment",
    "owner": "aditramdas",
    "slug": "InkleAssignment",
    "scheme": "com.adith.InkleAssignment",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "plugins":[
      "@react-native-google-signin/google-signin"
    ],
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.adith.InkleAssignment",
      "googleServicesFile": process.env.GOOGLE_SERVICES_INFOPLIST
    },
    "android": {
      "usesCleartextTraffic": true,
      "package": "com.adith.InkleAssignment",
      "googleServicesFile": process.env.GOOGLE_SERVICES_JSON,
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "50b617e7-241a-4827-beda-ba03d87a462c"
      }
    }
  }
}
