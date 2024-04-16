// import mongoose from "mongoose"

//const catagoryschema = new mongoose.Schema({},{timestamp : true})

//export const catagory = mongoose.model("catagory",catagoryschema)

import mongoose from "mongoose"

const catagoryschema = new mongoose.Schema({
  name :
  {
    type : String,
    required : true,
  },
},{timestamp : true})

export const catagory = mongoose.model("catagory",catagoryschema)