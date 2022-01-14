import { Task } from  './../db/models/task';

export async function createTask(req, res) {
  try {
    const createdUser = await Task.create(req.body);
    if(createdUser){
      return res.status(201).send(createdUser)
    }
  } catch (e) {
    console.log(e)
  }
}

export async function getTask(req, res) {
  try {
    const gettask = await Task.findByPk(req.params.userId);
    if (gettask) {
      return res.status(201).send(gettask);
    }
  } catch (e) {
    console.log('Error Task');
  }
}

export async function deleteTask(req, res) {
  try {
    const deleteTask = await Task.destroy({
      where: {
        id: req.params.taskId,
      },
    });
    if (deleteTask) {
      return res.status(201).send(found_task);
    }
  } catch (e) {
    console.log(e)
  }
}