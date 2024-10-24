import mongoose from "mongoose";

const testimonial = new mongoose.Schema(
	{
       name:String,
       message:String
    })

    export const Testimonial = mongoose.model("Testimonial", testimonial);