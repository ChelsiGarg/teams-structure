// React libraries
import { useState } from "react";

// MUI libraries
import { Chip, MenuItem, Stack, TextField } from "@mui/material"

const statusOptions = ["active", "inactive", "completed"];

const Projects = () => {
  const [statuses, setStatuses] = useState<string[]>([]);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setStatuses(typeof value === 'string' ? value.split(',') : value);
  }

  renderSelectedValue: (selected) => {
    const values = selected as string[];

    if(values.length === 0) {
      return "Select status";
    }

    if(values.length === statusOptions.length) {
      return "All statuses";
    }

    return(
      <Stack direction="row" spacing={1} display="flex" flexWrap="wrap">
        {values.map((value) => (
          <Chip 
            key={value} 
            label={value.charAt(0).toUpperCase() + value.slice(1)} />
        ))}
      </Stack>
    )
  }

  return (
    <Stack sx={{ p: 2, mt: 0.7 }} spacing={4}>

      {/* ask copilot to give suitable comment here about the below section */}
      <Stack direction="row" display="flex">
        <TextField 
          label="Status" 
          select 
          value={statuses}
          onChange={handleStatusChange}
          slotProps={{
            select: {
              multiple: true,
              renderValue: renderSelectedValue
            }
          }}
          sx={{ minWidth: 200}}
        >
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </TextField>
      </Stack>

    </Stack>
  )
}

export default Projects
