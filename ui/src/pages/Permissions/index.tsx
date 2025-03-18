import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

export default function PermissionsPage() {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user, navigate]);

    return (
        <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Paper elevation={6} sx={{ p: 4, textAlign: 'center', bgcolor: '#2E3B2E', color: '#FFD700', borderRadius: 2 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    גישה מוגבלת
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ color: '#DDDDDD' }}>
                    עליך להתחבר כדי להמשיך
                </Typography>
                <Box mt={3}>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate('/login')}
                        sx={{
                            backgroundColor: '#FFD700',
                            color: '#2E3B2E',
                            fontWeight: 'bold',
                            '&:hover': { backgroundColor: '#E6C200' },
                        }}
                    >
                        🔒 לחץ כאן להתחברות
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
