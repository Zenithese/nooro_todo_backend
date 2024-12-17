import { Request, Response } from "express";
import { prisma } from "../server";

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createTask = async (req: Request, res: Response) => {
  console.log(req.body);
  const { title, color, completed } = req.body;

  try {
    const newTask = await prisma.task.create({
      data: { title, color, completed: completed || false },
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;

  try {
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { title, color, completed },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.task.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
