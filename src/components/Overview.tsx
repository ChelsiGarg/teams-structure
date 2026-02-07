// React lib
import { useContext } from "react";

// MUI components
import { Grid } from "@mui/material";

// custom component
import { TeamContext } from "./Team";
import TeamCard from "./TeamCard";

const Overview = () => {
  const team = useContext(TeamContext);

  return (
    <>
      {
        team &&
        <Grid container spacing={2} sx={{my: 4, mx: 2}}>
          <Grid size={{xs: 12, md: 4}}>
            <TeamCard 
              id = {team.id}
              logo = {"/team-logos/role.png"}
              name = "Our Role"
              desc = {team.overview.description}
              showButton = {false}
            />
          </Grid>
          <Grid size={{xs: 12, md: 4}}>
            <TeamCard 
              id = {team.id}
              logo = {"/team-logos/mission.png"}
              name = "Our Mission"
              desc = {team.overview.mission}
              showButton = {false}
            />
          </Grid>
          <Grid size={{xs: 12, md: 4}}>
            <TeamCard 
              id = {team.id}
              logo = {"/team-logos/position.png"}
              name = "Our Position"
              desc = {team.overview.orgFit}
              showButton = {false}
            />
          </Grid>
        </Grid>
      }
    </>
  )
}

export default Overview
