import env from 'env-var';
import 'dotenv/config';

export const config = {
    service: {
        port: env.get('PORT').required().asPortNumber(),
    },
    mongo: {
        uri:
            env.get('NODE_ENV').asString() === 'production'
                ? env.get('MONGO_URI_PROD').required().asString()
                : env.get('MONGO_URI_DEV').required().asString(),
        systemsCollectionName: env.get('SYSTEMS_COLLECTION_NAME').required().asString(),
    },
};
