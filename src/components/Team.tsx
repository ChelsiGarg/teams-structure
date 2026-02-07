// React lib
import React from "react";
import { Outlet, useParams } from "react-router-dom"

// Component types
import type { TeamModel } from "../types/team";

// Selector to get specific team data
import { getTeamById } from "../mock/teams.selector";

// Custom Component
import NotFound from "./NotFound";

export const TeamContext = React.createContext<TeamModel | undefined>(undefined);


const Team = () => {
  const params = useParams();
  const id = params.teamId;
  const team = getTeamById(id);

  return (
    <>
      {
        team ?
          <TeamContext.Provider value={team}>
            <Outlet />
          </TeamContext.Provider>
        :
        <NotFound />
      }
    </>
    
  )
}

export default Team
