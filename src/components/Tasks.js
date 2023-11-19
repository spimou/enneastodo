import { useEffect, useState } from 'react';    
import {useSelector,useDispatch} from "react-redux";
import Typography from '@mui/material/Typography';  
import Box from '@mui/material/Box';    
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { addTask, deleteTask, completedTask, deleteAllCompletedTasks } from '../redux/tasksSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; 
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import Checkbox from '@mui/material/Checkbox';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions'; 


const Tasks = () => {  

  const tasksState = useSelector(state => state.tasksSlice)
  const dispatch = useDispatch();
  
  const [newTaskValue, setNewTaskValue] = useState(''); 
  const [taskToBeDeleted, setTaskToBeDeleted] = useState('');
  const [deleteDialogueOpen, setDeleteDialogueOpen] = useState(false);
  const [deleteDialogueUsage, setDeleteDialogueUsage] = useState('');


  const handleAddNewTask = () =>{
    if (newTaskValue === '') {
      return
    }
    dispatch(addTask(newTaskValue))
    setNewTaskValue('')
  } 

  const handleDeleteDialogueClose = (e, reason) => {
    if (reason && reason == "backdropClick") 
    return;
    setDeleteDialogueOpen(false);
    setTaskToBeDeleted('')
  };

  const openDeleteTaskDialogue = (reason,taskid) => {
    setDeleteDialogueUsage(reason)
    setDeleteDialogueOpen(true);
    if (reason === 'single') {
      setTaskToBeDeleted(taskid)
    }
  }

  const handleDeleteDialogueAgree = () => {
    if (deleteDialogueUsage === 'single') {
      dispatch(deleteTask(taskToBeDeleted)) ; 
    }
    else{
      dispatch(deleteAllCompletedTasks())
    }
    setDeleteDialogueOpen(false);
    setTaskToBeDeleted('')
    setDeleteDialogueUsage('')
  }

  const handleTaskCompletedChange = (id) => { 
    dispatch(completedTask(id)) 
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

                  <Checkbox
                    checked={task.completed}
                    onChange={()=>handleTaskCompletedChange(task.id)}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />

                  <p>{task.title}</p>
                  <p>{task.dateCreated}</p>
                  

                  <Button variant='outlined' onClick={()=>openDeleteTaskDialogue('single', task.id)}  >
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

            <Button variant='outlined' onClick={()=>openDeleteTaskDialogue('completed')}  >
              Delete All Completed Tasks
            </Button>
          </Grid> 
        </Grid> 


      <Dialog
        open={deleteDialogueOpen} 
        keepMounted
        onClose={handleDeleteDialogueClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{deleteDialogueUsage==='single'? "Delete Task ?" : "Delete All Completed Tasks ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {deleteDialogueUsage==='single'? "Once it's gone, it's gone. Forever." : "Once they are gone, they are gone. Forever."}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogueClose}>Cancel</Button>
          <Button onClick={handleDeleteDialogueAgree}>OK</Button>
        </DialogActions>
      </Dialog>
            
    </Box>  
  )
}

export default Tasks
