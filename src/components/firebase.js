import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmnljGUJtxdcUJn6kJcsCvOH-ZrM5qnDY",
  authDomain: "store-paper.firebaseapp.com",
  projectId: "store-paper",
  storageBucket: "store-paper.appspot.com",
  messagingSenderId: "811649422631",
  appId: "1:811649422631:web:0d4a785b9659e1823dc502",
  measurementId: "G-GW099G2NZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
