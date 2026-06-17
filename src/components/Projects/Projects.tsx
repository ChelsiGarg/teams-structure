// React libraries
import { use, useState } from "react";

// MUI libraries
import { Chip, Grid, Stack, Typography } from "@mui/material"

// Components
import ProjectFilters from "./ProjectFilters/ProjectFilters";
import { TeamContext } from "../Team";

const statusOptions = ["active", "inactive", "completed"];
export type ProjectLayout = "grid" | "list";

const Projects = () => {
  const [query, setQuery] = useState("");
  const [statuses, setStatuses] = useState<string[]>([]);
  const [layout, setLayout] = useState<ProjectLayout>("grid");

  const team = use(TeamContext);
  const projects = team?.projects || [];

  const handleQueryChange = (nextQuery: string) => {
    setQuery(nextQuery);
  };

  const handleStatusesChange = (nextStatuses: string[]) => {
    setStatuses(nextStatuses);
  };

  const handleLayoutChange = (nextLayout: ProjectLayout) => {
    setLayout(nextLayout);
  }

  const projectStatusChipColor = (status: string) => {
    switch (status) {
      case "Active": return "success";
      case "Inactive": return "warning";
      case "Completed": return "default";
      default: return "default";
    }
  }

  return (
    <Stack sx={{ p: 2, mt: 0.7 }} spacing={4} useFlexGap>

      {/* Project filters: search bar, status selection, layout toggle */}
        <ProjectFilters
          query={query}
          onQueryChange={handleQueryChange}
          statusOptions={statusOptions}
          statuses={statuses}
          onStatusesChange={handleStatusesChange}
          layout={layout}
          onLayoutChange={handleLayoutChange}
        />

      {/* Render projects based on selected filters and layout */}
      { projects.length === 0 ? (
        <Typography variant="h6" align="center">
          No projects found.
        </Typography>
      ) : (
        <Grid container spacing={2} >    { /* include shadow here to make it more card-like? */ }
          { projects.map((project) => (
            <Grid key = {project.id} size = {layout === "grid" ? {xs: 12, md: 6} : 12} sx={{ border: 1, borderColor: "divider", borderRadius: 2 }}>
              <Stack direction="row" spacing={2} sx={{ p:2, mb: 2 }}>   {/* stack has default display of flex, so we don't need to specify it here */}
                <Typography variant="h6" sx={{ flexGrow: 1}}>{project.name}</Typography>
                <Chip key={project.status} label={project.status} size="small" color={projectStatusChipColor(project.status)}/>
              </Stack>
              <Stack spacing={2} sx={{ p:2 }}>
                <Typography variant="body1" sx={{ mb: 3, flexGrow: 1 }}>{project.description}</Typography>   {/* even after using flexGrow, the description is still not taking up all the space. */}
                <Typography variant="body2" color="text.secondary">Tech Used</Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                  { project.techUsed.map((tech) => (
                    <Chip key={tech} label={tech} size="small" color="secondary"/>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          ))}

        </Grid>
      )}
    </Stack>
  )
}

export default Projects
