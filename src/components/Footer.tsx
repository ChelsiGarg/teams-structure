// React libraries
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
        component="footer"
        sx = {{
            width: "100%",
            py: 1.5,
            borderTop: "1px solid",
            borderColor: "divider",
            backgroundColor: (theme) => theme.palette.grey[300],
            textAlign: "center"
        }}
    >
        <Typography variant="body2" color="text.secondary">
            © 2026 Data Analytics Platform | Version 1.0.0
        </Typography>
    </Box>
  )
}

export default Footer
