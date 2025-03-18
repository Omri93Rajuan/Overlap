import { z } from 'zod';

import { zodMongoObjectId } from '../../utils/zod';

const requiredFields = z
    .object({
        isActive: z.boolean(),
    })
    .required();

// POST /api/systems
export const createOneRequestSchema = z.object({
    body: requiredFields,
    query: z.object({}),
    params: z.object({}),
});

// PUT /api/systems/:id
export const updateOneRequestSchema = z.object({
    body: requiredFields,
    query: z.object({}),
    params: z.object({
        id: zodMongoObjectId,
    }),
});

// DELETE /api/systems/:id
export const deleteOneRequestSchema = z.object({
    body: z.object({}),
    query: z.object({}),
    params: z.object({
        id: zodMongoObjectId,
    }),
});
// GET /api/features/count

export const getCountRequestSchema = z.object({
    body: z.object({}),
    query: requiredFields.partial(),
    params: z.object({}),
});
