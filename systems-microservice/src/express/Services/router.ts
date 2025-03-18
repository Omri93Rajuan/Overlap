import { validateRequest, wrapController } from '../../utils/express/wrappers.js';
import { SystemsController } from './controller.js';
import {
    createOneRequestSchema,
    deleteOneRequestSchema,
    getAllQueryRequestSchema,
    getCountRequestSchema,
    getOneRequestSchema,
    updateOneRequestSchema,
} from './validations.js';

import { Router } from 'express';

export const systemsRouter = Router();

systemsRouter.get('/', validateRequest(getAllQueryRequestSchema), wrapController(SystemsController.getAll));

systemsRouter.get('/count', validateRequest(getCountRequestSchema), wrapController(SystemsController.getCount));

systemsRouter.get('/:id', validateRequest(getOneRequestSchema), wrapController(SystemsController.getOne));

systemsRouter.post('/', validateRequest(createOneRequestSchema), wrapController(SystemsController.createOne));

systemsRouter.put('/:id', validateRequest(updateOneRequestSchema), wrapController(SystemsController.updateOne));

systemsRouter.delete('/:id', validateRequest(deleteOneRequestSchema), wrapController(SystemsController.deleteOne));
