import dotenv from "dotenv"
import express  from "express"
import mongoose from "mongoose"
import cors from "cors"
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect()