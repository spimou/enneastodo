import { useEffect } from 'react';    
import {useSelector,useDispatch} from "react-redux";
import Typography from '@mui/material/Typography';  
import Box from '@mui/material/Box';    
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { addTask } from '../redux/tasksSlice';

const Tasks = () => {  

  const allTasks = useSelector(state => state.tasksSlice)
  const dispatch = useDispatch();
 

  useEffect(() => {
    document.title = 'Tasks | Enneas Tasks';
    
  }, []);
  return ( 

    <Box className='generalContainer' style={{ backgroundImage: ` linear-gradient(to bottom, rgba(128,128,128,0.6), rgba(128,128,128,0.6)), url(${window.location.origin+'/ui-images/notes.webp'})`}} >
            <button onClick={()=> dispatch(addTask('New Task'))} >add task</button> 
            {allTasks.tasks.map((task,i) => (
              <div key={i}>{task}</div>
            ))}

            
    </Box>  
  )
}

export default Tasks
