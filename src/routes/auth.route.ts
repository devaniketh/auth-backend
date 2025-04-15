import express from "express";
import { registerSchema, loginSchema } from "../schema/auth.schema";
import { validate } from "../middleware/validate";
import { registerUser , loginUser} from "../controller/auth.controller";

const router = express.Router();
router.post("/register", validate(registerSchema), registerUser);
router.post("/login", validate(loginSchema), loginUser);

export default router;
