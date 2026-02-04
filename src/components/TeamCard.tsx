// React lib
import { useNavigate } from 'react-router-dom';

// MUI components
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';


type teamCardProps = {
    logo: string;
    name: string;
    summary: string;
}

const TeamCard = ({ logo, name, summary }: teamCardProps) => {
    const navigate = useNavigate();

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
                <Button onClick={() => navigate(`${name}`)}>View Details</Button>
            </CardActions>
        </Card>
    )
}

export default TeamCard
