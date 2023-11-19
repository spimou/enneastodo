import { useEffect, useState } from 'react';    
import {useSelector,useDispatch} from "react-redux";
import Typography from '@mui/material/Typography';  
import Box from '@mui/material/Box';    
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { addTask, deleteTask } from '../redux/tasksSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; 
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';



const Tasks = () => {  

  const tasksState = useSelector(state => state.tasksSlice)
  const dispatch = useDispatch();
  
  const [newTaskValue, setNewTaskValue] = useState('');

  const handleAddNewTask = () =>{
    if (newTaskValue === '') {
      return
    }
    dispatch(addTask(newTaskValue))
    setNewTaskValue('')
  }

  
  const handleDeleteNewTask = (id) =>{  
    dispatch(deleteTask(id)) ;
  }

  useEffect(() => {
    document.title = 'Tasks | Enneas Tasks'; 
    
  }, []);
  return ( 

    <Box className='generalContainer' style={{ backgroundImage: ` linear-gradient(to bottom, rgba(128,128,128,0.6), rgba(128,128,128,0.6)), url(${window.location.origin+'/ui-images/notes.webp'})`}} >

        <Grid container spacing={1}>
          <Grid item xs={10}  xl={8} sx={{backgroundColor:'rgba(128, 128, 128, 0.3)', margin:'0 auto'}}> 
            <TextField size='small'  id="addTaskText" label="Add task" variant="outlined" value={newTaskValue} onChange={(e) => setNewTaskValue(e.target.value)} />
            

            <Button variant='outlined' onClick={handleAddNewTask}  >
                    <AddIcon style={{fontSize:'20px'}} /> 
                </Button>
    
            {
              tasksState.tasks.length>0 && tasksState.error === '' && tasksState.status === 'ready' && 
              tasksState.tasks.map((task,i) => (
                <div key={i}>
                  <p>{task.title}</p>
                  <p>{task.dateCreated}</p>
                  

                  <Button variant='outlined' onClick={()=>handleDeleteNewTask(task.id)}  >
                    <ClearIcon style={{fontSize:'20px'}} /> 
                </Button>
                </div>
              ))
            }
    
            {
              tasksState.tasks.length === 0 && tasksState.error === '' && tasksState.status === 'ready' && 
              <p>start by adding a new task</p>
            }
    
            {
              tasksState.tasks.length === 0 && tasksState.error === '' && tasksState.status === 'idle' && 
              <p>loading</p>
            }
    
            {
              tasksState.error !== '' && 
              <p>{tasksState.error}</p>
            }
          </Grid> 
        </Grid> 



            
    </Box>  
  )
}

export default Tasks
