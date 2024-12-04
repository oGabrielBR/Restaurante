firebase.initializeApp(firebaseConfig);

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGYz8yawtO2y_o4YlMLfpnVZrSOp0ybpM",
  authDomain: "restaurante-saporis.firebaseapp.com",
  projectId: "restaurante-saporis",
  storageBucket: "restaurante-saporis.firebasestorage.app",
  messagingSenderId: "485471938260",
  appId: "1:485471938260:web:e6b7a88dad3c91f2bafd41",
  measurementId: "G-WPVPDK2WSX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

import { db, auth } from "../models/firebase.js";

db.collection("produtos").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
});

auth.setPersistence(firebase.auth.Persistence.LOCAL);

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("Usuário logado:", user);
  } else {
    console.log("Usuário não logado");
  }
});

db.settings({
  timestampsInSnapshots: true
});

export { db, auth };
