import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDwMy4Gr_hxeJRbKG_RJ5PaAebEIJOTKpk",
  authDomain: "projeto-oiapoque-1feb8.firebaseapp.com",
  projectId: "projeto-oiapoque-1feb8",
  storageBucket: "projeto-oiapoque-1feb8.firebasestorage.app",
  messagingSenderId: "1046736361936",
  appId: "1:1046736361936:web:0235bdcb08171e676681d5",
  measurementId: "G-EHBLJ65ZV3"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app)

