import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwUoPwiU22RgXwD1Osf9wwZE35MIpix9E",
  authDomain: "userdetails-f4a57.firebaseapp.com",
  projectId: "userdetails-f4a57",
  storageBucket: "userdetails-f4a57.appspot.com",
  messagingSenderId: "149471484995",
  appId: "1:149471484995:web:3f07675b62d66971a948f6",
  measurementId: "G-WLC3WCYKDV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);