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

const navItems = [
  { path: "overview", label: "Overview" },
  { path: "members", label: "Members" },
  { path: "techStack", label: "Tech Stack" },
  { path: "projects", label: "Projects" },
  { path: "responsibilities", label: "Responsibilities" },
];


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
              slotProps={{
                paper: {
                  sx: {
                    width: 250,
                    bgcolor: "secondary.main",
                    color: "secondary.contrastText"
                  }
                }
              }}
            >
              <Box textAlign="center">
                <Typography variant="h6" component="div">Menu</Typography>
                <List>
                  {navItems.map(item => (
                    <ListItemButton
                      component={NavLink}
                      to={item.path}
                      sx={{
                        "&.active": {
                          bgcolor: "primary.main",
                        }
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  ))}
                  
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
