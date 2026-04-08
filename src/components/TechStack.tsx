import {
  BuildOutlined,
  CloudOutlined,
  CodeOutlined,
  LayersOutlined,
} from "@mui/icons-material";
import { Box, Chip, Grid, Stack, Typography } from "@mui/material"
import { useContext, type JSX } from "react"
import type { TechStack as TeamTechStack } from "../types/team";
import { TeamContext } from "./Team";

const emptyTechStack: TeamTechStack = {
  languages: [],
  frameworks: [],
  tools: [],
  platforms: [],
};

const techStackMeta: Record<keyof TeamTechStack, { label: string; icon: JSX.Element }> = {
  languages: {
    label: "Languages",
    icon: <CodeOutlined fontSize="small" />,
  },
  frameworks: {
    label: "Frameworks",
    icon: <LayersOutlined fontSize="small" />,
  },
  tools: {
    label: "Tools",
    icon: <BuildOutlined fontSize="small" />,
  },
  platforms: {
    label: "Platforms",
    icon: <CloudOutlined fontSize="small" />,
  },
};

const TechStack = () => {
  const techStack = useContext(TeamContext)?.techStack ?? emptyTechStack;
  const techStackEntries = Object.entries(techStack) as Array<[keyof TeamTechStack, string[]]>;

  return (
    <Grid container alignItems="stretch" sx={{ px: { xs: 1.5, sm: 2, md: 3 }, mt: 0.7 }}>
        {/* Tech stack content goes here */}
        {techStackEntries.map(([category, items]) => (
          <Grid key={category} size={{ xs: 12, sm: 6, md: 4}} sx={{ display: "flex" }}>
            <Stack sx={{ height: "100%", width: "100%"}} spacing={1} p={2} >
              <Stack direction="row" spacing={1} alignItems="center">
                <Box sx={{ color: "primary.main", lineHeight: 0 }}>
                  {techStackMeta[category].icon}
                </Box>
                <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                  {techStackMeta[category].label}
                </Typography>
              </Stack>
              <Box sx={{mt: 1}}>
                {items.length > 0 ? (
                  items.map((item) => (
                    <Chip key={item} label={item} sx={{ mr: 1, mb: 1 }} />
                  ))
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    No technologies listed.
                  </Typography>
                )}
              </Box>
            </Stack>
          </Grid> 
        ))}
    </Grid>
  )
}

export default TechStack
