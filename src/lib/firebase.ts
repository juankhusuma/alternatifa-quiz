// Import the functions you need from the SDKs you need
import {
  initializeApp,
  getApp,
  FirebaseOptions,
  FirebaseApp,
} from "firebase/app";
import {
  initializeAuth,
  browserPopupRedirectResolver,
  browserLocalPersistence,
} from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config: FirebaseOptions = {
  apiKey: "AIzaSyDZB4uQeGKGw3yknbCY-DcTBJb3h_55xNc",
  authDomain: "jdk-quiz-app.firebaseapp.com",
  projectId: "jdk-quiz-app",
  storageBucket: "jdk-quiz-app.appspot.com",
  messagingSenderId: "310422752996",
  appId: "1:310422752996:web:7f974d2c43bf633ac366f1",
  measurementId: "G-J2HTJNSYJV",
};

// Initialize Firebase
function createFirebaseApp(config: FirebaseOptions): FirebaseApp {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

export const app = createFirebaseApp(config);
export const auth = initializeAuth(app, {
  persistence: browserLocalPersistence,
  popupRedirectResolver: browserPopupRedirectResolver,
});
export const firestore = initializeFirestore(app, {});
