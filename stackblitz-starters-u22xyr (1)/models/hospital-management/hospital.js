import mongoose from "mongoose"

const hospitalschema = new mongoose.Schema({
  name : 
  {
    type : String,
    required : true 
  },
 address : 
  {
    type : String,
    required : true 
  },
city : 
  {
    type : String,
    required : true 
  },
  pincode : 
  {
    type : String,
    required : true 
  },
speclisedin : 
  [
{
type : String
} 
  ],
},{timestamp : true})

export const hospital = mongoose.model("hospital",hospitalschema)