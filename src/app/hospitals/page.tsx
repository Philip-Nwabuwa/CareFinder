"use client";

import React, { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { hospitalsCollectionRef } from "../lib/firebase.collection";
import ThemeToggle from "../components/ThemeToggle";

const Realtime = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(hospitalsCollectionRef, (snapshot) => {
      setHospitals(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          address: doc.data().address,
          city: doc.data().city,
          state: doc.data().state,
          phone: doc.data().phone,
          website: doc.data().website,
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <ThemeToggle />
      <ul>
        {hospitals.map((hospital) => (
          <li className="m-3" key={hospital.id}>
            <h2>{hospital.name}</h2>
            <p>{hospital.address}</p>
            <p>{hospital.phone}</p>
            <p>{hospital.city}</p>
            <p>{hospital.state}</p>
            <p>{hospital.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Realtime;
