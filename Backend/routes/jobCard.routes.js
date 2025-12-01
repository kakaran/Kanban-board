import express from "express";
import { jobCardCreateController, jobCardDeleteController, jobCardGetController, jobCardUpdateController } from "../controller/jobCard.controller.js";

const router = express.Router();

router.post("/documnet", jobCardCreateController );
router.get("/documnet", jobCardGetController);
router.put("/documnet", jobCardUpdateController);
router.delete("/documnet", jobCardDeleteController);


export default router
