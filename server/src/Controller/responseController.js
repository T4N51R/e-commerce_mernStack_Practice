const errorResponse = (res, {statusCode=500,message='Internal Server Error'})=>{
  return  res.status(statusCode).json({
        sucess : false,
        messege : message,
     })
}
const sucessResponse = (res, {statusCode=200,message='Sucess',payload={}})=>{
  return  res.status(statusCode).json({
        sucess : true,
        messege : message,
        payload
     })
}

module.exports= {errorResponse,sucessResponse}