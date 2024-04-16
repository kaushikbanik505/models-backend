import mongoose from "mongoose"

const doctorschema = new mongoose.Schema({
  name : 
  {
    type : String,
   required : true
  },
 salary : 
  {
    type : String,
   required : true
  },
  qualification :
  {
    type : String,
    required : true
  },
  experience :
  {
    type : Number,
    default : 0
  },
  worksplaces :
  [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref:"hospital"
    },
  ],

  
},{timestamp : true})

export const doctor = mongoose.model("doctor",doctorschema)