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
  reducers: {
    moveCard(state, action) {
      const { cardId, sourceCol, destCol, sourceIndex, destIndex } =
        action.payload;

      const stateDataSet = state.data;

      if (!stateDataSet) return;

      const sourceColumn = stateDataSet.columns.find(
        (column) => column._id === sourceCol
      );

      const destColumn = state.data.columns.find(
        (column) => column._id === destCol
      );

      if (!sourceColumn || !destColumn) return;

      const card = sourceColumn.cards.find((columns) => columns._id === cardId);
      if (!card) return;

      // REMOVE from source column
      sourceColumn.cards.splice(sourceIndex, 1);

      // INSERT into destination column at specific index
      destColumn.cards.splice(destIndex, 0, card);
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { moveCard } = boardSlice.actions;
export default boardSlice.reducer;
