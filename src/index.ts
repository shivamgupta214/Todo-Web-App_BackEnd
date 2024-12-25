import express from "express";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

// Get all tasks
app.get("/get-tasks", async (req, res) => {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
});

// Create a new task
app.post("/create-tasks", async (req, res) => {
    const { title, color } = req.body;
    const task = await prisma.task.create({ data: { title, color } });
    res.json(task);
});

// Update a task
app.put("/update-tasks/:id", async (req, res) => {
    const { id } = req.params;
    const { title, color, completed } = req.body;
    const task = await prisma.task.update({
        where: { id: parseInt(id) },
        data: { title, color, completed },
    });
    res.json(task);
});


app.delete("/delete-tasks/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const taskId = parseInt(id);
      const existingTask = await prisma.task.findUnique({
        where: { id: taskId },
      });
      await prisma.task.delete({
        where: { id: taskId },
      });
  
      res.status(200).json({ message: "Task deleted successfully." });
    } catch (error) {
      console.error("Error deleting task:", error);
      res.status(500).json({ error: "An error occurred while deleting the task." });
    }
  });
  

// Start the server
app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});