// firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase конфигурация
const firebaseConfig = {
  apiKey: "AIzaSyDkUuL25Ipo0Pg_o6hjTey1zAP40ENyxns",
  authDomain: "nasetrida-3adeb.firebaseapp.com",
  projectId: "nasetrida-3adeb",
  storageBucket: "nasetrida-3adeb.firebasestorage.app",
  messagingSenderId: "881472052797",
  appId: "1:881472052797:web:128ebf94df4af382285454",
  measurementId: "G-0Q9ZJFRRQQ"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Инициализация аутентификации и Firestore
const auth = getAuth();
const db = getFirestore(app);
