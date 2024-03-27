import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: "modul2-eb41d",
  storageBucket: "modul2-eb41d.appspot.com",
  messagingSenderId: "1048459196478",
  appId: "1:1048459196478:web:6c1bb9ce2cb3eca722396f",
  measurementId: "G-BC8XYGF988"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
