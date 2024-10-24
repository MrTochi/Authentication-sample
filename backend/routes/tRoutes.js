// path/to/routes.js
import express from 'express';
import { createTestimonial } from '../controller/tController.js'; // Ensure this path is correct
import { createTestimonialbox } from '../controller/tController.js';

const router = express.Router();

router.post('/testimonials', createTestimonial);

router.get('/testbox', createTestimonialbox);

// Additional routes for testimonials can be added here.

export default router;
