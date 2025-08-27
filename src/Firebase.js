// src/firebaseConfig.js (or .ts)
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

import {getFirestore} from 'firebase/firestore';

// You might import other services here later, like getFirestore, getStorage, etc.

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNvFciHneMQRiLJZ-pQ8mnFC85VFfaJzQ",
    authDomain: "fitforge-8e1eb.firebaseapp.com",
    projectId: "fitforge-8e1eb",
    storageBucket: "fitforge-8e1eb.firebasestorage.app",
    messagingSenderId: "938139659610",
    appId: "1:938139659610:web:9968761bdb35dbd58ed763",
    measurementId: "G-YGL38W8TMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const db = getFirestore(app);

export {auth, db}; // Export the auth instance so you can use it throughout your app
export default app;