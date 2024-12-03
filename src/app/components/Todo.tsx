"use client"

import React, {useState} from 'react'
import { Task } from '../types';
import { deleteTodo } from '../api';

interface TodoProps {
    todo:Task;
}

const Todo = ({todo}:TodoProps) => {
    const handleDelete = async () => {
        await deleteTodo(todo.id);
    };

    return (
        <li key={todo.id} className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
            <span>{todo.text}</span>
            <div>
                <button className="text-red-500" onClick={handleDelete}>Delete</button>
            </div>
        </li>
    )
}

export default Todo;