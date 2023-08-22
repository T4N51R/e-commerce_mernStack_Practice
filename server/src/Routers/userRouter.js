const express = require('express');
const getUser = require('../Controller/userControler');
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

useRouter.get("/",getUser)
useRouter.get("/profile",(req,res)=>{
    console.log(req.body.id)
    res.status(200).send({
        messege:" Test Successfull",
    })
})

module.exports = useRouter;