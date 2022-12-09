import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANQLrltb5F7gy0QEiQyw3cHf6KAQQ2aJQ",
    authDomain: "shortgun-assessment.firebaseapp.com",
    projectId: "shortgun-assessment",
    storageBucket: "shortgun-assessment.appspot.com",
    messagingSenderId: "188186032397",
    appId: "1:188186032397:web:bf8f92ee46ecd319d71844"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;