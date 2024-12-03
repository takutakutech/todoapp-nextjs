import React from 'react'
import { Task } from '../types';
import Todo from "./Todo"

// propsの形(type)を指定？
interface TodoListProps {
  props: Task[]; ///
}

// propsを上の型で呼んで、Todoの数だけ<ul>を作る
const TodoList = ({props}: TodoListProps) => { 
  return (
    <ul className="space-y-3">
      {props.map((todo) => ( 
      <Todo key={todo.id} todo={todo}/>
      ))}
    </ul>
  )
};

export default TodoList;