import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

import Header from '../../common/Header';
import SystemTable from '../../common/SystemTable';

export default function HomePage() {
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // מרכז את התוכן בגובה המסך
                padding: 0, // מבטל רווחים נוספים
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1200px',
                    padding: 4, // מרווח פנימי נעים
                    borderRadius: 4, // פינות מעוגלות עדינות
                    backgroundColor: '#ffffff', // רקע בהיר ונקי
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // הצללה עדינה כדי להפריד את האלמנטים מהדף
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    '&:hover': {
                        boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)', // הצללה חזקה יותר בעת Hover
                    },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: 4, // תואם את הבורדר רדיוס של הקופסה
                        border: '2px solid transparent',
                        background: 'linear-gradient(90deg, #FFD800, #2B332A) border-box', // גרדיאנט מהצהוב לירוק כהה
                        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'destination-out',
                        maskComposite: 'exclude',
                        pointerEvents: 'none', // מאפשר אינטראקציות עם התוכן שמתחת
                    },
                }}
            >
                <Header />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    style={{
                        width: '100%',
                        marginTop: '2rem',
                    }}
                >
                    <SystemTable />
                </motion.div>
            </Box>
        </Container>
    );
}
