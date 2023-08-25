const { Schema,model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        // match: [/\S+@\S+\.\S+/, 'Invalid email address']
        validate:{
            validator: (v)=>{
                return /\S+@\S+\.\S+/.test(v);
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength:8,
        set: (v)=>bcrypt.hashSync(v, bcrypt.genSaltSync(10))
    },
    address:{
        type:String,
    },
    phone:{
        type:Number,
        minlength:[10,'Min Length is 10'],
        maxlength:11
    },
    image:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isBanned:{
        type:Boolean,
        default:false
    }
}, {timestamps:true})

const User = model('Users',userSchema);
module.exports = User