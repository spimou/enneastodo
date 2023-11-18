import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks :['one', 'two']
}

export const tasksSlice = createSlice({
    name:'tasksSlice',
    initialState,
    reducers:{
        addTask:(state, action) =>{
            state.tasks.push(action.payload)
        }
    }
})

export const {addTask} = tasksSlice.actions

export default tasksSlice.reducer