// React libraries
import type React from "react";

// MUI libraries
import { Chip, MenuItem, Stack, TextField, Typography } from "@mui/material"

type ProjectStatusFilterProps = {
    statusOptions: string[];
    statuses: string[];
    onStatusesChange: (statuses: string[]) => void;
}

const ProjectStatusFilter = ({ statusOptions, statuses, onStatusesChange }: ProjectStatusFilterProps) => {

    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const newStatuses = typeof value === 'string' ? value.split(',') : value;
        onStatusesChange(newStatuses);
    };

    const handleChipDelete = (valueToDelete: string) => {
      const newStatuses = statuses.filter((status) => status !== valueToDelete);
      onStatusesChange(newStatuses);
    };

    const renderSelectedValue = (selected: unknown) => {
    const values = selected as string[];

    if(values.length === 0) {
      return <Typography variant="body2" sx={{ color: "text.disabled", fontSize: 14 }}>Select status</Typography>;
    }

    if(values.length === statusOptions.length) {
      return <Typography variant="body2">All Status</Typography>;
    }

    return(
      <Stack direction="row" spacing={1} display="flex" flexWrap="wrap" useFlexGap aria-label="Project Status Filters">   
        {values.map((value) => (
          <Chip 
            key={value} 
            label={value.charAt(0).toUpperCase() + value.slice(1)} 
            color="secondary"
            size="small"
            onDelete={() => handleChipDelete(value)}
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
          />
        ))}
      </Stack>
    )
  }

  return (
    <Stack direction="row" display="flex" useFlexGap>
      {/* work on to remove focus once we move out of status textfield */}
        <TextField 
          select 
          value={statuses}
          size="small"
          onChange={handleSelectChange}
          slotProps={{
            select: {
              multiple: true,
              displayEmpty: true,
              renderValue: renderSelectedValue
            },
          }}
          sx= {{
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
            }
          }}
        >
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </TextField>
      </Stack>
  )
}

export default ProjectStatusFilter
