"use client";
import { fetchHospitalsFromFirestore } from "@/app/lib/firestore";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";

export const fetchHospitals = createAsyncThunk<DocumentData[]>(
  "hospitals/fetchHospitals",
  async () => {
    const hospitals = await fetchHospitalsFromFirestore();
    return hospitals;
  }
);

const hospitalsSlice = createSlice({
  name: "hospitals",
  initialState: {
    hospitals: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHospitals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHospitals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.hospitals = action.payload as any;
      })
      .addCase(fetchHospitals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as any;
      });
  },
});

export default hospitalsSlice.reducer;
