import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    columns: [
      {
        _id: "0",
        title: "Saved",
        cards: [
          { _id: "1", title: "Task A" },
          { _id: "2", title: "Task B" },
        ],
      },
      {
        _id: "1",
        title: "Applied",
        cards: [{ _id: "3", title: "Task C" }],
      },
      {
        _id: "2",
        title: "Interviewing",
        cards: [{ _id: "4", title: "Task E" }],
      },
      {
        _id: "3",
        title: "Offer",
        cards: [{ _id: "5", title: "Task F" }],
      },
      {
        _id: "4",
        title: "Rejected",
        cards: [{ _id: "6", title: "Task G" }],
      },
    ],
  },
  loading: false,
  error: null,
  dataFetched: false,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export default boardSlice.reducer;
