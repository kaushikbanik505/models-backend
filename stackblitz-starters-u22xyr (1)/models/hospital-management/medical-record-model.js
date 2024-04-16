import mongoose from "mongoose"

const medicalrecordschema = new mongoose.Schema({},{timestamp : true})

export const medicalrecord = mongoose.model("medicalrecord",medicalrecordschema)