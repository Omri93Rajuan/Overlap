import { DocumentNotFoundError } from '../../utils/errors.js';
import { ISystem, ISystemDocument } from './interface.js';
import { SystemModel } from './model.js';

export class SystemsManager {
    static getAllQuery = async (): Promise<ISystemDocument[]> => {
        return await getAllSystems();
    };

    static getOneById = async (SystemId: string): Promise<ISystemDocument> => {
        return await SystemModel.findById(SystemId).orFail(new DocumentNotFoundError(SystemId)).lean().exec();
    };
    static getSystemsCount = async (System: Partial<ISystem>): Promise<number> => {
        return SystemModel.countDocuments(System).lean().exec();
    };

    static createOne = async (System: ISystem): Promise<ISystemDocument> => {
        return await (await SystemModel.create(System)).save();
    };

    static updateOne = async (SystemId: string, System: Partial<ISystem>): Promise<ISystemDocument> => {
        return await SystemModel.findByIdAndUpdate(SystemId, System, { new: true }).orFail(new DocumentNotFoundError(SystemId)).lean().exec();
    };

    static deleteOne = async (SystemId: string): Promise<ISystemDocument> => {
        return await SystemModel.findByIdAndDelete(SystemId).orFail(new DocumentNotFoundError(SystemId)).lean().exec();
    };
}

const getAllSystems = async () => {
    return await SystemModel.find().lean().exec();
};
