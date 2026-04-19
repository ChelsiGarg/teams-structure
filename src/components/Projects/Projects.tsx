// React libraries
import { useState } from "react";

// MUI libraries
import { Stack } from "@mui/material"

// Components
import ProjectFilters from "./ProjectFilters/ProjectFilters";

const statusOptions = ["active", "inactive", "completed"];

const Projects = () => {
  const [statuses, setStatuses] = useState<string[]>([]);

  const handleStatusesChange = (nextStatuses: string[]) => {
    setStatuses(nextStatuses);
  };

  return (
    <Stack sx={{ p: 2, mt: 0.7 }} spacing={4}>

{/* ask copilot to give suitable comment here about the below section */}
      <ProjectFilters
        statusOptions={statusOptions}
        statuses={statuses}
        onStatusesChange={handleStatusesChange}
      />

    </Stack>
  )
}

export default Projects
