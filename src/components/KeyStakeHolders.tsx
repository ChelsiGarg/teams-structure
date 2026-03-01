// MUI components
import { Box, Paper } from "@mui/material"

const KeyStakeHolders = () => {
  return (
    <Box sx={{ position:"relative", mt: 8, mb: 6, mx: 20}}>
        {/* Floating title */}
        <Box
            sx={{
                position: "absolute",
                top: -16,
                left: "50%",    
                transform: "translateX(-50%)",
                bgcolor: "primary.main",
                color: "primary.contrastText",
                px: 3,
                py: 0.5,
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: 2,
            }}
        >
            Key Stakeholders
        </Box>

        <Paper
            sx={{
                border: "2px solid",
                borderRadius: 3,
                borderColor: "primary.main",
                height: "300px"
            }}
        >

        </Paper>
      
    </Box>
  )
}

export default KeyStakeHolders
