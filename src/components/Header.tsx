import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{marginBottom: "10px"}}>
        <Toolbar>
            <Typography variant='h6' component='div'>Data Analytics Platform</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header
