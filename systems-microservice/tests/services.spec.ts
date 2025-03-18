/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { Express } from 'express';
import mongoose from 'mongoose';
import request from 'supertest';
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { config } from '../src/config.js';
import { Server } from '../src/express/server.js';

const { mongo } = config;
const fakeObjectId = '111111111111111111111111';

const removeAllCollections = async () => {
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName];
        await collection!.deleteMany({});
    }
};

describe('e2e services API testing', () => {
    let app: Express;

    beforeAll(async () => {
        await mongoose.connect(mongo.uri);
        app = Server.createExpressApp();
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    beforeEach(async () => {
        await removeAllCollections();
    });

    describe('/isAlive', () => {
        it('should return alive', async () => {
            const response = await request(app).get('/isAlive').expect(200);
            expect(response.text).toBe('alive');
        });
    });

    describe('/unknownRoute', () => {
        it('should return status code 404', async () => {
            return request(app).get('/unknownRoute').expect(404);
        });
    });

    describe('/api/systems', () => {
        const exampleService = { name: 'test', status: false };

        describe('GET /api/systems', () => {
            it('should get all the services', async () => {
                for (let i = 0; i < 3; i++) {
                    await request(app).post('/api/systems').send(exampleService).expect(202);
                }
                const { body } = await request(app).get('/api/systems').expect(200);
                expect(body.length).toBe(3);
            });
        });

        describe('POST /api/systems', () => {
            it('should create a new service', async () => {
                const { body: firstBody } = await request(app).get('/api/systems').expect(200);
                await request(app).post('/api/systems').send(exampleService).expect(202);
                const { body: afterBody } = await request(app).get('/api/systems').expect(200);

                expect(afterBody.length).toBeGreaterThan(firstBody.length);
            });

            it('should fail validation for missing fields', async () => {
                return request(app).post('/api/systems').send({}).expect(400);
            });
        });

        describe('PUT /api/systems/:id', () => {
            it('should update a service', async () => {
                const { body: service } = await request(app).post('/api/systems').send(exampleService).expect(202);
                const serviceId = service._id;
                const updateBody = { status: true };
                const { body } = await request(app).put(`/api/systems/${serviceId}`).send(updateBody).expect(202);
                expect(body.status).toBeTruthy();
            });

            it('should fail for getting a non-existing דטדאקצ', async () => {
                return request(app).put(`/api/systems/${fakeObjectId}`).expect(404);
            });
        });

        describe('DELETE /api/systems/:id', () => {
            it('should delete a service', async () => {
                const { body: service } = await request(app).post('/api/systems').send(exampleService).expect(202);
                const serviceId = service._id;
                await request(app).delete(`/api/systems/${serviceId}`).expect(202);
                const { body } = await request(app).get('/api/systems').expect(200);
                expect(body.length).toBe(0);
            });
        });
    });
});
