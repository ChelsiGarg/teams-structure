// React libraries
import { useState } from "react";

// MUI libraries
import { Stack } from "@mui/material"

// Components
import ProjectFilters from "./ProjectFilters/ProjectFilters";

const statusOptions = ["active", "inactive", "completed"];
export type ProjectLayout = "grid" | "list";

const Projects = () => {
  const [statuses, setStatuses] = useState<string[]>([]);
  const [layout, setLayout] = useState<ProjectLayout>("grid");

  const handleStatusesChange = (nextStatuses: string[]) => {
    setStatuses(nextStatuses);
  };

  const handleLayoutChange = (nextLayout: ProjectLayout) => {
    setLayout(nextLayout);
  }

  return (
    <Stack sx={{ p: 2, mt: 0.7 }} spacing={4}>

{/* ask copilot to give suitable comment here about the below section */}
      <ProjectFilters
        statusOptions={statusOptions}
        statuses={statuses}
        onStatusesChange={handleStatusesChange}
        layout={layout}
        onLayoutChange={handleLayoutChange}
      />

    </Stack>
  )
}

export default Projects
