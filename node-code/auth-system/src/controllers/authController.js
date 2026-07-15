import User from '../models/UserModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid';
import { sendEmailOTP } from '../utils/sendEmail.js';

const signup = async (req, res, next) => {
    try {
        const {email, password, userName} = req.body;

        if(!email || !password || !userName ) throw new Error("all fields are required", 400)

        const existingUser = await User.findOne({email})
        console.log(existingUser);

        if(existingUser) throw new Error("user already registered", 400)

        const salt = await bcrypt.genSalt(10);
        const hashedPassword  = await bcrypt.hash(password, salt)

        const otp = uuidv4().slice(0,7)

        let returnSendEmailOTPHandler = await sendEmailOTP(email, otp)

        console.log(returnSendEmailOTPHandler);

        const user = new User({...req.body, password : hashedPassword, otp });
        await user.save()

        return res.status(200).json({
            status  : true,
            message : "user signup successfully!"
        })

    } catch (error) {
        next(error)
    }
}

const login =  async (req, res, next) => {
    console.log("handler chlaa -->");
    try {
        let token ;
        const {email , password} = req.body;

        if(!email || !password) throw new Error("both fields are required!", 400);

        const user = await User.findOne({email});

        const isMatchedPass = await bcrypt.compare(password, user.password);

        if(user && isMatchedPass){
            token = jwt.sign({id: user._id , email : user.email}, process.env.JWT_SECRET_KEY, {expiresIn: "1h"})

            return res.status(200).json({
                status : true,
                message : "user logged in sucessfully",
                data : user,
                token : token
            })
        }

    } catch (error) {
        next(error)
    }
}

export {signup, login}