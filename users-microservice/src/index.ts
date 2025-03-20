import mongoose from 'mongoose';
import { config } from './config.js';
import { Server } from './express/server.js';
import { logger } from './utils/logger/index.js';
import env from 'env-var';

const { mongo, service } = config;

const initializeMongo = async () => {
    const environment = env.get('NODE_ENV').default('development').asString();

    logger.info(`Connecting to Mongo... [Environment: ${environment}]`);

    try {
        await mongoose.connect(mongo.uri);
        logger.info(`Mongo connection established [${environment}]`);
    } catch (error) {
        logger.error(`Failed to connect to Mongo`);
        process.exit(1);
    }
};
const main = async () => {
    await initializeMongo();

    const server = new Server(service.port);

    await server.start();

    logger.info(`Server started on port: http://localhost:${service.port}`);
};

main().catch(logger.error);
