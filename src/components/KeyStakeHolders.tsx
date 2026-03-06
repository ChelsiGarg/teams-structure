// MUI components
import { Box, Paper, Stack, Typography } from "@mui/material"

// Types
import type { Stakeholder } from "../types/team";

type KeyStakeHoldersProps = {
    stakeholders: Stakeholder[] | undefined;
}

const KeyStakeHolders = ({stakeholders}: KeyStakeHoldersProps) => {
  return (
    <Box sx={{ position:"relative", mt: 8, mb: 6, width: 'fit-content', mx: 'auto' }}>
        {/* Floating title */}
        <Box
            sx={{
                position: "absolute",
                top: -22,
                left: "50%",    
                transform: "translateX(-50%)",
                bgcolor: "primary.main",
                color: "primary.contrastText",
                px: 3,
                py: 0.5,
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: 2,
                whiteSpace: 'nowrap',
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
                spacing={8}
                sx={{
                    px: 4,
                    pt: 3,
                    pb: 1,
                    justifyContent: 'center'
                }}
            >
                { stakeholders?.map(item => (
                    <Stack key={item.label} spacing={1} alignItems="center">
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
