import React, { useState } from 'react';

const TodoList = () => {
  const initialTodos = {
    backlog: ['Task 1', 'Task 2'],
    todo: ['Task 3'],
    ongoing: ['Task 4'],
    done: ['Task 5'],
  };

  const [todos, setTodos] = useState(initialTodos);

  const moveTodo = (task, from, to) => {
    setTodos((prev) => {
      const newTodos = { ...prev };
      newTodos[from] = newTodos[from].filter((item) => item !== task);
      newTodos[to] = [...newTodos[to], task];
      return newTodos;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {['backlog', 'todo', 'ongoing', 'done'].map((status, index) => (
        <div key={status} className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 capitalize">{status}</h2>
          <ul className="space-y-2">
            {todos[status].map((task) => (
              <li key={task} className="flex justify-between items-center p-2 bg-white rounded shadow">
                <span>{task}</span>
                <div className="flex space-x-2">
                  {index > 0 && (
                    <button
                      className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={() => moveTodo(task, status, ['backlog', 'todo', 'ongoing', 'done'][index - 1])}
                    >
                      &#8592;
                    </button>
                  )}
                  {index < 3 && (
                    <button
                      className="px-2 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                      onClick={() => moveTodo(task, status, ['backlog', 'todo', 'ongoing', 'done'][index + 1])}
                    >
                      &#8594;
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
