import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Comentarios.
const firebaseConfig = {
  apiKey: "AIzaSyCVnTNmh0fO_7eGFfzej4qyGE-RnYQI9E8",
  authDomain: "proyectoreact-12647.firebaseapp.com",
  projectId: "proyectoreact-12647",
  storageBucket: "proyectoreact-12647.firebasestorage.app",
  messagingSenderId: "810261905444",
  appId: "1:810261905444:web:b225501a8c2367423d58b1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)