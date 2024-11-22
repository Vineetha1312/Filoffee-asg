import React from "react";
import TaskProvider from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl font-bold text-center mb-4">Task Manager</h1>
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;
