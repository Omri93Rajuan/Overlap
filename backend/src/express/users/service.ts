import axios from 'axios';

import { config } from '../../config';
import { User, UserDocument } from './interface';

const {
    users: { uri, baseRoute },
    service,
} = config;

export class UsersService {
    private static api = axios.create({ baseURL: `${uri}${baseRoute}`, timeout: service.requestTimeout, params: { expanded: true } });

    static async createOne(user: Partial<User>) {
        const { data } = await UsersService.api.post<UserDocument>('/', user);
        return data;
    }

    static async getById(id: string) {
        const { data } = await UsersService.api.get<UserDocument>(`/${id}`);
        return data;
    }

    static async findByGenesisId(genesisId: string) {
        const { data } = await UsersService.api.get<UserDocument>(`/genesis/${genesisId}`);
        return data;
    }

    static async updateOne(id: string, update: Partial<User>) {
        const { data } = await UsersService.api.put<UserDocument>(`/${id}`, update);
        return data;
    }

    static async deleteOne(id: string) {
        const { data } = await UsersService.api.delete<UserDocument>(`/${id}`);
        return data;
    }
}
