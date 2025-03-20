import { zodMongoObjectId } from '../../utils/zod.js';
import { z } from 'zod';

const requiredFields = z
    .object({
        userName: z.string(),
        genesisId: z.string(),
        isAdmin: z.boolean().default(false),
    })
    .required();

// GET /api/services
export const getByQueryRequestSchema = z.object({
    body: z.object({}),
    query: z
        .object({
            step: z.coerce.number().min(0).default(0),
            limit: z.coerce.number().optional(),
        })
        .merge(requiredFields.partial()),
    params: z.object({}),
});

// GET /api/users/:id
export const getByIdRequestSchema = z.object({
    body: z.object({}),
    query: z.object({}),
    params: z.object({
        id: zodMongoObjectId,
    }),
});

// GET /api/users/genesisId/:genesisId
export const getByGenesisIdRequestSchema = z.object({
    body: z.object({}),
    query: z.object({}),
    params: z.object({
        genesisId: z.string(),
    }),
});

// POST /api/users
export const createOneRequestSchema = z.object({
    body: requiredFields,
    query: z.object({}),
    params: z.object({}),
});

// PUT /api/users/:id
export const updateOneRequestSchema = z.object({
    body: requiredFields.partial(),
    query: z.object({}),
    params: z.object({
        id: zodMongoObjectId,
    }),
});

// DELETE /api/users/:id
export const deleteOneRequestSchema = z.object({
    body: z.object({}),
    query: z.object({}),
    params: z.object({
        id: zodMongoObjectId,
    }),
});
