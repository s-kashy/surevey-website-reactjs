const mongoose =require('mongoose');
const {Schema}=mongoose


const userScema=new Schema({
    googleId:String,
    credits:{
        default:0,
        type:Number
    }
})

mongoose.model("users",userScema)