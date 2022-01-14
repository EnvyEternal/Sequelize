import express from 'express';
import { createTask, deleteTask, getTask }   from "../controllers/task";
import task from '../db/models/task';

const taskRouter = express.Router();

taskRouter.post('/create',  createTask);

taskRouter.get('/:userId', getTask)

taskRouter.get('/delete/:userId', deleteTask)

export default taskRouter;