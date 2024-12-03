import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "./api";

// ホーム（メインページ）
export default async function Home() {
  const todos = await getAllTodos(); // ここでjsonデータを呼ぶ
 
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">
        Todo app by Next.js 13
      </h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md">
          <AddTask /> 
          <TodoList props={todos}/> 
        </div>
      </div>
    </main>
  );
}
