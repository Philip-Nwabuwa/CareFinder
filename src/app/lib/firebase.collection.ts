import { collection } from "firebase/firestore";
import { db } from "./firebase.config";

export const hospitalsCollectionRef = collection(db, "hospital");
