import express from 'express';
import userRouter from './user';
import taskRouter from './task';
import commentsRouter from './comments'

const router = express.Router();

router.use('/comments', commentsRouter);
router.use('/user', userRouter);
router.use('/task', taskRouter);


export default userRouter;
