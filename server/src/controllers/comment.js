import {Comments} from './../db/models/comments'

export async function getComment(req, res) {
    try {
      const getcomment = await Comments.findByPk(req.params.id, {where : {id: userId}});
      if (getcomment) {
        return res.status(201).send(gettask);
      }
    } catch (e) {
      console.log('Error Comment');
    }
  }