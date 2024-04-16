import mongoose from "mongoose"
const orderitemschema  = new mongoose.Schema ({
  productid:{
    type : mongoose.Schema.Types.ObjectId,
    ref: "product"
  },
  quantity :

  {
    type : Number,
    required : true
  }
  
})
const orderschema = new mongoose.Schema({
  orderprice :
  {
    type : Number,
    required : true,

  },
  customer : 
  {
    type : mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  orderitems :
  {
    type : [orderitemschema]
  },
  address: 
  {
    type: String,
    requierd:true
  },
  status : 
  {
    type : String,
    // choice 
    enum : ["pending","cancelled","delivered"],
    default:"pending"
  }
},{timestamp : true})

export const order = mongoose.model("order",orderschema)