const createError = require('http-errors');
const User = require('../Models/userModel');
const {sucessResponse}  = require('./responseController');
const { mongoose } = require('mongoose');

const getUsers = async(req,res,next)=>{
    try {
        const search = req.query.search || ""; 
        const page = Number(req.query.page) || 1; 
        const limit = Number(req.query.limit) || 1; 

        const searchExp = new RegExp('.*'+search+'.*','i');
        const filter = {
            isAdmin:{$ne:true},
            $or:[
                {name: {$regex:searchExp}},
                {email: {$regex:searchExp}},
                {phone: {$regex:searchExp}}
            ]
        }
        const option = {password:0}

        const users = await User.find(filter,option)
        .limit(limit)
        .skip((page-1)*limit);
        
        const count = await User.find(filter).countDocuments();
        if(!users){
            throw createError(404,'User Not Found')
        }
        // res.status(200).send({
        //     messege:" All User found",
            
        // })

        return sucessResponse(res,{
            statusCode:200,
            messege:'',
            payload:{
                users,
            pagination:{
                totalPage : Math.ceil(count/limit),
                currentPage: page,
                previousPage: page - 1>0 ? page -1 : null,
                nextPage: page +1 <= Math.ceil(count/limit) ? page +1 :null,
            }
            }
        })

    } catch (error) {
        next(error);
    }
}
const getUser = async(req,res,next)=>{
    try {
        const id = req.params.id;
        const option = {password:0};

        const user = await User.findById(id,option);

        if(!user){
            throw createError(404,'User Not Exist')
        }
        return sucessResponse(res,{
            statusCode:200,
            messege:'Sucessfull',
            payload:{
                user
            }
        })

    } catch (error) {
        if(error instanceof mongoose.Error){
           next(createError(400,'Invalid Id')) 
        }
        next(error);
    }
}


module.exports = {getUsers,getUser};