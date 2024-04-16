import mongoose from "mongoose"

const patientschema = new mongoose.Schema({
  name : 
  {
    type : String,
    required : true
  },
  diagonasedwith : 
  {
    type : String,
    required : true 
  },
  address : 
  {
    type : String,
    required : true 
  },
 age : 
  {
    type : Number,
    required : true 
  },
  bloodgroup : 
  {
    type : String,
    required : true 
  },
  gender :
  {
    type : String,
    enum : ["M","F","orders"],
    required : true 
  },
  addmittedin : 
  {
type : mongoose.Schema.Types.ObjectId,
ref : "hospital"
  },
},{timestamp : true})

export const patient = mongoose.model("patient",patientschema)