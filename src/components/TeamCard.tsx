// MUI components
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';


type teamCardProps = {
    logo: string;
    name: string;
    summary: string;
}

const TeamCard = ({ logo, name, summary }: teamCardProps) => {
  return (
    <Card sx={{ height: "350px"}}>
        <CardMedia
            component="img"
            image={logo}
            alt={`${name} logo`}
            sx = {{
                height: 180,
                objectFit: "contain",
                p: 1
            }}
        />
        <CardContent>
            <Typography variant='h5' component="div" sx={{p: 0.5}}>{name}</Typography>
            <Typography variant='body2' sx={{height: "50px"}}>{summary}</Typography>
        </CardContent>
        <CardActions>
            <Button>View Details</Button>
        </CardActions>
    </Card>
  )
}

export default TeamCard
