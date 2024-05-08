import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKXsafG9rYI8n3WS2ha_sxoKz2dMX21-M",
  authDomain: "login-9a5e5.firebaseapp.com",
  projectId: "login-9a5e5",
  storageBucket: "login-9a5e5.appspot.com",
  messagingSenderId: "335325405277",
  appId: "1:335325405277:web:9bc0259fbfacf1bbddedb4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const db = getFirestore(app);

export const auth = getAuth(app);

export {db as firestore}