import mongoose from "mongoose";
import { boolean } from "webidl-conversions";

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        unique: true,
        required: true
    }, 
    userName : {
        type:String,
        required: true
    },
    password :{
        type:String,
        required : true
    },
    profession : String,
    isStudent : Boolean,
    isAdmin: {
        type:Boolean,
        default : false,
    }
})


const userModel = mongoose.model("users", userSchema)
export default userModel