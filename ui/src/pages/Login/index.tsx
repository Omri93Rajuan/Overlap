import cookies from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import { environment } from '../../globals';

export default function LoginPage() {
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        const token = cookies.get(environment.accessTokenName);

        if (token || user) {
            navigate('/home');
        } else {
            const loginUrl = '/api/auth/login?RelayState=http://localhost:8000/';

            window.location.href = loginUrl;
        }
    }, [navigate, user]);

    return null;
}
