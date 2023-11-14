import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD9wTUwy0qNr-j5jkJV4dEphVUIbVBGYiM",
    authDomain: "berlinipastas-db.firebaseapp.com",
    projectId: "berlinipastas-db",
    storageBucket: "berlinipastas-db.appspot.com",
    messagingSenderId: "587616245643",
    appId: "1:587616245643:web:d32ea910d27ea4d5f4418e"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);