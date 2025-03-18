import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware';

import { Router } from 'express';

import { config } from '../../config';
import { validateRequest, wrapController } from '../../utils/express/wrappers';
import { SystemsController } from './controller';
import { createOneRequestSchema, deleteOneRequestSchema, getCountRequestSchema, updateOneRequestSchema } from './validations';

const {
    systems: { uri },
    service,
} = config;

export const systemsRouter = Router();

systemsRouter.post('/', validateRequest(createOneRequestSchema), wrapController(SystemsController.createOne));

systemsRouter.get('/count', validateRequest(getCountRequestSchema), wrapController(SystemsController.getCount));

systemsRouter.get('/:id', validateRequest(updateOneRequestSchema), wrapController(SystemsController.updateOne));

systemsRouter.put('/:id', validateRequest(updateOneRequestSchema), wrapController(SystemsController.updateOne));

systemsRouter.delete('/:id', validateRequest(deleteOneRequestSchema), wrapController(SystemsController.deleteOne));

systemsRouter.all('*', createProxyMiddleware({ target: uri, onProxyReq: fixRequestBody, proxyTimeout: service.requestTimeout }));
