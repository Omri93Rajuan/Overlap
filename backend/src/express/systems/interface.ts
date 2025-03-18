export interface System {
    systemName: string;
    isActive: Boolean;
}

export interface SystemDocument extends System {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}
