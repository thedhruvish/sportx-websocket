import { Router } from "express";
import {
  loginHandler,
  registerHandler,
} from "@/constrollers/auth.controller.js";
import { validate } from "@/middlewares/validate.middleware.js";
import { loginSchema } from "@/validators/auth.validator.js";

const router = Router();

router.post("/register", validate({ body: loginSchema }), registerHandler);
router.post("/login", validate({ body: loginSchema }), loginHandler);

export default router;
