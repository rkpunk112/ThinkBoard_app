import mongoose from "mongoose"


const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DataBase connection are Sucessfull");
        
    }
    catch(error){
        console.log("Unable to Connect to Database sorry",error);
        process.exit(1)//exit with failure
        
    }
    
}
export default connectDB