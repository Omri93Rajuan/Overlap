import { config } from '../../config.js';
import { UserDocument } from './interface.js';
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema<UserDocument>(
    {
        userName: {
            type: String,
        },
        genesisId: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },

    { timestamps: true },
);

export const UsersModel = mongoose.model<UserDocument>(config.mongo.usersCollectionName, UserSchema);
