import { useState } from "react"
import {useDispatch} from 'react-redux'
import {  postTodo } from "../features/todos/todoSlice"
const TodoInput = () => {
    let [text,setText]=useState("")
    let dispatch=useDispatch()
    const handleChange=(e)=>{
        let {value}=e.target;
        setText(value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(postTodo(text))
        setText("")
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="task" id="task" placeholder="enter a task" onChange={handleChange} value={text}/>
            <button>Create task</button>
        </form>
    </div>
  )
}
export default TodoInput