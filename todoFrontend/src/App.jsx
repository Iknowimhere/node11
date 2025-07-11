import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  let [todo,setTodo]=useState(null)
  const fetchTodos = async () => {
    try {
      setLoading(true);
      let res = await fetch("http://localhost:5000/todos");
      if (!res.ok) {
        throw new Error("Was unable to get data");
      }
      let data = await res.json();
      setTodos(data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchTodos()
  },[todo])
  return (
    <>
    <div className="form">
      <TodoInput setTodo={setTodo} />
    </div>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <ul>
          {todos.map((todo) => {
            return <li key={todo._id}>{todo.task}-{todo.description}</li>;
          })}
        </ul>
      )}
    </>
  );
};
export default App;
