// React lib
import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom"
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"

// Component types
import type { TeamModel } from "../types/team";

// Selector to get specific team data
import { getTeamById } from "../mock/teams.selector";

// Component
import NotFound from "./NotFound";

export const TeamContext = React.createContext<TeamModel | undefined>(undefined);


const Team = () => {
  const params = useParams();
  const id = params.teamId;
  const team = getTeamById(id);

  const[isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {
        team ?
          <>
            <IconButton onClick={ ()=>setIsDrawerOpen(true) } color="inherit" aria-label="menu-button">
              <MenuIcon />
            </IconButton>
            <Drawer 
              anchor="left"  
              open={ isDrawerOpen } 
              onClose={ ()=>setIsDrawerOpen(false) } 
            >
              <Box width="250px" textAlign="center">
                <Typography variant="h6" component="div">Side Panel</Typography>
              </Box>
            </Drawer>          
            <TeamContext.Provider value={team}>
              <Outlet />
            </TeamContext.Provider>
          </>
        :
        <NotFound />
      }
    </>
    
  )
}

export default Team
