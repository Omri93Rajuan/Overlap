import env from 'env-var';

import 'dotenv/config';

export const config = {
    service: {
        port: env.get('PORT').required().asPortNumber(),
    },
    mongo: {
        uri: env.get('MONGO_URI').required().asString(),
        systemsCollectionName: env.get('SYSYEMS_COLLECTION_NAME').required().asString(),
    },
};
