//LosORrCu1CuOblXP
import { connectDB } from "./db/connectDB.js"
import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js"

import tRoutes from "./routes/tRoutes.js"

dotenv.config()

const app=express()

app.use(express.json())//allows us to parse incoming requests:req.body
app.use(cookieParser())//allows us to parse incoming cookies

app.use("/api/auth",authRoutes)
app.use("/api/auth",tRoutes)

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    connectDB()
    console.log(`server is running on port:${PORT}`);
})
