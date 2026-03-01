const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let students = [
    { id: 1, name: "node", age: 18 },
    { id: 2, name: "express", age: 19 },
    { id: 3, name: "javascript", age: 20 }
];

// GET ทั้งหมด
app.get('/api/students', (req, res) => {
    res.json(students);
});

// GET ตาม ID
app.get('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).send("Error 404: Student not found");
    }
});

function validateStudent(req, res, next) {
    const { name, age } = req.body;

    if (!name || age === undefined) {
        return res.status(400).json({
            message: "Name and age are required"
        });
    }

    if (typeof age !== "number") {
        return res.status(400).json({
            message: "Age must be a number"
        });
    }

    next();
}
// POST เพิ่มข้อมูล
app.post("/api/students", validateStudent, (req, res) => {
    const { name, age } = req.body;

    const newStudent = {
        id: students.length > 0 
            ? students[students.length - 1].id + 1 
            : 1,
        name,
        age
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

// PUT แก้ไขข้อมูล
app.put('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, age } = req.body;

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    if (name !== undefined) student.name = name;
    if (age !== undefined) student.age = age;

    res.json(student);
});

// DELETE ลบข้อมูล
app.delete('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    const deletedStudent = students.splice(index, 1);

    res.json(deletedStudent[0]);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});