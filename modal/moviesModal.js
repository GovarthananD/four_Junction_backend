import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    release:{
        type:String,
        required:true,
    },
    plot:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    actorName:{
        type:String,
        required:true,
    },
    actorGender:{
        type:String,
        required:true,
    },
    actorDob:{
        type:String,
        required:true,
    },
    actorBio:{
        type:String,
        required:true,
    },
    producerName:{
        type:String,
        required:false,
    },
    producerGender:{
        type:String,
        required:false,
    },
    producerDob:{
        type:String,
        required:false,
    },
    producerBio:{
        type:String,
        required:false,
    },
    rating:{
        type:String,
        required:true,
    },
    trailer:{
        type:String,
        required:true,
    },
    type:{
        type:String,
    }
});

const Movies = mongoose.model("Movies", movieSchema);
export {Movies};