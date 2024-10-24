// path/to/controller/testimonialController.js
import { Testimonial } from "../models/tModel.js";

export const createTestimonial = async (req, res) => {
    const { name, message } = req.body;

    try {
        const testimonial = new Testimonial({ name, message });
        await testimonial.save();

        res.status(201).json({
            success: true,
            message: "Testimonial created successfully",
            testimonial,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


export const createTestimonialbox=async (req,res)=>{
    try {
        const testimonials = await Testimonial.find(); // Fetch all users from the database
        const data= testimonials.map(testimonial => ({name:testimonial.name,message:testimonial.message}))
        res.json(data); // Send the user data as a JSON response
    } catch (error) {
        res.status(500).send("Server error"); // Handle any errors
    }
}
// Additional functions for reading, updating, and deleting testimonials can be added here.