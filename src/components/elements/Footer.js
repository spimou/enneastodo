import Typography from '@mui/material/Typography';  
import Box from '@mui/material/Box';   
import {Link} from 'react-router-dom';


const Footer = () => {  
  return (
    <div>

      <Box sx={{height:'250px;', backgroundColor:'darkgrey'}}>

        <div style={{margin:'0 auto', padding:'20px', textAlign:'center'  }} >
          
          <p style={{marginTop:'0px'}}>created by Spiros Mousouris for : </p>
          <Link to="https://enneas.gr/"> 
              Enneas - Innovative tech solutions
          </Link> 

        </div>

      </Box> 
      
    </div>
  )
}

export default Footer
