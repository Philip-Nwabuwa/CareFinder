"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateHospital } from "@/app/GlobalRedux/slice/hospitalSlice";
import { RootState } from "@/app/GlobalRedux/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

const EditHospital = ({ hospital }: { hospital: Hospital }) => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const [name, setName] = useState(hospital.name);
  const [address, setAddress] = useState(hospital.address);
  const [city, setCity] = useState(hospital.city);
  const [state, setState] = useState(hospital.state);
  const [phone, setPhone] = useState(hospital.phone);
  const [website, setWebsite] = useState(hospital.website);
  const [description, setDescription] = useState(hospital.description);

  const handleUpdate = () => {
    dispatch(
      updateHospital({
        hospitalId: hospital.id,
        updates: {
          name,
          address,
          city,
          state,
          phone,
          website,
          description,
        },
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="btn" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default EditHospital;
