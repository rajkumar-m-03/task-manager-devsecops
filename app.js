const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

let tasks = [];

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/tasks", (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    res.json({ message: "Task added" });
});

app.get("/health", (req, res) => {
    res.json({ status: "healthy" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});