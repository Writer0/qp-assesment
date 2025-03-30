import { Request, Response } from "express";
import { db } from "../config/db";

// Add a new grocery item
export const addGrocery = (req: Request, res: Response) => {
    const { name, price, stock } = req.body;
    const sql = "INSERT INTO groceries (name, price, stock) VALUES (?, ?, ?)";
    db.query(sql, [name, price, stock], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Grocery added successfully" });
    });
};

// View all grocery items
export const getGroceries = (_req: Request, res: Response) => {
    db.query("SELECT * FROM groceries", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Remove a grocery item
export const removeGrocery = (req: Request, res: Response) => {
    const { id } = req.params;
    db.query("DELETE FROM groceries WHERE id = ?", [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Grocery removed successfully" });
    });
};

// Update grocery details
export const updateGrocery = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, price, stock } = req.body;
    db.query("UPDATE groceries SET name = ?, price = ?, stock = ? WHERE id = ?", [name, price, stock, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Grocery updated successfully" });
    });
};