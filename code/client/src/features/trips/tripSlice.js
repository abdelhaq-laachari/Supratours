import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tripService from "./tripService";

// trip from localStorage

// const trips = JSON.parse(localStorage.getItem("trips"));

const initialState = {
  trips: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Search for trips
export const searchTrip = createAsyncThunk(
  "trip/searchTrips",
  async (tripData, thunkAPI) => {
    try {
      return await tripService.searchTrips(tripData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchTrip.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchTrip.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trips = action.payload;
      })
      .addCase(searchTrip.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = tripSlice.actions;
export default tripSlice.reducer;