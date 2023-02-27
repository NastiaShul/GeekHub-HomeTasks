import { Request, Response, NextFunction } from "express";
import { HttpError } from "./errors/http.error";

export interface IExceptionFilter {
   catch(
      err: Error | HttpError,
      req: Request,
      res: Response,
      next: NextFunction
   ): void;
}