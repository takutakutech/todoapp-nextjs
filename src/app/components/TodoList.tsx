import React from 'react'
import { Task } from '../types';
import Todo from "./Todo"


interface TodoListProps {
  todos: Task[];
}

// propsもっと簡単にできなかったっけ？
const TodoList = ({todos}: TodoListProps) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
      <Todo key={todo.id} todo={todo}/>
      ))}
    </ul>
  )
};

export default TodoList;