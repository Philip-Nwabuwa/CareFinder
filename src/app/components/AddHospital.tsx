"use client";

import React, { useState } from "react";
import { addHospitalToFirestore } from "../lib/firestore";

const AddHospitalPage = () => {
  const [hospitalData, setHospitalData] = useState({
    name: "",
    address: "",
    content: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setHospitalData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      await addHospitalToFirestore(hospitalData);
      setSuccessMessage("Hospital added successfully.");
      setHospitalData({ name: "", address: "", content: "" });
    } catch (error) {
      setErrorMessage("Failed to add hospital. Please try again.");
    }
  };

  return (
    <div>
      <h2>Add Hospital</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={hospitalData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={hospitalData.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Content (Markdown):
          <textarea
            name="content"
            value={hospitalData.content}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Hospital</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default AddHospitalPage;
