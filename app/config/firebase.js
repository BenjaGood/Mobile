import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD9bMLpvtqdAcWnCwnwCUKYJNja1IN4XRo",
  authDomain: "foodbank-93aa5.firebaseapp.com",
  projectId: "foodbank-93aa5",
  storageBucket: "foodbank-93aa5.appspot.com",
  messagingSenderId: "569982817073",
  appId: "1:569982817073:web:0b4a03b71f1cd94198d610",
  measurementId: "G-S42SG7DH9G"
};

const app = initializeApp(firebaseConfig);
export default app;