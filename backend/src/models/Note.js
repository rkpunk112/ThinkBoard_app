import mongoose from "mongoose";

//1- Create a schema

const noteSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
},
{timestamps:true}
);

// 2 - Model of Schema

const Note=mongoose.model("Note",noteSchema)
export default Note;