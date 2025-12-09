// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWVu05Bpgj9l5Y4mqrdwOhMZy4241sUHE",
  authDomain: "ticket-booking-platform-ee559.firebaseapp.com",
  projectId: "ticket-booking-platform-ee559",
  storageBucket: "ticket-booking-platform-ee559.firebasestorage.app",
  messagingSenderId: "218084959416",
  appId: "1:218084959416:web:af8898f37670c10ba2004d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);