import type { Request, Response, NextFunction } from "express";

export class ApiResponse<T> {
  constructor(
    public readonly statusCode: number,
    public readonly message: string,
    public readonly data: T
  ) {}
}

export class ApiError extends Error {
  statusCode: number;
  errors?: unknown;

  constructor(
    statusCode: number,
    message: string,
    errors?: unknown,
    stack?: string
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export const sendResponse = <T>(
  res: Response,
  statusCode: number,
  message: string,
  data: T
) => {
  return res
    .status(statusCode)
    .json(new ApiResponse<T>(statusCode, message, data));
};

const isDev = process.env.NODE_ENV === "development";

export const errorMiddleware = (
  err: Error | ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = err instanceof ApiError ? err.statusCode : 500;

  const message =
    err instanceof ApiError ? err.message : "Internal Server Error";

  const errors = err instanceof ApiError ? err.errors : null;

  const response: Record<string, unknown> = {
    statusCode,
    message,
    errors,
  };

  // 👇 stack trace only in development
  if (isDev) {
    response.stack = err.stack;
  }

  return res.status(statusCode).json(response);
};
