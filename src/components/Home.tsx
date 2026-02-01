// React lib
import { Grid } from "@mui/material";

// Components
import TeamCard from "./TeamCard";

// Mock Data and its types
import teamsData from "../mock/db.json";
import type { Team } from "../types/team";

const teams = teamsData as Team[];

const Home = () => {
  return (
    <Grid container spacing={2} my={4} mx={6}>
      {
        teams.map(team => (
          <Grid size={{xs: 12, sm: 6, md: 4}}  key={team.id}>
            <TeamCard 
              logo = {team.logo}
              name = {team.name}
              summary = {team.summary}
            />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Home
