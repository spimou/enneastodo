import { useEffect , useState} from 'react';    
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; 
import * as React from 'react';      
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'; 
import Grid from '@mui/material/Grid'; 
import {NavLink} from 'react-router-dom'


const Header = () => {   
  
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };  
  
    useEffect(() => {
      
    }, []);
  
    return (
      <div>
  
          <Box sx={{ flexGrow: 0.5 }}> 
            <AppBar position="static" style={{backgroundColor:'darkorange'}} >
                <Toolbar variant="dense" > 
                    <Typography  color="black" component="div" sx={{width:'150px'}} >
                      Enneas Tasks
                    </Typography>
                    <Grid container justifyContent="flex-end" >
  
                      <IconButton
                        size="small"
                        edge="end"
                        color="black"
                        aria-label="menu"
                        onClick={handleClick}
                        sx={{ mr: 2 }}
                      >
                        <MenuIcon />
                      </IconButton>
  
  
                    </Grid>  
                </Toolbar>
            </AppBar>
          </Box>
  
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            style: {borderRadius:0}  
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          disableScrollLock={ true }
        >
          <MenuItem component={NavLink} to={`/`} >
             Home
          </MenuItem>
          <MenuItem component={NavLink} to={`/tasks`} >
            Tasks
          </MenuItem>    
        </Menu>
        
      </div>
    )
  }
  
  export default Header