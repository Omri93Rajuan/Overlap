import { config } from '../../config.js';
import { ISystem } from './interface.js';
import mongoose from 'mongoose';

const SystemSchema = new mongoose.Schema<ISystem>(
    {
        systemName: {
            type: String,
        },
        isActive: {
            type: Boolean,
        },
    },
    { timestamps: true },
);

export const SystemModel = mongoose.model<ISystem>(config.mongo.systemsCollectionName, SystemSchema);
