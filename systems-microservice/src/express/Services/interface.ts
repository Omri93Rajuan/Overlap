import { Types } from 'mongoose';

/* v8 ignore start */
export interface ISystem {
    systemName: string;
    isActive: boolean;
}

export interface ISystemDocument extends ISystem {
    _id: string | Types.ObjectId;
}
