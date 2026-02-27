// React lib
import React, { useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom"
import { Box, Drawer, IconButton, List, ListItemButton, ListItemText, Typography } from "@mui/material";
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
            <IconButton onClick={() => setIsDrawerOpen(true)} color="inherit" aria-label="menu-button">
              <MenuIcon />
            </IconButton>
            <Drawer 
              anchor="left"  
              open={ isDrawerOpen } 
              onClose={() => setIsDrawerOpen(false)} 
            >
              <Box width="250px" textAlign="center">
                <Typography variant="h6" component="div">Menu</Typography>
                <List>
                  <ListItemButton component={NavLink} to="overview" onClick={() => setIsDrawerOpen(false)}>
                    <ListItemText primary="Overview" />
                  </ListItemButton>
                  <ListItemButton component={NavLink} to="members" onClick={() => setIsDrawerOpen(false)}>
                    <ListItemText primary="Members" />
                  </ListItemButton>
                  <ListItemButton component={NavLink} to="techStack" onClick={() => setIsDrawerOpen(false)}>
                    <ListItemText primary="Tech Stack" />
                  </ListItemButton>
                  <ListItemButton component={NavLink} to="projects" onClick={() => setIsDrawerOpen(false)}>
                    <ListItemText primary="Projects" />
                  </ListItemButton>
                  <ListItemButton component={NavLink} to="responsibilities" onClick={() => setIsDrawerOpen(false)}>
                    <ListItemText primary="Responsibilities" />
                  </ListItemButton>
                </List>
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
