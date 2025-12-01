import mongoose from "mongoose";

const jobCardSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    jobUrl : {
        type :String,
        default : ""
    },
    section : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "column",
        required : true
    },
    salary : {
        type : Number,
    },
    location : {
        type : String,
        default : ""
    },
    description : {
        type : String,
    },
    isDeleted : {
        type : Boolean,
        default : false
    }
}, {
    timestamps : true
})

const jobCard = mongoose.model("jobCard", jobCardSchema);

export default jobCard;