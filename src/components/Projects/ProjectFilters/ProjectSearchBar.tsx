// MUI libraries
import { Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

type ProjectSearchBarProps = {
    query: string;
    onQueryChange: (query: string) => void;
}

const ProjectSearchBar = ( { query, onQueryChange }: ProjectSearchBarProps ) => {
  return (
    <Stack>
      <TextField
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
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
