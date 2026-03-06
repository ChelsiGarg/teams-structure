// React lib
import { useNavigate } from 'react-router-dom';

// MUI components
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';


type teamCardProps = {
    id: string;
    logo: string;
    name: string;
    desc: string;
    showButton: boolean;
}

const TeamCard = ({ id, logo, name, desc, showButton }: teamCardProps) => {
    const navigate = useNavigate();

    return (
        <Card sx={{ px: 1, height: "380px"}}>
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
                <Typography variant='body2' sx={{height: "50px"}}>{desc}</Typography>
            </CardContent>
            {
                showButton &&
                <CardActions>
                    <Button variant="contained" onClick={() => navigate(`${id}`)} sx={{ py: 2 }}>
                        View Details
                    </Button>
                </CardActions>
            }
        </Card>
    )
}

export default TeamCard
