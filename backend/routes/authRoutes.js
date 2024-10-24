import express from "express"
import { login,logout,user,signup,verifyEmail,forgotPassword,resetPassword,checkAuth } from "../controller/authController.js"
//get is basically for retreiving while post is for sending and updating
import { verifyToken } from "../middleware/verifyToken.js";

const router=express.Router( )

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

router.post("/verify-Email",verifyEmail)

router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

router.get("/user",user)


export default router