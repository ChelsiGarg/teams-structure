// Components
import ProjectStatusFilter from "./ProjectStatusFilter";

type ProjectFiltersProps = {
    statusOptions: string[];
    statuses: string[];
    handleStatusesChange: (statuses: string[]) => void;
}

const ProjectFilters = ( { statusOptions, statuses, handleStatusesChange }: ProjectFiltersProps ) => {
  return (
    <ProjectStatusFilter
        statusOptions={statusOptions}
        statuses={statuses}
        handleStatusesChange={handleStatusesChange}
    />
  )
}

export default ProjectFilters
