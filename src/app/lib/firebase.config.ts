import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.FIREBASE_APP_ID;
const secretKey = process.env.FIREBASE_SECRET_KEY;


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: secretKey,
  authDomain: "carefinder-db.firebaseapp.com",
  projectId: "carefinder-db",
  storageBucket: "carefinder-db.appspot.com",
  messagingSenderId: messagingSenderId,
  appId: appId,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const auth = getAuth();

// sign up with email and password function
// export const signUpWithEmailAndPassword = (email: string, password: string) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

// sign in with email and password function
// export const loginWithEmailAndPassword = (email: string, password: string) => {
//   return signInWithEmailAndPassword(auth, email, password);
// };

// sign in with google function
// export const signInWithGoogle = () => {
//   const provider = new GoogleAuthProvider();
//   return signInWithPopup(auth, provider);
// };

// create user function
// export const createUser = async (email: string, password: string) => {
//   try {
//     const userCredential = await signUpWithEmailAndPassword(email, password);
//     const user = userCredential.user;
//     console.log("User created: ", user);
//     return user;
//   } catch (error) {
//     console.error(error);
//   }
// };