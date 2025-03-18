import { TypedRequest } from '../../utils/zod.js';
import { SystemsManager } from './manager.js';
import {
    createOneRequestSchema,
    deleteOneRequestSchema,
    getAllQueryRequestSchema,
    getCountRequestSchema,
    getOneRequestSchema,
    updateOneRequestSchema,
} from './validations.js';

import { Response } from 'express';

export class SystemsController {
    static getAll = async (_req: TypedRequest<typeof getAllQueryRequestSchema>, res: Response) => {
        res.json(await SystemsManager.getAllQuery());
    };
    static getOne = async (req: TypedRequest<typeof getOneRequestSchema>, res: Response) => {
        res.status(202).json(await SystemsManager.getOneById(req.params.id));
    };
    static getCount = async (req: TypedRequest<typeof getCountRequestSchema>, res: Response) => {
        res.json(await SystemsManager.getSystemsCount(req.query));
    };

    static createOne = async (req: TypedRequest<typeof createOneRequestSchema>, res: Response) => {
        res.status(202).json(await SystemsManager.createOne(req.body));
    };

    static updateOne = async (req: TypedRequest<typeof updateOneRequestSchema>, res: Response) => {
        res.status(202).json(await SystemsManager.updateOne(req.params.id, req.body));
    };

    static deleteOne = async (req: TypedRequest<typeof deleteOneRequestSchema>, res: Response) => {
        res.status(202).json(await SystemsManager.deleteOne(req.params.id));
    };
}
