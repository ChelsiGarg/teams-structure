// MUI libraries
import { Box, ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";

// MUI icons
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';

// types
import { type ProjectLayout } from "../Projects";

type ProjectLayoutFilterProps = {
  layout: ProjectLayout;
  onLayoutChange: (layout: ProjectLayout) => void;
}

const ProjectLayoutFilter = ({ layout, onLayoutChange }: ProjectLayoutFilterProps) => {

  const handleLayoutChange = (_event: React.MouseEvent<HTMLElement>, nextLayout: ProjectLayout) => {
    onLayoutChange(nextLayout);
    console.log(nextLayout);
  }

  return (
    <ToggleButtonGroup 
        value = {layout}
        color="primary"
        exclusive
        aria-label = "project layout filter"
        onChange = {handleLayoutChange}
        size = "small"
        sx={{
          "& .MuiToggleButton-root": {
            border: "1px solid",
            borderColor: "secondary.main",
            borderRadius: "4px",
          },
          "& .Mui-selected": {
              backgroundColor: "primary.main",
              color: "primary.contrastText",
            },
          "& .MuiToggleButton-root:hover": {
              backgroundColor: "primary.light",
              color: "primary.contrastText",
          }
        }}
    >
        <ToggleButton 
          value="grid" 
          aria-label="grid"
          sx={{ textTransform: "none" }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <GridViewIcon />
              <Typography variant="body2" fontWeight="700">Grid</Typography>
            </Box>
        </ToggleButton>
        <ToggleButton 
          value="list" 
          aria-label="list"
          sx={{ textTransform: "none" }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <ViewListIcon />
              <Typography variant="body2" fontWeight="700">List</Typography>
            </Box>
        </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ProjectLayoutFilter
