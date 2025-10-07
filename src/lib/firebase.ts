// src/lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3SqoWiA-DwTs20Ja2zIHat8XduhYDyyU",
  authDomain: "cybrix-2fac3.firebaseapp.com",
  projectId: "cybrix-2fac3",
  storageBucket: "cybrix-2fac3.appspot.com",
  messagingSenderId: "802382312991",
  appId: "1:802382312991:web:cbe1e2a141d95e9f94072a",
  measurementId: "G-Y46W6VLHZ3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
