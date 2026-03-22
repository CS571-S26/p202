// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt8k2TvbRkcqmsaglUl4Lkz_luN9VZDDc",
  authDomain: "ice-webdev5.firebaseapp.com",
  projectId: "ice-webdev5",
  storageBucket: "ice-webdev5.firebasestorage.app",
  messagingSenderId: "107415047149",
  appId: "1:107415047149:web:bb38f115f66b576fdab5e4",
  measurementId: "G-RRPKTVDEBJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);