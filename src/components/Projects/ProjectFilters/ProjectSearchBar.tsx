// MUI libraries
import { Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const ProjectSearchBar = () => {
  return (
    <Stack>
      <TextField
        placeholder="Search Projects"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            startAdornment: <SearchIcon fontSize="small" color="action" />
          }
        }}
        sx={{
            "& input": {
                fontSize: 14
            }
        }}
        aria-label="Project Search Bar"
      />

    </Stack>
  )
}

export default ProjectSearchBar
