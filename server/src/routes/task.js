import express from 'express';
import { createTask, getTask }   from "../controllers/task";

const taskRouter = express.Router();

taskRouter.post('/create',  createTask);

taskRouter.get('/gettask/:taskId', getTask)

export default taskRouter;