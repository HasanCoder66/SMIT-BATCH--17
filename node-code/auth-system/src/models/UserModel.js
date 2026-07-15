import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type : String,
        required : true,
    },
    age:Number,
    email :{
        type:String,
        required: true,
        unique: true,
    },
    password : {
        type:String,
        minLength : 8
    },
    otp:{
        type:String
    },
    // otpExpiry:{

    // }

    
})


const user = mongoose.model("users", userSchema);
export default user