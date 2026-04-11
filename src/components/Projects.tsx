// React libraries
import { useState } from "react";

// MUI libraries
import { MenuItem, Stack, TextField } from "@mui/material"


const Projects = () => {
  const [statuses, setStatuses] = useState<string[]>([]);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setStatuses(typeof value === 'string' ? value.split(',') : value);
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
              multiple: true
            }
          }}
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
