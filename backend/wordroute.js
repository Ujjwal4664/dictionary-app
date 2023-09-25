import express from "express";
import mongoose from "mongoose";
import { wordModel } from "./Word.js";
const router =  express.Router()
router.post("/",async(req,res)=>{
    const word = new wordModel({
        _id: new mongoose.Types.ObjectId(),
        word:req.body.word,
        meaning:req.body.meaning,
        example:req.body.example,
        date:req.body.date,
    })
    console.log(word)
    try {
        const result = await word.save()
        res.status(201).json({
            createdWord:{
                word:result.word,
                meaning:result.meaning,
                example:result.example,
                date:result.date,
                _id:result._id,
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})
router.get("/savedWords",async(req,res)=>{
    try {
        const words = await wordModel.find()
        res.status(201).json({words})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})
export { router as wordRouter };