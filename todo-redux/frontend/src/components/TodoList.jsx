import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, fetchTodos, toggleTodo } from "../features/todos/todoSlice"
const TodoList = () => {
  let todos=useSelector((state)=>state.todos)
  let dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchTodos())
  },[todos])

  const handleDelete=(id)=>{
    dispatch(deleteTodo(id))
  }

  const handleToggle=(todo)=>{
    dispatch(toggleTodo({...todo,completed:!todo.completed}))
  }

  return (
    <div>
      <h2>TodoList</h2>
      {
        todos.map(todo=>{
          return <div key={todo.id}>
            <span>{todo.task}</span>--
            <span>{todo.completed?"Done":"NotDone"}</span>
            <button onClick={()=>handleToggle(todo)}>ToggleTodo</button>
            <button>Edit</button>
            <button onClick={()=>handleDelete(todo.id)}>Delete</button>
          </div>
        })
      }
    </div>
  )
}
export default TodoList