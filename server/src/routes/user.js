import express from 'express';
import { getComment } from '../controllers/comment';
import { getTask } from '../controllers/task';
import { createUser, getUserById, deleteUserById, updateUserById } from '../controllers/user';
import user from '../db/models/user';
//import userSchema from '../validations'

const userRouter = express.Router();

userRouter.post('/post',  createUser);

userRouter.post('/',  createUser);

userRouter.get('/user/:userId',  getUserById);

userRouter.patch('/:userId',  updateUserById);

userRouter.delete('/:userId', deleteUserById)

userRouter.get('/test/:userId', getTask)

userRouter.get('/testcomments/:userId', getComment)

export default userRouter;