import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3E_vDVDR4PEb-osmkO4CX_Ml8lzwOw-8",
    authDomain: "facebook-galaxy9.firebaseapp.com",
    databaseURL: "https://facebook-galaxy9.firebaseio.com",
    projectId: "facebook-galaxy9",
    storageBucket: "facebook-galaxy9.appspot.com",
    messagingSenderId: "688565635171",
    appId: "1:688565635171:web:628172e388eba2469c1056",
    measurementId: "G-K1EQCCNEDD"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
export {db, auth, storage}