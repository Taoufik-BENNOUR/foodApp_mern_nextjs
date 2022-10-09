import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    prices:{
        type:[Number],
        required:true
    },
    options:{
        type:[{
            text:{type:String,required:true},
            price:{type:String,required:true}
        }]
    }
},
{timestamps:true})

export default mongoose.models.Product || mongoose.model("Product",ProductSchema)