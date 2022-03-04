// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzhwjVpciShAa7j-RURWTyjP3OpuqIByQ",
  authDomain: "disney-clone-e7083.firebaseapp.com",
  projectId: "disney-clone-e7083",
  storageBucket: "disney-clone-e7083.appspot.com",
  messagingSenderId: "294331386056",
  appId: "1:294331386056:web:63c1c0fc68d91a25383dfd",
  measurementId: "G-DDBGWW772V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
//, provider, storage

export { auth, storage, provider };
export default db;