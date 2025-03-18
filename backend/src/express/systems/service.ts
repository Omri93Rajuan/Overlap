import axios from 'axios';

import { config } from '../../config';
import { System, SystemDocument } from './interface';

const {
    systems: { uri, baseRoute },
    service,
} = config;

export class SystemsService {
    private static api = axios.create({ baseURL: `${uri}${baseRoute}`, timeout: service.requestTimeout });

    static async createOne(system: Partial<System>) {
        const { data } = await SystemsService.api.post<SystemDocument>(`/`, system);
        return data;
    }

    static async updateOne(systemId: string, update: Partial<System>) {
        const { data } = await SystemsService.api.put<SystemDocument>(`/${systemId}`, update);
        return data;
    }

    static async deleteOne(systemId: string) {
        const { data } = await SystemsService.api.delete<SystemDocument>(`/${systemId}`);
        return data;
    }

    static async getOne(systemId: string) {
        const { data } = await SystemsService.api.get<SystemDocument>(`/${systemId}`);
        return data;
    }

    static async getCount() {
        const { data } = await SystemsService.api.get<SystemDocument>('/count');
        return data;
    }
}
