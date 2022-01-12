import { User } from './../db/models';

export async function createUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    if (newUser) {
      return res.status(201).send(newUser);
    }
  } catch (e) {
    console.log('Error created');
  }
}


export async function getUserById(req, res){
  try{
    const getUser = await User.findByPk(req.params.userId, {
        attributes:{
          exclude: ['password']
        }
    })
    if(getUser){
      return res.status(201).send(getUser)
    }
    else{
      return res.send('Error')
    }
  } catch (e){
    console.log(e)
  }
}

export async function deleteUserById(req, res){
  try{
    const user = await req.params.userId
    const del =  User.destroy({where: {id: user}})
    if(del){
      return res.status(200).send('Destroy')
    }
  } catch (e){
    console.log(e)
  }
}
export async function updateUserById(req, res) {
  try {
      const neededInfo = req.body;
      const updateUser = await User.update({neededInfo}, {
          where: {id: req.params.userId }
      });
      if (updateUser){
          return res.status(200).send("user updated");
      }
  } catch (e) {
      console.log('some error when update');
  }
};