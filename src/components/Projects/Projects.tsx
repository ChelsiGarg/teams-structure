// React libraries
import { useState } from "react";

// MUI libraries
import { Chip, MenuItem, Stack, TextField, Typography } from "@mui/material"
import ProjectFilters from "./ProjectFilters";

const statusOptions = ["active", "inactive", "completed"];

const Projects = () => {
  const [statuses, setStatuses] = useState<string[]>([]);

  // const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   setStatuses(typeof value === 'string' ? value.split(',') : value);
  // }

  // const handleChipDelete = (valueToDelete: string) => {
  //   setStatuses((prevChipStatuses) => prevChipStatuses.filter((chipStatus) => chipStatus !== valueToDelete));
  // }

  // const renderSelectedValue = (selected: unknown) => {
  //   const values = selected as string[];

  //   if(values.length === 0) {
  //     return <Typography variant="body2" sx={{ color: "text.disabled" }}>Select status</Typography>;
  //   }

  //   if(values.length === statusOptions.length) {
  //     return <Typography variant="body2">All Status</Typography>;
  //   }

  //   return(
  //     <Stack direction="row" spacing={1} display="flex" flexWrap="wrap" useFlexGap>   
  //       {values.map((value) => (
  //         <Chip 
  //           key={value} 
  //           label={value.charAt(0).toUpperCase() + value.slice(1)} 
  //           color="secondary"
  //           onDelete={() => handleChipDelete(value)}
  //           onMouseDown={(e) => {
  //             e.stopPropagation();
  //           }}
  //         />
  //       ))}
  //     </Stack>
  //   )
  // }

  return (
    <Stack sx={{ p: 2, mt: 0.7 }} spacing={4}>

      <ProjectFilters
        statusOptions={statusOptions}
        statuses={statuses}
        setStatuses={setStatuses}
      />

      {/* ask copilot to give suitable comment here about the below section */}
      {/* <Stack direction="row" display="flex" useFlexGap>
        <TextField 
          label="Status"
          select 
          value={statuses}
          size="small"
          onChange={handleStatusChange}
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
      </Stack> */}

    </Stack>
  )
}

export default Projects
