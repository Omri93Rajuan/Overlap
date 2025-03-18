import { usersRouter } from './features/router.js';

import { Router } from 'express';

export const appRouter = Router();

appRouter.use('/api/users', usersRouter);

appRouter.use(['/isAlive', '/isalive', '/health'], (_req, res) => {
    res.status(200).send('alive');
});

appRouter.use('*', (_req, res) => {
    res.status(404).send('Invalid Route');
});
