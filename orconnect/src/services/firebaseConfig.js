import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBOhY4SWx5XHP8GcsrvZq8a6q8qE1cxeiw",
  authDomain: "orconnect-cc867.firebaseapp.com",
  projectId: "orconnect-cc867",
  storageBucket: "orconnect-cc867.firebasestorage.app",
  messagingSenderId: "871107265201",
  appId: "1:871107265201:web:3de358d4c06585270f1890",
  measurementId: "G-V4MFQK1R55"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);

// Export des services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
