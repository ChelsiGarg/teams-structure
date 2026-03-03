// MUI components
import { Box, Paper, Stack, Typography } from "@mui/material"

// Types
import type { Stakeholder } from "../types/team";

type KeyStakeHoldersProps = {
    stakeholders: Stakeholder[] | undefined;
}

const KeyStakeHolders = ({stakeholders}: KeyStakeHoldersProps) => {
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
            }}
        >
            <Stack
                direction="row"
                spacing={4}
                sx={{
                    width: "100%",
                    px: 4  //horizontal margin inside paper
                }}
            >
                { stakeholders?.map(item => (
                    <Stack key={item.label} sx={{ flex: 1}}>
                        <Box
                            component="img"
                            src={item.icon}
                            alt={item.label}
                            sx={{
                            width: 40,
                            height: 40,
                            objectFit: "contain",
                            }}
                        />
                        <Typography variant="body2" component="div" fontWeight={500}>{item.label}</Typography>
                    </Stack>
                ))}
            </Stack>
        </Paper>

    </Box>
  )
}

export default KeyStakeHolders
