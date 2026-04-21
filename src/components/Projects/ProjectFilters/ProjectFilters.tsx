// Components
import ProjectStatusFilter from "./ProjectStatusFilter";

type ProjectFiltersProps = {
    statusOptions: string[];
    statuses: string[];
    onStatusesChange: (statuses: string[]) => void;
}

const ProjectFilters = ( { statusOptions, statuses, onStatusesChange }: ProjectFiltersProps ) => {
  return (
    <ProjectStatusFilter
        statusOptions={statusOptions}
        statuses={statuses}
        onStatusesChange={onStatusesChange}
    />
  )
}

export default ProjectFilters
