"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHospitals } from "../GlobalRedux/slice/hospitalSlice";
import { AppDispatch, RootState } from "../GlobalRedux/store";
import ExportCSV from "../components/ExportData/ExportCSV";
import Link from "next/link";
import LoadingAnimation from "../components/loadingAnimation";
import FindHospitalsNearMe from "../components/GetLocation";

const Hospitals = () => {
  const dispatch = useDispatch<AppDispatch>();
  const hospitals: Hospital[] = useSelector(
    (state: RootState) => state.hospitals.hospitals
  );
  const status = useSelector((state: RootState) => state.hospitals.status);
  const error = useSelector((state: RootState) => state.hospitals.error);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  // Add state for search term
  const [searchTerm, setSearchTerm] = useState("");

  // const [showCommandPalette, setShowCommandPalette] = useState(false);

  const handleCityFetched = (city: string) => {
    setSearchTerm(city);
  };

  useEffect(() => {
    dispatch(fetchHospitals() as any);
  }, [dispatch]);

  if (status === "failed") {
    return (
      <div className="h-screen flex justify-center items-center">
        Error: {error}
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="w-16 h-16">
          <LoadingAnimation />
        </div>
      </div>
    );
  }

  // Calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter the hospitals array to only include items that match the search term
  const filteredHospitals = hospitals.filter(
    (hospital) =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Slice the hospitals array to only include items for the current page
  const currentItems = filteredHospitals.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  // Add a function to handle changing pages
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="mt-[7.5rem] text-center md:mx-6 mx-3">
      <h1 className="uppercase text-2xl font-extrabold mb-5">
        List of Hospitals
      </h1>
      <div className="flex flex-col md:flex-row items-start justify-between">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Search by city, state or name"
          onChange={(e) => {
            setSearchTerm(e.target.value);
            // setShowCommandPalette(e.target.value.length > 0);
          }}
          // onBlur={() => setShowCommandPalette(false)}
        />
        {/* {showCommandPalette && (
          <ul className="absolute bg-white top-52 z-10 rounded-md shadow-md mt-4 w-full max-w-md">
            {filteredHospitals.slice(0, 5).map((hospital) => (
              <li
                key={hospital.id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setSearchTerm(hospital.name)}
              >
                {hospital.name}
              </li>
            ))}
          </ul>
        )} */}
        <FindHospitalsNearMe onCityFetched={handleCityFetched} />
      </div>

      <ul className="text-left">
        {currentItems.map((hospital) => (
          <li
            key={hospital.id}
            className="p-3  border border-solid border-black rounded-md my-2"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-bold">{hospital.name}</h2>

              <Link className="ml-1" href={`/hospitals/${hospital.id}`}>
                <button className="btn">Details</button>
              </Link>
            </div>
            <p className="md:w-[60%] w-[70%] md:text-base text-xs">
              {hospital.address}, {hospital.city}, {hospital.state}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex md:flex-row flex-col justify-between items-center my-4">
        <ExportCSV />
        <div className="flex items-center md:mt-0 mt-3">
          <button
            className="mx-2 btn"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>

          <p className="mx-2">
            Current Page: {currentPage} /{" "}
            {Math.ceil(hospitals.length / itemsPerPage)}
          </p>
          <button
            className="mx-2 btn"
            disabled={currentItems.length < itemsPerPage}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>

          <p className="mx-2 hidden md:flex ">
            Total Hospitals: {hospitals.length}
          </p>

          <p className="mx-2 hidden md:flex">
            Total Pages: {Math.ceil(hospitals.length / itemsPerPage)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
