const createError = require('http-errors');
const user = require('../Models/userModel');

const getUser = (req,res,next)=>{
    try {
        console.log(req.body.id)
    res.status(200).send({
        messege:" Userfound",
        user:user,
    })
    } catch (error) {
        next(error);
    }
}

module.exports = getUser;