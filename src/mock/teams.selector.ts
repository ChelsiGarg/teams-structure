import teams from "./db.json";

export const getTeamById = (id: string|undefined) => {
    return teams.find(team => team.id===id);
};