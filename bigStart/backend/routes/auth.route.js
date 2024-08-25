import express from "express";
import {
    SignUp,
    LogIn,
    LogOut,
    verifyEmail,
    forgotPassword,
    resetPassword,
    checkAuth
    }
from "../controller/auth.controller.js";

import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);
router.post("/signup", SignUp);
router.post("/login", LogIn);
router.post("/logout", LogOut);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
