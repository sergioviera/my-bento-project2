import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyCPnTCBBM1dzDtGLJATZEQySjecfxkmgO8",
  authDomain: "viera-pwa-bento.firebaseapp.com",
  databaseURL: "https://viera-pwa-bento-default-rtdb.firebaseio.com",
  projectId: "viera-pwa-bento",
  storageBucket: "viera-pwa-bento.appspot.com",
  messagingSenderId: "483269888439",
  appId: "1:483269888439:web:b9070991c9a018df008032",
  measurementId: "G-TGYC07E5TJ"
}

firebase.initializeApp(config)
