// MUI components
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';


type teamCardProps = {
    logo: string;
    name: string;
    summary: string;
}

const TeamCard = ({ logo, name, summary }: teamCardProps) => {
  return (
    <Card sx={{maxWidth: "350px", height: "350px"}}>
        <CardMedia
            component="img"
            height="140"
            image={logo}
            alt="team-logo" 
        />
        <CardContent>
            <Typography variant='h5' component="div">{name}</Typography>
            <Typography variant='body2' sx={{height: "60px"}}>{summary}</Typography>
        </CardContent>
        <CardActions>
            <Button>View Details</Button>
        </CardActions>
    </Card>
  )
}

export default TeamCard
