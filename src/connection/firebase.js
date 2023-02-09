import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// ¿? 
//const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG)

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_BUCKET,
    messagingSenderId: import.meta.env.VITE_SENDERID,
    appId: import.meta.env.VITE_APPID,
    measurementId: import.meta.env.VITE_MEASUREMENTID}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebase = getFirestore(app);
