import { DocumentNotFoundError } from '../../utils/errors.js';
import { ISystem, ISystemDocument } from './interface.js';
import { SystemModel } from './model.js';

export class SystemsManager {
    static getAllQuery = async (filter: Partial<ISystem> = {}): Promise<ISystemDocument[]> => {
        return await SystemModel.find(filter).lean().exec();
    };

    static getOneById = async (SystemId: string): Promise<ISystemDocument> => {
        return await SystemModel.findById(SystemId).orFail(new DocumentNotFoundError(SystemId)).lean().exec();
    };

    static getSystemsCount = async (filter: Partial<ISystem>): Promise<number> => {
        return SystemModel.countDocuments(filter).lean().exec();
    };

    static createOne = async (System: ISystem): Promise<ISystemDocument> => {
        return await SystemModel.create(System);
    };

    static updateOne = async (SystemId: string, System: Partial<ISystem>): Promise<ISystemDocument> => {
        return await SystemModel.findByIdAndUpdate(SystemId, System, { new: true }).orFail(new DocumentNotFoundError(SystemId)).lean().exec();
    };

    static deleteOne = async (SystemId: string): Promise<ISystemDocument> => {
        return await SystemModel.findByIdAndDelete(SystemId).orFail(new DocumentNotFoundError(SystemId)).lean().exec();
    };
}
