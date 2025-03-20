export interface User {
    userName: string;
    genesisId: string;
    isAdmin: boolean;
}

export interface UserDocument extends User {
    _id: string;
}
