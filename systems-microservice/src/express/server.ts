import { errorMiddleware } from '../utils/express/error.js';
import { loggerMiddleware } from '../utils/logger/middleware.js';
import { appRouter } from './router.js';
import { once } from 'events';
import helmet from 'helmet';
import http from 'http';
import cors from 'cors';

import express from 'express';

export class Server {
    private app: express.Application;

    private http?: http.Server;

    constructor(private port: number) {
        this.app = Server.createExpressApp();
    }

    static createExpressApp() {
        const app = express();

        app.use(helmet());
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        app.use(
            cors({
                origin: [/^http:\/\/localhost(:\d+)?$/], // Regex to allow any localhost port
                credentials: true,
            }),
        );

        app.use(loggerMiddleware);
        app.use(appRouter);

        app.use(errorMiddleware);

        return app;
    }

    async start() {
        this.http = this.app.listen(this.port);
        await once(this.http, 'listening');
    }
}
