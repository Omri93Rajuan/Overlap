import { System, SystemDocument } from './interface';
import { SystemsService } from './service';

export class SystemsManager {
    static async createOne(system: Partial<System>): Promise<SystemDocument> {
        return SystemsService.createOne(system);
    }

    static async updateOne(systemId: string, update: Partial<System>): Promise<SystemDocument> {
        return SystemsService.updateOne(systemId, update);
    }

    static async deleteOne(systemId: string): Promise<SystemDocument> {
        return SystemsService.deleteOne(systemId);
    }

    static async getOne(systemId: string): Promise<SystemDocument> {
        return SystemsService.getOne(systemId);
    }

    static async getCount(): Promise<SystemDocument> {
        return SystemsService.getCount();
    }
}
