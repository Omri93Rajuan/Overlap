import { Router } from 'express';
import passport from 'passport';
import { config } from '../config';

import { authenticationRouter } from './authentication/router';

import { usersRouter } from './users/router';
import { systemsRouter } from './systems/router';

export const appRouter = Router();

appRouter.use(['/isAlive', '/isalive', '/health'], (_req, res) => res.status(200).send('alive'));

appRouter.use(config.authentication.baseRoute, authenticationRouter);

if (config.authentication.isRequired) {
    appRouter.use(passport.authenticate('jwt', { session: false }));
} else {
    appRouter.use((req, _res, next) => {
        if (!req.user) req.user = {} as any;
        req.user!.genesisId = config.authentication.mockAuthenticatedUserId;
        next();
    });
}
appRouter.use(config.users.baseRoute, usersRouter);
appRouter.use(config.systems.baseRoute, systemsRouter);

appRouter.use('*', (_req, res) => res.status(404).send('Invalid Route'));
