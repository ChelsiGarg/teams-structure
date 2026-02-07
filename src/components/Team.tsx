// React lib
import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

const Team = () => {
  return (
    <Box sx={{ bgcolor: "blue"}}>
      <Outlet />
    </Box>
  )
}

export default Team
