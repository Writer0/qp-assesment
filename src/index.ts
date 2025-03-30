// Author: Nitin Singh
// Description: Entry point for the Grocery Booking API

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.routes";
import userRoutes from "./routes/user.routes";
import { db } from "./config/db";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Wait for DB connection before starting the server
db.connect((err) => {
    if (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    }

    console.log("Database connection established");

    // Routes
    app.use("/api/admin", adminRoutes);
    app.use("/api/user", userRoutes);

    // Start server
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

export default app;
