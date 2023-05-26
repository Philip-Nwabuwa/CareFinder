// firebase.config.ts
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";

const FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_MESSAGING_SENDER_ID;
const FIREBASE_SECRET_KEY = process.env.FIREBASE_SECRET_KEY;
const FIREBASE_APP_ID = process.env.FIREBASE_APP_ID;
// Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_SECRET_KEY,
  authDomain: "carefinder-db.firebaseapp.com",
  projectId: "carefinder-db",
  storageBucket: "carefinder-db.appspot.com",
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(firebaseApp);

// Fetch hospitals from Firestore
export const fetchHospitalsFromFirestore = async (): Promise<
  DocumentData[]
> => {
  try {
    const hospitalsCollection = collection(db, "hospital");
    const querySnapshot: QuerySnapshot = await getDocs(hospitalsCollection);

    let hospitalsData: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      hospitalsData.push(doc.data());
    });

    // Listen for real-time changes in the Firestore collection
    onSnapshot(hospitalsCollection, (snapshot) => {
      const updatedHospitalsData: DocumentData[] = [];
      snapshot.forEach((doc) => {
        updatedHospitalsData.push(doc.data());
      });
      hospitalsData = updatedHospitalsData;
    });

    return hospitalsData;
  } catch (error) {
    throw new Error("Failed to fetch hospitals from Firestore.");
  }
};

// Add a new hospital to Firestore
// Add a new hospital to Firestore
export const addHospitalToFirestore = async (
  hospitalData: Record<string, string>
): Promise<void> => {
  try {
    const hospitalsCollection = collection(db, "hospitals");

    await addDoc(hospitalsCollection, {
      name: hospitalData.hospitalName,
      address: hospitalData.address,
      phoneNumber: hospitalData.phoneNumber,
      email: hospitalData.email,
      markdown: hospitalData.markdownInput,
      createdAt: new Date(),
    });
  } catch (error) {
    throw new Error("Failed to add hospital to Firestore.");
  }
};

export default firebaseApp;
