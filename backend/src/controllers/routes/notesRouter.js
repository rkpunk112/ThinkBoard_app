import express from "express"
import { createNotes,deleteNote, getAllNote, updateNote } from "../noteControllers.js";

const router=express.Router();

router.get("/",getAllNote)
router.post("/",createNotes)

router.put("/:id",updateNote)

router.delete("/:id",deleteNote)

export default router;