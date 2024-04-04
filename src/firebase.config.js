import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBpgyxhK6ysHS2rliB9TMH9tn7Qv2puKJ0",
  authDomain: "myfood-cebb6.firebaseapp.com",
  databaseURL: "https://myfood-cebb6-default-rtdb.firebaseio.com",
  projectId: "myfood-cebb6",
  storageBucket: "myfood-cebb6.appspot.com",
  messagingSenderId: "129055445107",
  appId: "1:129055445107:web:d3bc445908f7000e275a06"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
