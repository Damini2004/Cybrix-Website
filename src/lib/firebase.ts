// src/lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAD7HC9rZerF1dSpZzeiNylfCVJFMTlV08",
  authDomain: "pure-research-insights.firebaseapp.com",
  projectId: "pure-research-insights",
  storageBucket: "pure-research-insights.firebasestorage.app",
  messagingSenderId: "633801776834",
  appId: "1:633801776834:web:7c944b51a6daded1b9a55b",
  measurementId: "G-TJR558GW98"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
