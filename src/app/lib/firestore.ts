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
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ43SwjxDhXx5jYuPVei4RmsuPoWs1wSo",
  authDomain: "carefinder-db.firebaseapp.com",
  projectId: "carefinder-db",
  storageBucket: "carefinder-db.appspot.com",
  messagingSenderId: "1065353021456",
  appId: "1:1065353021456:web:87470c0842f0f4f9d5a295",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth();

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
export const addHospitalToFirestore = async (
  hospitalData: Record<string, string>
): Promise<void> => {
  try {
    const hospitalsCollection = collection(db, "hospital");

    await addDoc(hospitalsCollection, {
      name: hospitalData.hospitalName,
      address: hospitalData.address,
      phoneNumber: hospitalData.phoneNumber,
      email: hospitalData.email,
      createdAt: new Date(),
      city: hospitalData.city,
      state: hospitalData.state,
      website: hospitalData.website,
    });
  } catch (error) {
    throw new Error("Failed to add hospital to Firestore.");
  }
};

export default app;
