"use client";

import { useState } from "react";
import { addHospitalToFirestore } from "../lib/firestore";

const AddHospitalForm = () => {
  const [hospitalData, setHospitalData] = useState({
    hospitalName: "",
    address: "",
    phoneNumber: "",
    email: "",
    website: "",
    state: "",
    city: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setHospitalData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addHospitalToFirestore(hospitalData);
      setHospitalData({
        hospitalName: "",
        address: "",
        phoneNumber: "",
        email: "",
        website: "",
        state: "",
        city: "",
      });
      setErrorMessage("");
      setSuccessMessage("Hospital added successfully!");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(String(error));
      }
    }
  };

  return (
    <div className="mt-24">
      <h2>Add a Hospital</h2>

      <form onSubmit={handleSubmit} className="text-center">
        <div>
          <label htmlFor="hospitalName">Hospital Name:</label>
          <input
            type="text"
            id="hospitalName"
            name="hospitalName"
            value={hospitalData.hospitalName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="address">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            id="address"
            onChange={handleInputChange}
            value={hospitalData.address}
            name="address"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={hospitalData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={hospitalData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="website">Website:</label>
          <input
            type="url"
            id="website"
            name="website"
            value={hospitalData.website}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={hospitalData.state}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={hospitalData.city}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Add Hospital</button>
        {successMessage && <div>{successMessage}</div>}
        {errorMessage && <div>ERROR: {errorMessage}</div>}
      </form>
    </div>
  );
};

export default AddHospitalForm;
