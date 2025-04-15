import express from "express";
import { registerSchema } from "../schema/auth.schema";
import { validate } from "../middleware/validate";
// import { registerUser } from "../controllers/auth.controller";

const router = express.Router();

// Register User Route
router.post("/register", validate(registerSchema), registerUser);

export default router;
