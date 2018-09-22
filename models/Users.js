const mongoose =require('mongoose');
const {Schema}=mongoose


const userScema=new Schema({
    googleId:String
})

mongoose.model("users",userScema)