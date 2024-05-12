import dotenv from "dotenv"
import express  from "express"
import mongoose from "mongoose"
import cors from "cors"
import userRoutes from "./Routes/user.Routes.js"
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/user", userRoutes);

mongoose.connect(process.env.mongoString,{dbName:"RealEstateProb"})
.then(()=>{
    console.log("connected successfully");
})
.catch((err)=>{
    console.log(err);
})

app.listen(300,()=>{
    console.log("server is up and running at port 300");
})