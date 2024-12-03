import { Task } from "./types";
import router from "next/navigation"
import { useRouter } from 'next/router'

// apiからデータをjson形式で取得
export const getAllTodos = async ():Promise<Task[]> => { //PromiseとかはTypeScript？？
    const res = await fetch('http://localhost:3001/tasks', { // api先のURL
        cache: "no-store", // SSR → 情報の懇親が頻繁なので、
    });
    const todos  = res.json();
    
    return todos;
};  


export const addTodo = async (todo:Task):Promise<Task> => { 
    const res = await fetch('http://localhost:3001/tasks', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
        }, 
        body: JSON.stringify(todo), 
    });
    const newTodo  = res.json();
    
    //router.refresh(); //??? 追加削除したらページの更新したい。
    
    return newTodo;
};  


// 削除機能
export const deleteTodo = async (id: string): Promise<Task> => { 
    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json", 
        }, 
    });
    const deleteTodo  = res.json();
    
    return deleteTodo;
};  