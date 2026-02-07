import { Router } from "express";
import {
  createMatchHandler,
  deleteMatchHandler,
  getMatchByIdHandler,
  listMatchesHandler,
  updateMatchHandler,
} from "@/constrollers/matches.controller.js";
import {
  createMatchSchema,
  updateMatchSchema,
} from "@/validators/matches.validator.js";
import { validate } from "@/middlewares/validate.middleware.js";
import paramsValidation from "@/middlewares/params-validation.middleware.js";

const router = Router();

router
  .route("/")
  .get(listMatchesHandler)
  .post(validate({ body: createMatchSchema }), createMatchHandler);

router.param("id", paramsValidation);

router
  .route("/:id")
  .get(getMatchByIdHandler)
  .patch(validate({ body: updateMatchSchema }), updateMatchHandler)
  .delete(deleteMatchHandler);

export default router;
