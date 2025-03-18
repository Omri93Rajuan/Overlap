import { Box, Card, CardActionArea, CardContent, CircularProgress, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface IService {
    _id: string;
    systemName: string;
    isActive: boolean;
}

const SystemTable: React.FC = () => {
    const [data, setData] = useState<IService[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/systems', { withCredentials: true })
            .then((response) => setData(response.data))
            .catch((error) => console.error('Error fetching data:', error))
            .finally(() => setLoading(false));
    }, []);

    const toggleSystemStatus = async (id: string) => {
        try {
            const currentSystem = data.find((item) => item._id === id);
            if (!currentSystem) return;

            const newStatus = !currentSystem.isActive;

            setData((prevData) => prevData.map((item) => (item._id === id ? { ...item, isActive: newStatus } : item)));

            await axios.put(`http://localhost:8000/api/systems/${id}`, { isActive: newStatus }, { withCredentials: true });
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                console.error('Server response:', error.response.data);
            }
            setData((prevData) => prevData.map((item) => (item._id === id ? { ...item, isActive: !item.isActive } : item)));
        }
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" marginTop={5}>
                <CircularProgress color="primary" />
            </Box>
        );
    }

    return (
        <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center" padding={2}>
            {data.map((item) => (
                <Box key={item._id} width={220} marginBottom={3}>
                    <Card
                        onClick={() => toggleSystemStatus(item._id)}
                        sx={{
                            backgroundColor: item.isActive ? '#4CAF50' : '#8B4513',
                            textAlign: 'center',
                            padding: 1,
                            height: 200,
                            width: '100%',
                            borderRadius: 6,
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transition: 'transform .2s, box-shadow .2s',
                            '&:hover': {
                                transform: 'scale(1.03)',
                                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
                                cursor: 'pointer',
                            },
                        }}
                    >
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="h6" noWrap sx={{ fontWeight: 'bold', color: '#FFFFFF', marginBottom: 1 }}>
                                    {item.systemName}
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: 14, color: '#FFFFFF', fontWeight: 500 }}>
                                    {item.isActive ? '✅ פעיל' : '❌ לא פעיל'}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            ))}
        </Box>
    );
};

export default SystemTable;
