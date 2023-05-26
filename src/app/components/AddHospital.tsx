"use client";

// import dependencies
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { addHospitalToFirestore } from "../lib/firestore";

function AddHospital() {
  // create state for hospital fields and markdown input
  const [hospitalName, setHospitalName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [markdownInput, setMarkdownInput] = useState("");

  const handleMarkdownInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMarkdownInput(event.target.value);
  };

  const handleAddHospital = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const hospitalData = {
      hospitalName: hospitalName.trim(),
      address: address.trim(),
      phoneNumber: phoneNumber.trim(),
      email: email.trim(),
      markdownInput: markdownInput.trim(),
    };

    try {
      await addHospitalToFirestore(hospitalData);
      setHospitalName("");
      setAddress("");
      setPhoneNumber("");
      setEmail("");
      setMarkdownInput("");
    } catch (error) {
      console.error("Error adding hospital data: ", error);
    }
  };

  return (
    <div>
      <h2>Add New Hospital</h2>
      <form onSubmit={handleAddHospital}>
        <label>
          Hospital Name:
          <input
            type="text"
            value={hospitalName}
            onChange={(event) => setHospitalName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Markdown:
          <textarea
            value={markdownInput}
            onChange={handleMarkdownInputChange}
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
      <div>
        <ReactMarkdown>{markdownInput}</ReactMarkdown>
      </div>
    </div>
  );
}

export default AddHospital;
