import { Task } from "./types";

export const getAllTodos = async ():Promise<Task[]> => { //PromiseとかはTypeScript？？
    const res = await fetch('http://localhost:3001/tasks');
    const todos  = res.json();
    
    return todos;
};  