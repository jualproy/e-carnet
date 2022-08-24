// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getFirestore, 
        doc,
        getDoc,
        setDoc
     } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyDa7s2uAZDuJbYcQKFBEQDib7vhxOyYlz0",
    authDomain: "e-carnet-53d4b.firebaseapp.com",
    projectId: "e-carnet-53d4b",
    storageBucket: "e-carnet-53d4b.appspot.com",
    messagingSenderId: "249877141028",
    appId: "1:249877141028:web:eefd32d643e06c24a6aab1",
    measurementId: "G-SVYB8S5S14"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const regaprendiz=(tdoc,numdoc,nom,apel,rh,ficha,titulada,jornada,sede,imagen)=>{
    setDoc(doc(db,'listregistros',numdoc),{
        tdoc,
        numdoc,
        nom,
        apel,
        rh,
        ficha,
        titulada,
        jornada,
        sede,
        imagen
    })
}

export const search_aprendiz = numdoc => getDoc(doc(db,'listregistros',numdoc));

