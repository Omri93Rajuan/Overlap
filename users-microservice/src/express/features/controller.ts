import { Response } from 'express';
import { TypedRequest } from '../../utils/zod.js';
import { UsersManager } from './manager.js';
import {
    createOneRequestSchema,
    deleteOneRequestSchema,
    getByGenesisIdRequestSchema,
    getByIdRequestSchema,
    getByQueryRequestSchema,
    updateOneRequestSchema,
} from './validations.js';

export class UsersController {
    static getByQuery = async (req: TypedRequest<typeof getByQueryRequestSchema>, res: Response) => {
        const { step = 0, limit = 10, ...query } = req.query;

        res.json(await UsersManager.getByQuery(query, step, limit));
    };

    static getById = async (req: TypedRequest<typeof getByIdRequestSchema>, res: Response) => {
        res.json(await UsersManager.getById(req.params.id));
    };

    static getByGenesisId = async (req: TypedRequest<typeof getByGenesisIdRequestSchema>, res: Response) => {
        res.json(await UsersManager.getByGenesisId(req.params.genesisId));
    };

    static createOne = async (req: TypedRequest<typeof createOneRequestSchema>, res: Response) => {
        res.json(await UsersManager.createOne(req.body));
    };

    static updateOne = async (req: TypedRequest<typeof updateOneRequestSchema>, res: Response) => {
        res.json(await UsersManager.updateOne(req.params.id, req.body));
    };

    static deleteOne = async (req: TypedRequest<typeof deleteOneRequestSchema>, res: Response) => {
        res.json(await UsersManager.deleteOne(req.params.id));
    };
}
