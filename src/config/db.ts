import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// Initialise MySQL connection (without database)
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

// Connect to MySQL Server
db.connect((err) => {
    if (err) {
        console.error("Database connection failed: ", err);
        process.exit(1);
    }
    console.log("Connected to MySQL server");

    // Create database if it does not exist
    db.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``, (err) => {
        if (err) {
            console.error("Error creating database:", err);
            process.exit(1);
        }
        console.log(`Database '${process.env.DB_NAME}' is ready`);

        // Now, connect with the database selected
        const dbWithDatabase = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        dbWithDatabase.connect((err) => {
            if (err) {
                console.error("Error connecting to the database:", err);
                process.exit(1);
            }
            console.log(`Connected to '${process.env.DB_NAME}' database`);

            // Create groceries table if it does not exist
            const createGroceriesTable = `
                CREATE TABLE IF NOT EXISTS groceries (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    price DECIMAL(10,2) NOT NULL,
                    stock INT NOT NULL
                )
            `;

            dbWithDatabase.query(createGroceriesTable, (err) => {
                if (err) {
                    console.error("Error creating groceries table:", err);
                    process.exit(1);
                }
                console.log("Groceries table is ready");
            });

            // Create orders table if it does not exist
            const createOrdersTable = `
                CREATE TABLE IF NOT EXISTS orders (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    userId INT NOT NULL,
                    items JSON NOT NULL,
                    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            `;

            dbWithDatabase.query(createOrdersTable, (err) => {
                if (err) {
                    console.error("Error creating orders table:", err);
                    process.exit(1);
                }
                console.log("Orders table is ready");
            });

            // Export the new connection with database selected
            module.exports.db = dbWithDatabase;
        });
    });
});
export { db };