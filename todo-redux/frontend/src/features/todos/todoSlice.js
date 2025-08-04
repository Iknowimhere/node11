import { createSlice } from "@reduxjs/toolkit";

let todoSlice=createSlice({
    name:"todos",
    initialState:{
        todos:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({id:Date.now().toString(),task:action.payload,completed:false})
        },
        toggleTodo:(state,action)=>{
            let todoIndex=state.todos.findIndex((doc)=>doc.id===action.payload)
            if(todoIndex >=0) state.todos[todoIndex].completed=!(state.todos[todoIndex].completed)
            },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((doc)=>doc.id!==action.payload)
        },
        editTodo:(state,action)=>{
            let todoIndex=state.todos.findIndex((doc)=>doc.id===action.payload.id)
            if(todoIndex >=0) state.todos[todoIndex].task=action.payload.task
        }
    }
})


export const {addTodo,toggleTodo,deleteTodo,editTodo}=todoSlice.actions


export default todoSlice.reducer