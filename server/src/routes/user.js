import express from 'express';
import { createUser, getUserById, deleteUserById, updateUserById } from '../controllers/user';
//import userSchema from '../validations'
import { createTask }   from "../controllers/task";

const userRouter = express.Router();

userRouter.post('/post',  createUser);

userRouter.post('/',  createUser);

userRouter.get('/:userId',  getUserById);

userRouter.patch('/:userId',  updateUserById);

userRouter.delete('/:userId', deleteUserById)

userRouter.post('/create',  createTask);

export default userRouter;