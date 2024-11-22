import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const saveTask = (task) => {
    const updatedTasks = editingTask
      ? tasks.map((t) => (t.id === task.id ? task : t))
      : [...tasks, { ...task, id: Date.now() }];
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        saveTask,
        deleteTask,
        filter,
        setFilter,
        editingTask,
        setEditingTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
