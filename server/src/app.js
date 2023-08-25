const express = require("express");
const app = express();
const morgan = require('morgan');
const createError = require('http-errors');
const rateLimit = require('express-rate-limit');
const useRouter = require("./Routers/userRouter");
const seedRouter = require("./Routers/seedRouter");
const { errorResponse } = require("./Controller/responseController");

const ratelimiter = rateLimit({
    windowMs : 1*60*1000,
    message : "Too many request. Try again later"
})
 

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/user',useRouter);
app.use('/api/seed',seedRouter);



  
  app.get("/test",ratelimiter,(req,res)=>{
      
      res.status(200).send({
          messege:" Running good"
      })
  })


  //Client side error handeling
  app.use((req,res,next)=>{

      next(createError(404,'Page Not Found'));
  })

  //server side error handeling
  app.use((err, req, res, next) => {
     res.status(err.status || 500).json({
        sucess : false,
        messege : err.message
     })
     return errorResponse(res,{
        statusCode:err.status,
        messege:err.message
     })
  })

  module.exports = app;