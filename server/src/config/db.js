const mongoose = require('mongoose');
const { mongoDbURL } = require('../secrate');

const connectDB = async (options = {})=>{
    try {
        await mongoose.connect(mongoDbURL,options);
        console.log('DB Connected');
        mongoose.connection.on('error',(error)=>{
            console.error('DB Connection Error: ',error);
        })
    } catch (error) {
        console.error('DB Fata Error: ',error.toString());
        
    }
}
module.exports = connectDB;