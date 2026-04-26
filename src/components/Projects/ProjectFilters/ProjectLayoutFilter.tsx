// MUI libraries
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

// MUI icons
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';

// types
import { type ProjectLayout } from "../Projects";

type ProjectLayoutFilterProps = {
  layout: ProjectLayout;
  onLayoutChange: (layout: ProjectLayout) => void;
}

const ProjectLayoutFilter = () => {

  const handleLayoutChange = (_event: React.MouseEvent<HTMLElement>, nextLayout: ProjectLayout) => {
    onLayoutChange(nextLayout);
    console.log(nextLayout);
  }

  return (
    <ToggleButtonGroup 
        exclusive
        aria-label = "project layout filter"
        onChange = {handleLayoutChange}
    >
        <ToggleButton value="grid" aria-label="grid"><GridViewIcon /></ToggleButton>
        <ToggleButton value="list" aria-label="list"><ViewListIcon /></ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ProjectLayoutFilter
