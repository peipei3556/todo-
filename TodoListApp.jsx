import { useState } from "react";
import { Trash2 } from "lucide-react";

export default function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, id: Date.now() }]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center">ToDoリスト</h1>
      <div className="flex gap-2">
        <input
          className="border p-2 rounded flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="やることを入力"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addTask}>追加</button>
      </div>
      <div className="space-y-2 overflow-y-auto max-h-[60vh]">
        {tasks.map((task) => (
          <div key={task.id} className="flex justify-between items-center border p-3 rounded">
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
