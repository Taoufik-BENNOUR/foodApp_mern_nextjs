import Product from "../../../models/Product";
import dbConnect from "../../../utils/mongo";

export default async function handler(req,res){
    const {method} = req;
    dbConnect()
        
    if(method === "GET"){
        try {
            const products = await Product.find()
            res.status(200).json(products)
        } catch (error) {
            res.status(400).json(error)

        }
    }
    if(method === "POST"){
        try {
            const newProduct = await Product.create(req.body);
            res.status(200).json(newProduct)
        } catch (error) {
            res.status(400).json(error)
        }
    }
}