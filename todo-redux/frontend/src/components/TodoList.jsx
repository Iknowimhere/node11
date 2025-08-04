import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../features/todos/todoSlice";
import { useState } from "react";
const TodoList = () => {
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  let dispatch = useDispatch();
  let todos = useSelector((state) => state.todos);


  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditValue(todo.task);
  };

  const handleSave = (id) => {
    dispatch(editTodo({ id, task: editValue }));
    setEditId(null);
    setEditValue("");
  };

  return (
    <div>
      <h2>List of tasks</h2>
      {todos?.map((todo) => {
        return (
          <div key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={() => handleSave(todo.id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{todo.task}</span>--
                <span>{todo.completed ? "Done!!" : "Not done!!"}</span>
                <button onClick={() => dispatch(toggleTodo(todo.id))}>
                  Toggle todo
                </button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                  Delete todo
                </button>
                <button onClick={() => handleEdit(todo)}>Edit</button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default TodoList;
