import { Router } from 'express';
import TaskController from '../controllers/tasks.controller';

const router = Router();

router.get("/", TaskController.getAllTasks);
router.post("/", TaskController.createTask);
router.put("/:id", TaskController.updateTask);
router.delete("/:id", TaskController.deleteTask);

export default router;