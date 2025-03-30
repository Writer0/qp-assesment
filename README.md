# qp-assesment

# Grocery Booking API

## **Overview**
This is a **Grocery Booking API** built using **Node.js, Express, and MySQL**. The API allows users to **browse groceries, place orders**, and provides **admin functionalities** to manage groceries. The system ensures that the required **database and tables are created automatically if they don’t exist**.

## **Features**
- 📦 **Admin functionalities**: Add, update, delete, and view groceries.
- 🛒 **User functionalities**: View available groceries and place orders.
- 💾 **MySQL database**: Automatically creates database and tables if not found.
- 🐳 **Docker support**: Easily deployable using Docker.

---

## **Getting Started**
### **1️⃣ Prerequisites**
Make sure you have the following installed:
- **Node.js** (v18 or later)
- **MySQL** (running locally or in a Docker container)
- **Docker** (optional, for containerized deployment)

### **2️⃣ Installation**
```sh
# Clone the repository
git clone <your-repo-url>
cd grocery-booking-api

# Install dependencies
npm install
```

### **3️⃣ Environment Configuration**
Create a `.env` file in the root directory and set the following environment variables:
[Update db details according to your configuration]
```env 
PORT=5083
DB_HOST=localhost  # Change to 'mysql-container' if using Docker
DB_USER=
DB_PASSWORD=
DB_NAME=grocery_db
```

### **4️⃣ Start MySQL Database**
#### **➡️ Option 1: Using Local MySQL**
1. Start MySQL server.
2. Create an empty database manually (optional):
   ```sql
   CREATE DATABASE grocery_db;
   ```

#### **➡️ Option 2: Using Docker MySQL Container**
Run the following command to start a MySQL container:
```sh
docker run --name mysql-container -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -d -p 3306:3306 mysql:5.7
```

### **5️⃣ Start the Server**
```sh
npm start
```
The server will start on **http://localhost:5083**.

---

## **API Endpoints**
### **Admin Routes**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/admin/grocery` | Add a new grocery item |
| `GET`  | `/api/admin/groceries` | View all groceries |
| `PUT`  | `/api/admin/grocery/:id` | Update a grocery item |
| `DELETE` | `/api/admin/grocery/:id` | Remove a grocery item |

### **User Routes**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET`  | `/api/user/groceries` | View available groceries |
| `POST` | `/api/user/order` | Place an order |

#### **Example Request: Add Grocery**
```json
POST /api/admin/grocery
{
    "name": "Apples",
    "price": 2.50,
    "stock": 100
}
```

#### **Example Response:**
```json
{
    "message": "Grocery added successfully"
}
```

---

## **Docker Deployment**
### **1️⃣ Build and Run API in Docker**
```sh
docker build -t grocery-api .
docker run -p 5083:5083 --name grocery-api --env-file .env grocery-api
```

### **2️⃣ Check Running Containers**
```sh
docker ps
```

### **3️⃣ Stop & Remove Containers**
```sh
docker stop grocery-api mysql-container
docker rm grocery-api mysql-container
```
---

## **Author**
👨‍💻 **Nitin Singh**
