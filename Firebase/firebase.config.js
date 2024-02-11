// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWXuZcrdVIIpc2lxtghkbL_f0Ks3EVrDo",
  authDomain: "simple-technext.firebaseapp.com",
  projectId: "simple-technext",
  storageBucket: "simple-technext.appspot.com",
  messagingSenderId: "152320424034",
  appId: "1:152320424034:web:8b0bf45c61cb746cc4393b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;