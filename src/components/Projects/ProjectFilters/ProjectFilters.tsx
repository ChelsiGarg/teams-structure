// MUI libraries
import { Stack } from "@mui/material";

// Components
import ProjectStatusFilter from "./ProjectStatusFilter";
import ProjectSearchBar from "./ProjectSearchBar";

type ProjectFiltersProps = {
    statusOptions: string[];
    statuses: string[];
    onStatusesChange: (statuses: string[]) => void;
}

const ProjectFilters = ( { statusOptions, statuses, onStatusesChange }: ProjectFiltersProps ) => {
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
    </Stack>
  )
}

export default ProjectFilters
