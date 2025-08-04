import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todos/todoSlice";
const TodoList = () => {
    let dispatch=useDispatch()
    let todos=useSelector((state)=>state.todos)
    console.log(todos);
    
  return (
    <div>
        <h2>List of tasks</h2>
        {todos?.map(todo=>{
            return <div key={todo.id}>
                <span>{todo.task}</span>--
                <span>{todo.completed? "Done!!": "Not done!!" }</span>
                <button onClick={()=>dispatch(toggleTodo(todo.id))}>Toggle todo</button>
                <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete todo</button>
            </div>
        })}
    </div>
  )
}
export default TodoList