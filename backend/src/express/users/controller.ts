import { Response } from 'express';

import { TypedRequest } from '../../utils/zod';
import { UsersManager } from './manager';
import { createOneRequestSchema, deleteOneRequestSchema, updateOneRequestSchema } from './validations';

export class UsersController {
    static async createOne(req: TypedRequest<typeof createOneRequestSchema>, res: Response) {
        res.json(await UsersManager.createOne(req.body));
    }

    static async updateOne(req: TypedRequest<typeof updateOneRequestSchema>, res: Response) {
        res.json(await UsersManager.updateOne(req.params.id, req.body, req.user?.genesisId!));
    }

    static async deleteOne(req: TypedRequest<typeof deleteOneRequestSchema>, res: Response) {
        res.json(await UsersManager.deleteOne(req.params.id));
    }
}
