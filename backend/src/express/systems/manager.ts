import { System, SystemDocument } from './interface';
import { SystemsService } from './service';
import { DocumentNotFoundError, InvalidSystemError } from '../../utils/errors';

export class SystemsManager {
    static async createOne(system: Partial<System>): Promise<SystemDocument> {
        if (!system || Object.keys(system).length === 0) {
            throw new InvalidSystemError('System data is missing or invalid');
        }
        return SystemsService.createOne(system);
    }

    static async updateOne(systemId: string, update: Partial<System>): Promise<SystemDocument> {
        if (!update || Object.keys(update).length === 0) {
            throw new InvalidSystemError('Update data is missing or invalid');
        }
        return SystemsService.updateOne(systemId, update);
    }

    static async deleteOne(systemId: string): Promise<SystemDocument> {
        return SystemsService.deleteOne(systemId).catch(() => {
            throw new DocumentNotFoundError(`System with ID ${systemId} not found`);
        });
    }

    static async getOne(systemId: string): Promise<SystemDocument> {
        return SystemsService.getOne(systemId).catch(() => {
            throw new DocumentNotFoundError(`System with ID ${systemId} not found`);
        });
    }

    static async getCount(): Promise<number> {
        return SystemsService.getCount();
    }
}
