import mongoose from "mongoose"
const wordSchema = new mongoose.Schema({
    word:{type:String,required:true},
    meaning:{type:String,required:true},
    example:{type:String,required:true},
    date:{type:String,required:true},
})
export const wordModel = mongoose.model("words",wordSchema)