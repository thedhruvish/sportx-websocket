import { Router } from "express";
import {
  createTeamHandler,
  deleteTeamHandler,
  getTeamByIdHandler,
  listTeamsHandler,
  updateTeamHandler,
} from "@/constrollers/teams.controller.js";
import {
  createTeamSchema,
  updateTeamSchema,
} from "@/validators/teams.validator.js";
import { validate } from "@/middlewares/validate.middleware.js";
import paramsValidation from "@/middlewares/params-validation.middleware.js";

const router = Router();

router
  .route("/")
  .get(listTeamsHandler)
  .post(validate({ body: createTeamSchema }), createTeamHandler);

router.param("id", paramsValidation);

router
  .route("/:id")
  .get(getTeamByIdHandler)
  .patch(validate({ body: updateTeamSchema }), updateTeamHandler)
  .delete(deleteTeamHandler);

export default router;
