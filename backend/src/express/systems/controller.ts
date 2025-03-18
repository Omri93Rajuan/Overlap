import { Response } from 'express';

import { TypedRequest } from '../../utils/zod';
import { SystemsManager } from './manager';
import { createOneRequestSchema, deleteOneRequestSchema, getCountRequestSchema, updateOneRequestSchema } from './validations';

export class SystemsController {
    static async createOne(req: TypedRequest<typeof createOneRequestSchema>, res: Response) {
        res.json(await SystemsManager.createOne(req.body));
    }

    static getCount = async (_req: TypedRequest<typeof getCountRequestSchema>, res: Response) => {
        res.json(await SystemsManager.getCount());
    };

    static async getOne(req: TypedRequest<typeof updateOneRequestSchema>, res: Response) {
        res.json(await SystemsManager.getOne(req.params.id));
    }

    static async updateOne(req: TypedRequest<typeof updateOneRequestSchema>, res: Response) {
        res.json(await SystemsManager.updateOne(req.params.id, req.body));
    }

    static async deleteOne(req: TypedRequest<typeof deleteOneRequestSchema>, res: Response) {
        res.json(await SystemsManager.deleteOne(req.params.id));
    }
}
