import Note from "../models/Note.js";

export async function getAllNote(req,res){
   try{
        const notes=await Note.find().sort({createdAt: -1}); //newest form
        res.status(200).json(notes)
   }
   catch(error){

    res.status(500).json({message:"Internal Server Error!"})
   } 
}


export async function createNotes(req,res){
    try{
        const{title,content}=req.body;
        const newNote=new Note({title,content});
        await newNote.save();
        res.status(200).json({message:"Message is uploaded sucessFully!"})
        console.log("message created sucessfull")
        
    }
    catch(error){
        res.status(500).json({message:"Internal server Error"})
    }

}


export async function updateNote(req,res){
    try {
        const{title,content}=req.body;
        await Note.findByIdAndUpdate(req.params.id,{title,content})
        res.status(200).json({message:"Note Updated Sucessfully!"})
    } catch (error) {
        res.status(500).json({message:"INternal server error"})
    }
}



export async function deleteNote(req,res){
    try {
        let deleted_Notes=await Note.findByIdAndDelete(req.params.id);
        if(!deleted_Notes)
            res.status(200).json({message:"File is Missing "})
        res.status(200).json({message:"File is Deleted "})
    } catch (error) {
        res.status(500).json({message:"Internal server Error"})
    }
}

