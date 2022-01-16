import express from 'express';
import { getComment } from '../controllers/comment';

const commentsRouter = express.Router()

commentsRouter.get('/comments/:userId', getComment)


export default commentsRouter;