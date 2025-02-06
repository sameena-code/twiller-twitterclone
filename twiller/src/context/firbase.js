
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4QENoyn6__Y-qPD8vqIUE3TlMGbKPWN4",
  authDomain: "twiller-408b6.firebaseapp.com",
  projectId: "twiller-408b6",
  storageBucket: "twiller-408b6.firebasestorage.app",
  messagingSenderId: "12784604224",
  appId: "1:12784604224:web:1ced138bfc138261efbba5",
  measurementId: "G-2S7QRGSQQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
export default app;