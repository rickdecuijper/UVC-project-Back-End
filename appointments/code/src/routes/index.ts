import Express, { Router } from 'express';
const router: Router = Express.Router();
import Cors from 'cors';
import { getTasks, getTaskById, setTask } from '../controllers/tasksController.ts';

const currentApiVersion: string = 'v1';
const apiSlug: string = '/api/' + currentApiVersion;

router.get(`${apiSlug}/tasks`, Cors(), getTasks);

router.get(`${apiSlug}/tasks/:id`, Cors(), getTaskById);

router.post(`${apiSlug}/tasks`, Cors(), setTask);

export default router;
