// React libraries
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

// React Components
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <Box
        sx = {{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        }}
    >
        <Header />

        <Box component="main" sx={{ flex: 1 }}>
            <Outlet />
        </Box>

        <Footer />
    </Box>
  )
}

export default MainLayout
