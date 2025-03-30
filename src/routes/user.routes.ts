import express from "express";
import { viewGroceries, bookGroceries } from "../controllers/user.controller";

const router = express.Router();

// Ensure the imported functions are correctly referenced
router.get("/groceries", viewGroceries);
router.post("/order", bookGroceries);

export default router;
