import express from "express";
import { registerSchema, loginSchema } from "../schema/auth.schema";
import { validate } from "../middleware/validate";
import { registerUser , loginUser} from "../controller/auth.controller";
import { authLimiter } from "../middleware/rateLimiter";

const router = express.Router();
router.post("/register", authLimiter, validate(registerSchema), registerUser);
router.post("/login",authLimiter, validate(loginSchema), loginUser);

export default router;
