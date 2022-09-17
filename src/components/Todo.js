import { useState } from "react";
import TodoForm from "./TodoForm";
import { CgCloseR } from "react-icons/cg";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, complateTodo, removeTodo, updateTodo }) {
  const [edit, setedit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setedit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplate ? "todo-row complate" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => complateTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <CgCloseR onClick={() => removeTodo(todo.id)} className="todo-icon" />
        <TiEdit
          onClick={() => setedit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
