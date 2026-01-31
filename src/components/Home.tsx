// Components
import TeamCard from "./TeamCard";

// Mock Data and its types
import teamsData from "../mock/db.json";
import type { Team } from "../types/team";

const teams = teamsData as Team[];

const Home = () => {
  return (
    <>
      {
        teams.map(team => (
          <TeamCard 
            logo = {team.logo}
            name = {team.name}
            summary= {team.summary}
          />
        ))
      }
    </>
  )
}

export default Home
