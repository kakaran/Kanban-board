import mongoose from "mongoose";

const boardColumnSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const boardColumn = mongoose.model("column", boardColumnSchema);

export default boardColumn;
