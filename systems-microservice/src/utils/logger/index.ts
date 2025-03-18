import * as winston from 'winston';

export const logger = winston.createLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        winston.format.printf(({ level, message, timestamp }) => `${timestamp} [${level}] ${message}`),
    ),
});
