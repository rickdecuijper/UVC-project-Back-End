import { Request, Response } from 'express';
import { prisma } from '../lib/prisma.ts'

/**
 * Interface for the response object
 */
interface TaskResponse {
  meta: {
    count: number
    title: string
    url: string
  },
  data: string[]
}

/**
 * Function to get all appointments
 * @param req {Request} - The Request object
 * @param res {Response} - The Response object
 * @returns {Promise<void>}
 */
export async function getTasks(req: Request, res: Response): Promise<void> {
  const tasks = await prisma.task.findMany();
  res.status(200).json({
    meta: {
      count: tasks.length,
      title: 'All Tasks',
      url: req.url
    },
    data: tasks
  });
}

export async function getTaskById(req: Request, res: Response) {
  const taskId: number = parseInt(req.params.id)
  if (isNaN(taskId)) {
    res.status(400).send('Invalid ID');
    return;
  }
  const task = await prisma.task.findUnique({
    where: {
      id: taskId
    }
  })
  if (task) {
    res.status(200).json({
      meta: {
        count: 1,
        title: 'task with id',
        url: req.url
      },
      data: task
    })
  } else {
    res.status(404).send('Task with specified ID doesn`t exist');
  }
}

export async function setTask(req: Request, res: Response): Promise<void> {
  const title: string = req.body.title ? req.body.title : 'Empty'
  const description: string = req.body.description ? req.body.description : 'Empty'
  const id: string = req.body.timeslotId ? req.body.timeslotId : 0
  const timeslotId: number = parseInt(id);
  const status: string = req.body.status ? req.body.status : 'Empty'

  if (title != 'Empty' && description != 'Empty' && timeslotId != 0 && status != 'Empty') {
    console.log(timeslotId);
    const task = await prisma.task.create({
      data: {
        title: title,
        description: description,
        timeslotId: timeslotId,
        status: status
      }
    });
    console.log(task)
    res.status(200).send(`task has been created`);
  } else {
    res.status(200).send('creation of task has failed');
  }
}
