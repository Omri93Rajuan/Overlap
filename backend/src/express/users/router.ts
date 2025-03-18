import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware';

import { Router } from 'express';

import { config } from '../../config';
import { validateRequest, wrapController } from '../../utils/express/wrappers';
import { UsersController } from './controller';
import { createOneRequestSchema, deleteOneRequestSchema, updateOneRequestSchema } from './validations';

const {
    users: { uri },
    service,
} = config;

export const usersRouter = Router();

usersRouter.post('/', validateRequest(createOneRequestSchema), wrapController(UsersController.createOne));

usersRouter.put('/:id', validateRequest(updateOneRequestSchema), wrapController(UsersController.updateOne));

usersRouter.delete('/:id', validateRequest(deleteOneRequestSchema), wrapController(UsersController.deleteOne));

usersRouter.all('*', createProxyMiddleware({ target: uri, onProxyReq: fixRequestBody, proxyTimeout: service.requestTimeout }));
