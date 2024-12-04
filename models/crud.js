import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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

let namebox = document.getElementById('productName');
let precobox = document.getElementById('productPrice');
let descriçãobox = document.getElementById('productDescription');
let categoriabox = document.getElementById('productCategory');

let btnAdd = document.getElementById('add-button');
let btnRemove = document.getElementById('remove-button');
let btnUpdate = document.getElementById('update-button');

btnAdd.addEventListener('click', addDocument);
btnUpdate.addEventListener('click', updateDocument);
btnRemove.addEventListener('click', removeDocument);

async function addDocument() {
  const ref = collection(db, "Produtos");
  const docRef = await addDoc(ref, {
    nome: namebox.value,
    preco: precobox.value,
    descricao: descriçãobox.value,
    categoria: categoriabox.value
  });
  console.log("Document added with ID: ", docRef.id);
}

async function updateDocument() {
  const ref = doc(db, "Produtos", "productId");
  await updateDoc(ref, {
    nome: namebox.value,
    preco: precobox.value,
    descricao: descriçãobox.value,
    categoria: categoriabox.value
  });
  console.log("Document updated");
}

async function removeDocument() {
  const ref = doc(db, "Produtos", "productId");
  await deleteDoc(ref);
  console.log("Document removed");
}
