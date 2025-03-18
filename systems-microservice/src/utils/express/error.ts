import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { SystemsError } from '../errors.js';

export const errorMiddleware = (error: Error, _req: Request, res: Response, next: NextFunction) => {
    if (error instanceof ZodError) {
        res.status(400).send({
            type: error.name,
            message: fromZodError(error).message,
        });
    } else if (error instanceof SystemsError) {
        res.status(error.code).send({
            type: error.name,
            message: error.message,
        });
    } else {
        res.status(500).send({
            type: error.name,
            message: error.message,
        });
    }
    next();
};
