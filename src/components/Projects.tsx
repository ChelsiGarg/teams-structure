// MUI libraries
import { MenuItem, Stack, TextField } from "@mui/material"

const Projects = () => {
  return (
    <Stack sx={{ p: 2, mt: 0.7 }} spacing={4}>

      {/* ask copilot to give suitable comment here about the below section */}
      <Stack direction="row" display="flex">
        <TextField 
          label="Status" 
          select 
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
