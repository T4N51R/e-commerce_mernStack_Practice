const User = require('../Models/userModel');
const data = require('../data');

const seedUser = async (req,res,next)=>{
    try {
        //deleting previous data
        await User.deleteMany({})
        // inserting data in DB
        const users = await User.insertMany(data.users);

        return res.status(201).json(users)
    } catch (error) {
        next(error);
    }
}

module.exports ={seedUser}