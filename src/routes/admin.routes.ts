import express from "express";
import { addGrocery, getGroceries, removeGrocery, updateGrocery } from "../controllers/admin.controller";

const router = express.Router();
router.post("/grocery", addGrocery);
router.get("/groceries", getGroceries);
router.delete("/grocery/:id", removeGrocery);
router.put("/grocery/:id", updateGrocery);
export default router;
