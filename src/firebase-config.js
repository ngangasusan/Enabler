// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCZJf1Fa14WvWNi0Iu8145bETB385skC8",
  authDomain: "enabler-299ad.firebaseapp.com",
  projectId: "enabler-299ad",
  storageBucket: "enabler-299ad.appspot.com",
  messagingSenderId: "1013741803039",
  appId: "1:1013741803039:web:bfb22f662ab71ebee6a72a",
  measurementId: "G-HW9W6XQC5D"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;



