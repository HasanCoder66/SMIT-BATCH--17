import jwt from "jsonwebtoken"
import User from '../models/UserModel.js'
export const updateUser = async (req, res, next) => {
    try {
        let token = req.headers.authorization;

        if (token) {
            token = req.headers.authorization.split(" ")[1]
        }

        if (!token) throw new Error("No Token Provided", 400);
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decode);

        const findUserandUpdate = await User.findByIdAndUpdate(decode.id, req.body)
        console.log(findUserandUpdate);

        return res.status(200).json({
            status: true,
            message: "update user successfully!"
        })
    } catch (error) {
        next(error)
    }
}


export const getAllUser = async (req, res,next) => {
try {
    const allUsers = await User.find()

    return res.status(200).json({
        status: true,
        message: "all user fetched successfully!",
        data:allUsers
    })
} catch (error) {
    next(error)
}
}