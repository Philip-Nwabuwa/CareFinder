"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../GlobalRedux/store";
import {
  deleteHospital,
  fetchHospitals,
} from "@/app/GlobalRedux/slice/hospitalSlice";
import Link from "next/link";
// import EditHospital from "../edit/page";

const Page = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const dispatch = useDispatch();

  const hospitals: Hospital[] = useSelector(
    (state: RootState) => state.hospitals.hospitals
  );

  useEffect(() => {
    dispatch(fetchHospitals() as any);
  }, [dispatch]);

  const hospital = hospitals.find((hospital) => hospital.id === params.id);

  if (!hospital) {
    return (
      <div className="mt-32 h-screen text-center mx-6">Hospital not found</div>
    );
  }

  const handleDelete = () => {
    dispatch(deleteHospital(hospital.id) as any);
  };

  return (
    <>
      <div className="mt-32 h-screen text-center mx-6">
        <h1>{hospital.name}</h1>
        <p>
          {hospital.address}, {hospital.city}, {hospital.state}
        </p>
        <p>{hospital.phone}</p>
        <p>{hospital.website}</p>
        <p>{hospital.description}</p>
        <>
          <label htmlFor="my_modal_6" className="btn btn-error">
            Delete
          </label>
        </>
      </div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Dear User</h3>
          <p className="py-4">Are you sure about deleting this data</p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Return
            </label>
            <Link href="/hospitals">
              <label
                onClick={handleDelete}
                htmlFor="my_modal_6"
                className="btn btn-error"
              >
                Delete
              </label>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
