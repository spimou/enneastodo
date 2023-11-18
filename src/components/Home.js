import { useEffect } from 'react';    
import Typography from '@mui/material/Typography';  
import Box from '@mui/material/Box';    
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {  
 

  useEffect(() => {
    document.title = 'Home | Enneas Tasks';
    
  }, []);
  return (
    <div>

    <Box className='generalContainer' style={{ backgroundImage: `url(${window.location.origin+'/ui-images/notes.webp'})`}} >
       <div style={{margin:'0 auto', padding:'20px', textAlign:'center'   }} >
        <h1> Enneas Tasks</h1>   

        <Link to={`/tasks`} style={{margin:'0 auto', color:'black'  }} >
          <h2  > Lets go <ArrowForwardIcon  />  </h2>  
        </Link>
        
       </div>
    </Box> 
      
    </div>
  )
}

export default Home
