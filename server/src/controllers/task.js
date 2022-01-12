import { Task } from  './../db/models';

export async function createTask(req, res) {
  try {
    const newTask = await Task.create(req.body);
    if (createTask) {
      return res.status(201).send(newTask);
    }
  } catch (e) {
    console.log('Error created');
    }
}

export async function getTask(req, res){
  try{
    const getTask = await Task.findByPk(req.params.taskId)
    if(getTask){
      return res.status(201).send(getUser)
    }
    else{
      return res.send('Error')
    }
  } catch (e){
    console.log(e)
  }
}