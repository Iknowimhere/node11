import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todos/todoSlice"

const TodoInput = () => {
    let [text,setText]=useState("")
    let dispatch=useDispatch()
    
    const handleForm=(e)=>{
        e.preventDefault()
        dispatch(addTodo(text))
        setText("")
    }
    const handleChange=(e)=>{
        let {value}=e.target
        setText(value)
    }
  return (
    <div>
        <form action="" onSubmit={handleForm}>
            <input type="text" name="task" onChange={handleChange}/>
            <button>Create</button>
        </form>
    </div>
  )
}
export default TodoInput