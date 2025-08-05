import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let URL = "http://localhost:5000/todos";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  let res = await axios.get(URL);
  return res.data;
});

export const postTodo = createAsyncThunk("todos/postTodo", async (task) => {
  let res = await axios.post(URL, { task });
  return res.data;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  let res = await axios.delete(`${URL}/${id}`);
  console.log(res);
  return res.data;
});

export const toggleTodo = createAsyncThunk("todos/toggleTodo", async (todo) => {
  let res = await axios.put(`${URL}/${todo.id}`, { completed: todo.completed });
  console.log(res);
  return res.data;
});

let todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(postTodo.fulfilled, (state, action) => {
        state.todos = [...state.todos, action.payload];
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => { 
        let todoIndex = state.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );
        if (todoIndex >= 0)
          state.todos[todoIndex].completed = action.payload.completed
      });
  },
});

export default todoSlice.reducer;

// addTodo:(state,action)=>{
//     state.todos.push({id:Date.now().toString(),task:action.payload,completed:false})
// },
// toggleTodo:(state,action)=>{
//     let todoIndex=state.todos.findIndex((doc)=>doc.id===action.payload)
//     if(todoIndex >=0) state.todos[todoIndex].completed=!(state.todos[todoIndex].completed)
//     },
// deleteTodo:(state,action)=>{
//     state.todos=state.todos.filter((doc)=>doc.id!==action.payload)
// },
// editTodo:(state,action)=>{
//     let todoIndex=state.todos.findIndex((doc)=>doc.id===action.payload.id)
//     if(todoIndex >=0) state.todos[todoIndex].task=action.payload.task
// }
