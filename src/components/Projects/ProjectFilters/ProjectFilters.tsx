// MUI libraries
import { Stack } from "@mui/material";

// Components
import ProjectStatusFilter from "./ProjectStatusFilter";
import ProjectSearchBar from "./ProjectSearchBar";
import ProjectLayoutFilter from "./ProjectLayoutFilter";

// types
import { type ProjectLayout } from "../Projects";

type ProjectFiltersProps = {
    statusOptions: string[];
    statuses: string[];
    onStatusesChange: (statuses: string[]) => void;
    layout: ProjectLayout;
    onLayoutChange: (layout: ProjectLayout) => void;
}

const ProjectFilters = ( { statusOptions, statuses, onStatusesChange, layout, onLayoutChange }: ProjectFiltersProps ) => {
  return (
    <Stack 
      direction={{ xs:"column", sm:"row" }} 
      spacing={2} 
      display="flex" 
      useFlexGap
      sx={{
        alignItems: { xs:"stretch", sm:"center" },
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
        }
      }}
      >
      <ProjectSearchBar />
      <ProjectStatusFilter
          statusOptions={statusOptions}
          statuses={statuses}
          onStatusesChange={onStatusesChange}
      />
      <ProjectLayoutFilter 
        layout={layout}
        onLayoutChange={onLayoutChange}
      />
    </Stack>
  )
}

export default ProjectFilters
