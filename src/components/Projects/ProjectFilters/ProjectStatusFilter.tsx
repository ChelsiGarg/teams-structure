// React libraries
import type React from "react";

// MUI libraries
import { Chip, MenuItem, Stack, TextField, Typography } from "@mui/material"

type ProjectStatusFilterProps = {
    statusOptions: string[];
    statuses: string[];
    handleStatusesChange: (statuses: string[]) => void;
}

const ProjectStatusFilter = ({ statusOptions, statuses, handleStatusesChange }: ProjectStatusFilterProps) => {

    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const newStatuses = typeof value === 'string' ? value.split(',') : value;
        handleStatusesChange(newStatuses);
    };

    const handleChipDelete = (valueToDelete: string) => {
      const newStatuses = statuses.filter((status) => status !== valueToDelete);
      handleStatusesChange(newStatuses);
    };

    const renderSelectedValue = (selected: unknown) => {
    const values = selected as string[];

    if(values.length === 0) {
      return <Typography variant="body2" sx={{ color: "text.disabled" }}>Select status</Typography>;
    }

    if(values.length === statusOptions.length) {
      return <Typography variant="body2">All Status</Typography>;
    }

    return(
      <Stack direction="row" spacing={1} display="flex" flexWrap="wrap" useFlexGap>   
        {values.map((value) => (
          <Chip 
            key={value} 
            label={value.charAt(0).toUpperCase() + value.slice(1)} 
            color="secondary"
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
        <TextField 
          label="Status"
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
            inputLabel: {
              shrink: true,
              sx: { fontWeight: "bold" }
            }
          }}
          sx= {{
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              pt: 1.5,
              pb: 0.9
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
