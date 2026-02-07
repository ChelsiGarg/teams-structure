// React lib
import { Grid } from "@mui/material";

// Components
import TeamCard from "./TeamCard";

// Mock Data and its types
import teamsData from "../mock/db.json";

const teams = teamsData;

const Home = () => {
  return (
    <Grid container spacing={4} sx={{m: 4}}>
      {
        teams.map(team => (
          <Grid size={{xs: 12, sm: 6, md: 4}}  key={team.id}>
            <TeamCard 
              id = {team.id}
              logo = {team.logo}
              name = {team.name}
              desc = {team.summary}
              showButton = {true}
            />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Home
