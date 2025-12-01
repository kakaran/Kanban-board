import express from "express";
import { boardColumnCreateController, boardColumnGetController } from "../controller/boardColumn.controller.js";

const router = express.Router()

router.post("/document", boardColumnCreateController);
router.get("/document", boardColumnGetController);

export default router;