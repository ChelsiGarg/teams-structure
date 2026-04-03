import { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import MemberCard from "./MemberCard"
import { TeamContext } from "./Team";

const Members = () => {
  const members = useContext(TeamContext)?.members || [];

  return (
    <Grid
      container
      spacing={3}
      alignItems="stretch"
      sx={{ px: { xs: 1.5, sm: 2, md: 3 }, mt: 0.7 }}
    >
      {members.length > 0 ? (
        members.map((member) => (
          <Grid key={member.id} size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: "flex" }}>
            <MemberCard {...member} />
          </Grid>
        ))
      ) : (
        <Grid size={12}>
          <Box
            sx={{
              py: 6,
              textAlign: "center",
              border: "1px dashed",
              borderColor: "divider",
              borderRadius: 3,
            }}
          >
            <Typography variant="body1" color="text.secondary">
              No team members available.
            </Typography>
          </Box>
        </Grid>
      )}
    </Grid>
  )
}

export default Members
