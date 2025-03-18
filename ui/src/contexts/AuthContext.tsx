import cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { createContext, ReactNode, useContext, useState } from 'react';

import { environment } from '../globals';

interface User {
    id: string;
    genesisId: string;
    name: {
        firstName: string;
        lastName: string;
    };
}

interface AuthContextType {
    user: User | null;
    logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(() => {
        const accessToken = cookies.get(environment.accessTokenName);
        if (!accessToken) return null;

        try {
            return jwtDecode<User>(accessToken);
        } catch {
            return null;
        }
    });

    const logout = () => {
        cookies.remove(environment.accessTokenName);
        setUser(null);
    };

    return <AuthContext.Provider value={{ user, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
