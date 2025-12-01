import express from "express"
import columnRoutes from "./boardColumn.routes.js"
import jobRoutes from "./jobCard.routes.js"
const router = express.Router()

router.use("/column", columnRoutes);
router.use("/job", jobRoutes);

export default router;

