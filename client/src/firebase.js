// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernstack-home.firebaseapp.com",
  projectId: "mernstack-home",
  storageBucket: "mernstack-home.appspot.com",
  messagingSenderId: "2899899714",
  appId: "1:2899899714:web:c66b840d39195fd4bb44db"
};

// Initialize Fireba se
export const app = initializeApp(firebaseConfig);