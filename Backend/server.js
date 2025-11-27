import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import config from "./config/config.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(morgan("dev"));



app.use(errorHandler);

connectDB()
  .then(async () => {
    app.listen(config.app.port || 3000, () => {
      console.log(`⚙️ Server is running at port : ${config.app.port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
