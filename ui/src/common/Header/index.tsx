import LeftSide from './leftSide';
import RightSide from './rightSide';
import { Box } from '@mui/material';

export default function Header() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
            }}
        >
            <RightSide />
            <LeftSide />
        </Box>
    );
}
