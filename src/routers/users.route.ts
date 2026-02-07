import { Router } from "express";
import {
  getUserByIdHandler,
  listUsersHandler,
} from "@/constrollers/users.controller.js";
import { requireAuth } from "@/middlewares/auth.middleware.js";
import { validate } from "@/middlewares/validate.middleware.js";
import { idValidators } from "@/validators/commann.validator.js";

const router = Router();

router.use(requireAuth);

router.get("/", listUsersHandler);
router.get("/:id", validate({ params: idValidators }), getUserByIdHandler);

export default router;
