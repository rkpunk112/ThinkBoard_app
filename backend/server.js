import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import noteRouter from "./src/controllers/routes/notesRouter.js"
import connectDB from "./src/controllers/config/db.js";
import rateLimiter from "./src/middleware/rateLimiter.js";


dotenv.config()

const app=express()
app.use(cors({
    origin:"http://localhost:5173"
}));
app.use(express.json()) //this middleware will parse the JSON bodies.

app.use(rateLimiter)

app.use("/api/notes",noteRouter);

connectDB().then(()=>{
    app.listen(5000,()=>{
    console.log("Server is listening at port number 5000:")
})
})