import { Router } from "express";
import {
  createLiveEventHandler,
  deleteLiveEventHandler,
  getLiveEventByIdHandler,
  listLiveEventsHandler,
  updateLiveEventHandler,
} from "@/constrollers/live-devents.controller.js";
import {
  createLiveEventSchema,
  updateLiveEventSchema,
} from "@/validators/live-devents.validator.js";
import { validate } from "@/middlewares/validate.middleware.js";
import paramsValidation from "@/middlewares/params-validation.middleware.js";

const router = Router();

router
  .route("/")
  .get(listLiveEventsHandler)
  .post(validate({ body: createLiveEventSchema }), createLiveEventHandler);

router.param("id", paramsValidation);
router
  .route("/:id")
  .get(getLiveEventByIdHandler)
  .patch(validate({ body: updateLiveEventSchema }), updateLiveEventHandler)
  .delete(deleteLiveEventHandler);

export default router;
