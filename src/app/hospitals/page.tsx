"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHospitals } from "../GlobalRedux/slice/hospitalSlice";
import { RootState } from "../GlobalRedux/store";
import ExportCSV from "../components/ExportData/ExportCSV";

const Hospitals = () => {
  const dispatch = useDispatch();
  const hospitals: Hospital[] = useSelector(
    (state: RootState) => state.hospitals.hospitals
  );
  const status = useSelector((state: RootState) => state.hospitals.status);
  const error = useSelector((state: RootState) => state.hospitals.error);

  useEffect(() => {
    dispatch(fetchHospitals() as any);
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading hospitals...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ExportCSV />
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id}>
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

export default Hospitals;
