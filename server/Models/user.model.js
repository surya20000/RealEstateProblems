import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    allotteeName:{
        type: String,
        required: true,
    },
    coAllotteeName:{
        type: String,
        
    },
    email:{
        type: String,
        required: true,
    },
    contactNo:{
        type: Number,
        required: true,
    },
    projectBooked:{
        type: String,
    },
    promoterName:{
        type: String,
    },
    state:{
        type: String,
    },
    noOfUnits:{
        type: Number,
        required: true,
    },
    totalPaid:{
        type: String,
        required: true,
    }
})

const Problems = mongoose.model("users", userSchema)

export default Problems