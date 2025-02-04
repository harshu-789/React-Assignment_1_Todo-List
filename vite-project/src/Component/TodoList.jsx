import TodoItem from "./TodoItem";
import React from "react";

function TodoList({ todos, onDelete, onToggle, onEdit }) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {todos.length === 0 ? <p className="text-center text-gray-500">No todos yet!</p> : null}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TodoList;
