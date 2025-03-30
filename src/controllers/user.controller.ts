import { Request, Response } from "express";
import { db } from "../config/db";
import { getGroceries } from "./admin.controller"; // Ensure correct import

// Get available groceries
export const viewGroceries = (req: Request, res: Response): void => {
    getGroceries(req, res);
};

// Book groceries (create an order)
export const bookGroceries = (req: Request, res: Response): void => {
    const { userId, items } = req.body;
    
    if (!items || !items.length) {
        res.status(400).send({ message: "No items selected" });
        return;
    }

    const sql = "INSERT INTO orders (userId, items) VALUES (?, ?)";
    db.query(sql, [userId, JSON.stringify(items)], (err) => {
        if (err) {
            res.status(500).send({ message: err.message });
            return;
        }
        res.status(201).send({ message: "Order placed successfully" });
    });
};
