import { DocumentNotFoundError } from '../../utils/errors.js';
import { User, UserDocument } from './interface.js';
import { UsersModel } from './model.js';

export class UsersManager {
    static getByQuery = async (query: Partial<User>, step: number, limit: number): Promise<UserDocument[]> => {
        return UsersModel.find(query).skip(step).limit(limit).lean().exec();
    };

    static getById = async (userId: string): Promise<UserDocument> => {
        return UsersModel.findById(userId).orFail(new DocumentNotFoundError(userId)).lean().exec();
    };

    static getByGenesisId = async (genesisId: string): Promise<UserDocument> => {
        return UsersModel.findOne({ genesisId }).orFail(new DocumentNotFoundError(genesisId)).lean().exec();
    };

    static createOne = async (user: User): Promise<UserDocument> => {
        const existingUser = await UsersModel.findOne({ genesisId: user.genesisId }).lean().exec();
        if (existingUser) {
            throw new Error('User already exists');
        }
        return UsersModel.create(user);
    };

    static updateOne = async (userId: string, update: Partial<User>): Promise<UserDocument> => {
        return UsersModel.findByIdAndUpdate(userId, update, { new: true }).orFail(new DocumentNotFoundError(userId)).lean().exec();
    };

    static deleteOne = async (userId: string): Promise<UserDocument> => {
        return UsersModel.findByIdAndDelete(userId).orFail(new DocumentNotFoundError(userId)).lean().exec();
    };
}
