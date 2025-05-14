import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../modal/authenticationModal.js";


const router = express.Router();

router.post("/register", async (req, res) => {
    const {username, mobile, email, password} = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 13);
        const user = await User.create({username, mobile, email, password:hashedPassword});
        res.status(201).json({ message: 'User registered successfully' });
    }catch(err){
        res.status(400).json({ error: err.message });
    }
});

 router.post("/login", async (req, res) => {
     const {email, password} = req.body;
     try{
         const user = await User.findOne({email});
         if(!user) return res.status(400).json({message:"User not found"});

         const isMatch = await bcrypt.compare(password, user.password);
         if(!isMatch) return res.status(401).json({ error: 'Invalid password' });

         const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY, {expiresIn: '1h',});
         res.json({ token });
     }catch(err){
         res.status(400).json({ error: err.message });
     }
 });





export const userRouter = router;