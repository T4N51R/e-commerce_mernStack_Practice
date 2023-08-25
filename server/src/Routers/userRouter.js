const express = require('express');
const {getUsers,getUser} = require('../Controller/userControler');
// const getUser = require('../Controller/userControler');

const useRouter = express.Router();

const islogedin = (req,res,next)=>{
    const login = true;
    if(login){
      req.body.id = 101;
      next()
    }else{
      return  res.status(200).send({
          messege:'UNAuthorize'
      })
    }   
  }

useRouter.get("/",getUsers);
useRouter.get("/:id",getUser);





module.exports = useRouter;