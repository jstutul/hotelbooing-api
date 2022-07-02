import User from "../models/User.js";
import  bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
export const register=async (req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser=new User({
                username:req.body.username,
                email:req.body.email,
                password:hash,
            })
        await newUser.save()
        res.status(201).json("User Create Succesfully")    
    } catch (err) {
      next(err)
    }
}

export const login=async (req,res,next)=>{
    try {
        const user=await User.findOne({"username":req.body.password})
        if(!user) return next(createError(404,"user not found"))
        const isPasswordCorrect=await bcrypt.compare(
            req.body.password,
            user.password
        )

        if(!isPasswordCorrect) return next(createError(400,"password not matched"))
        res.status(200).json(user)    
    } catch (err) {
      next(err)
    }
}


export const getUser=async (req,res,next)=>{
    try {
      const uses = await User.find();
      res.status(200).json(uses);
    } catch (err) {
      next(err)
    }
  }