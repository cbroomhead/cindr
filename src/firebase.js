// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDs3JxjEO6h_YSmMXyxJ1BCCwFEf12NSC8",
  authDomain: "test-tutorial-24aa0.firebaseapp.com",
  projectId: "test-tutorial-24aa0",
  storageBucket: "test-tutorial-24aa0.appspot.com",
  messagingSenderId: "975367323450",
  appId: "1:975367323450:web:4458bca190e54c7524da03",
  measurementId: "G-9W9MVTM0Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);