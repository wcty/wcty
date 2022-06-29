export default {
    "name": "We.City",
    "slug": "wcty",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/Wecity_icon_white_512.png",
    "locales": {
      "en": "./locales/en.json",
      "uk": "./locales/uk.json"
    },
    "splash": {
      "image": "./assets/Wecity_icon_white_512.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "city.weee",
      "buildNumber": "1.0.4",
      "infoPlist": {
        "CFBundleLocalizations" : ["en","uk"],
        "CFBundleDevelopmentRegion" : "en",
        "CFBundleAllowMixedLocalizations": true,
        "NSLocationAlwaysAndWhenInUseUsageDescription": "This app uses the location data to show the most relevant initiatives and organizations in your vicinity.",
        "NSLocationAlwaysUsageDescription": "This app uses the location data to show the most relevant initiatives and organizations in your vicinity.",
        "NSLocationWhenInUseUsageDescription": "This app uses the location data to show the most relevant initiatives and organizations in your vicinity."
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/Wecity_icon_white_512.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "city.weee",
      "versionCode": 2,
      "permissions": [
        "ACCESS_FINE_LOCATION",
        "ACCESS_COARSE_LOCATION"
      ]
    },
    "web": {
      "favicon": "./assets/Wecity_icon_white_512.png"
    },
    "extra": {
      dev: process.env.ENV === 'development',
    }
}
