import { useEffect } from 'react';    
import Typography from '@mui/material/Typography';  
import Box from '@mui/material/Box';    
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Tasks = () => {  
 

  useEffect(() => {
    document.title = 'Tasks | Enneas Tasks';
    
  }, []);
  return (
    <div>

    <Box className='generalContainer' style={{ backgroundImage: `url(${window.location.origin+'/ui-images/notes.webp'})`}} >
     tasks   
    </Box> 
      
    </div>
  )
}

export default Tasks
