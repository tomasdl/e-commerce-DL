import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "e-commerce-dl.firebaseapp.com",
    projectId: "e-commerce-dl",
    storageBucket: "e-commerce-dl.appspot.com",
    messagingSenderId: "251992560931",
    appId: "1:251992560931:web:70af3821f9e079da492896"
});
export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}
//export other firebase integrations