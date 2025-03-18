import { Box, Button, Typography } from '@mui/material';

import { useAuth } from '../../contexts/AuthContext';

const UserHeader: React.FC = () => {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                {user ? `שלום, ${user.name.firstName} ${user.name.lastName}` : 'שלום, אורח'}
            </Typography>

            {user && (
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleLogout}
                    sx={{
                        mt: 2,
                        padding: '8px 16px',
                        borderRadius: 2,
                        fontWeight: 'bold',
                        textTransform: 'none',
                    }}
                >
                    התנתק
                </Button>
            )}
        </Box>
    );
};

export default UserHeader;
