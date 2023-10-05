// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYqitLzys38ISI1S0YJ-S6DlX8oYtOMLg",
  authDomain: "news-paper-ce541.firebaseapp.com",
  projectId: "news-paper-ce541",
  storageBucket: "news-paper-ce541.appspot.com",
  messagingSenderId: "431330461958",
  appId: "1:431330461958:web:504fcdbf11e2b22540b687"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;