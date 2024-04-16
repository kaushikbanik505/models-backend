import mongoose from "mongoose"

const productschema = new mongoose.Schema({
  description : 
  {
    type :String,
    required:true,
  },
  name : {
    type :String,
    required:true,
  },
  productImage : 
  {
    type : String,

  },

  price :
  {
type : Number,
default : 0
  },
stock :
  {
type : Number,
default : 0
  },
  catagory :
  {
    type : mongoose.Schema.Types.ObjectId,
    ref: "catagory",
    required : true,
  },
  owner :
  {
    type : mongoose.Schema.Types.ObjectId,
    ref : "user"
  }

  
},{timestamp : true})

export const product = mongoose.model("product",productschema)

