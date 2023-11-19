import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks :[],
    status:'idle',
    error:''
}
 

export const tasksSlice = createSlice({
    name:'tasksSlice',
    initialState,
    reducers:{ 
        beginWithNoTasks:(state) =>{ 
            state.tasks = [];
            state.status = 'ready';
            state.error = '';
        }, 
        updateStoreFromMemory:(state) =>{
            try {
                let tasksls = localStorage.getItem('tasksls')
                tasksls = JSON.parse(tasksls) 
                if (tasksls.length>0) {
                    state.tasks = tasksls;
                    state.status = 'ready';
                    state.error = '';
                }   
                else{
                    state.tasks = [];
                    state.status = 'ready';
                    state.error = '';
                }             
            } catch (error) {
                state.error = 'Error while getting the tasks list'
            }

        },
        addTask:(state, action) =>{  
            let date = new Date().toJSON();
            let dateNow = Date.now() 
            let newTask = {
                id:dateNow,
                title:action.payload,
                dateCreated:date,
                completed:false
            }
            state.tasks.push(newTask)
            state.status='ready';
            state.error='';
            try {
                let tasksls = localStorage.getItem('tasksls')
                tasksls = JSON.parse(tasksls) 
                tasksls.push(newTask)
                console.log('tasksls', tasksls);
                localStorage.setItem('tasksls', JSON.stringify(tasksls))
            } 
            catch(e) {
                state.error='Error while adding task';
            } 
        }, 
        setTaskError:(state, action)=>{
            state.error = action.payload; 
        }
    }
})

export const {addTask, setTaskError, updateStoreFromMemory, beginWithNoTasks} = tasksSlice.actions

export default tasksSlice.reducer