// MUI components
import { Box, Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';

// assets
import RandomImg from "../assets/engineering.jpg";

const TeamCard = () => {
  return (
    <Box sx={{margin: "40px"}} >
        <Card sx={{width: "300px"}}>
            <CardMedia
                component="img"
                height="140"
                image={RandomImg}
                alt="team-logo" 
            />
            <CardContent>
                <Typography variant='h5' component="div">Team Heading</Typography>
                <Typography variant='body2'>Team description!</Typography>
            </CardContent>
            <CardActions>
                <Button>View Details</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default TeamCard
