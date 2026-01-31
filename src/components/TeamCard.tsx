// MUI components
import { Box, Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';


type teamCardProps = {
    logo: string;
    name: string;
    summary: string;
}

const TeamCard = ({ logo, name, summary }: teamCardProps) => {
  return (
    <Box sx={{margin: "40px"}} >
        <Card sx={{width: "300px"}}>
            <CardMedia
                component="img"
                height="140"
                image={logo}
                alt="team-logo" 
            />
            <CardContent>
                <Typography variant='h5' component="div">{name}</Typography>
                <Typography variant='body2'>{summary}</Typography>
            </CardContent>
            <CardActions>
                <Button>View Details</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default TeamCard
