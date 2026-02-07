import { ApiError } from "@/utils/Api-response.js";
import { idValidators } from "@/validators/commann.validator.js";
import type { Request, Response, NextFunction } from "express";

export default function paramsValidation(
  req: Request,
  res: Response,
  next: NextFunction,
  id: string | number
) {
  const result = idValidators.safeParse(id);
  if (!result.success) {
    throw new ApiError(400, "Invalid Id", {
      id: "Your Id are the wrong",
    });
  }
  next();
}
