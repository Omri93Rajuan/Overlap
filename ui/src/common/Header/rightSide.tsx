import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RightSide: React.FC = () => {
    const [totalServices, setTotalServices] = useState(0);

    useEffect(() => {
        axios
            .get('/api/systems/count', {
                withCredentials: true,
            })
            .then((response) => {
                setTotalServices(response.data);
            })
            .catch((error) => console.error('Error fetching services:', error));
    }, []);

    return (
        <Box>
            <Typography>Test</Typography>
            <Typography variant="subtitle1">Total services: {totalServices}</Typography>
        </Box>
    );
};

export default RightSide;
