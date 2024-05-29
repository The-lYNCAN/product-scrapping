import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO7CVdYdrjRG_NqICaPlk3PVIWlcPBqWw",
  authDomain: "takeit-today.firebaseapp.com",
  databaseURL: "https://takeit-today-default-rtdb.firebaseio.com",
  projectId: "takeit-today",
  storageBucket: "takeit-today.appspot.com",
  messagingSenderId: "435400540716",
  appId: "1:435400540716:web:672cc9380cdb5d37854789",
  measurementId: "G-5M42XFC7G5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db