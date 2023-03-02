import { Request, Response, NextFunction, Router } from "express";
import { HttpError } from "./errors/http.error";

export interface IExceptionFilter {
   catch(
      err: Error | HttpError,
      req: Request,
      res: Response,
      next: NextFunction
   ): void;
}

export interface IControllerRoute {
   path: string;
   method: keyof Pick<Router, "get" | "post" | "delete" | "patch" | "put">
   handler: (req: Request, res: Response, next: NextFunction) => void;
   validators?: Validation;
}

export interface IConfig {
   app: {
      port: number;
   };
   db: {
      port: number;
      host: string;
      dbName: string;
   }
};

export type Validation = Record<string, any>;

