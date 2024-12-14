// Importăm pachetul necesar
const express = require("express");
const mysql = require("mysql2");
const app = express();

// Middleware pentru a putea prelua date JSON din request body
app.use(express.json());

// Configurăm conexiunea la baza de date 
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Adaptează la utilizatorul tău MySQL
    password: "password", // Adaptează la parola ta MySQL
    database: "student", // Baza de date trebuie creată anterior
});

// Ne conectăm la baza de date
db.connect((err) => {
    if (err) {
        console.error("Database connection failed: ", err);
        return;
    }
    console.log("Connected to the database.");
});

// Creăm tabelul "students" dacă nu există
const createTableQuery = `
CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  age INT
);
`;

db.query(createTableQuery, (err, result) => {
    if (err) {
        console.error("Failed to create table: ", err);
    } else {
        console.log("Table 'students' ensured to exist.");
    }
});

// Endpoint pentru a adăuga un student nou
app.post("/students", (req, res) => {
    const { name, location, age } = req.body;
    if (!name || !age) {
        return res.status(400).json({ error: "Name and age are required" });
    }

    const insertQuery = `INSERT INTO students (name, location, age) VALUES (?, ?, ?)`;
    db.query(insertQuery, [name, location, age], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Failed to insert student" });
        }
        res.status(201).json({ message: "Student added successfully", id: result.insertId });
    });
});

// Endpoint pentru a obține toți studenții
app.get("/students", (req, res) => {
    const selectQuery = `SELECT * FROM students`;
    db.query(selectQuery, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Failed to fetch students" });
        }
        res.status(200).json(results);
    });
});

// Endpoint pentru a căuta studenți după vârstă
app.get("/students/age/:age", (req, res) => {
    const age = parseInt(req.params.age);
    const selectQuery = `SELECT * FROM students WHERE age = ?`;

    db.query(selectQuery, [age], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Failed to fetch students" });
        }
        res.status(200).json(results);
    });
});

// Endpoint pentru a șterge un student după nume
app.delete("/students/:name", (req, res) => {
    const name = req.params.name;
    const deleteQuery = `DELETE FROM students WHERE name = ?`;

    db.query(deleteQuery, [name], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Failed to delete student" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "No student found with that name" });
        }
        res.status(200).json({ message: "Student deleted successfully" });
    });
});

// Pornim serverul
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
