/* eslint-disable no-return-await */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-dupe-class-members */

import { User, UserDocument } from './interface';
import { UsersService } from './service';

export class UsersManager {
    static async createOne(user: Partial<User>): Promise<UserDocument>;
    static async createOne(user: Partial<User>): Promise<UserDocument> {
        return await UsersService.createOne(user);
    }

    static async updateOne<T extends boolean>(id: string, update: Partial<User>, genesisId: string): Promise<UserDocument>;
    static async updateOne(userId: string, update: Partial<User>, genesisId: string): Promise<UserDocument> {
        const user = await UsersService.getById(genesisId);
        if (user.isAdmin) {
            return await UsersService.updateOne(userId, update);
        }

        throw new Error('Access denied: User must be an admin.');
    }
    static async deleteOne<T extends boolean>(userId: string): Promise<UserDocument>;
    static async deleteOne(userId: string): Promise<UserDocument> {
        return await UsersService.deleteOne(userId);
    }
}
