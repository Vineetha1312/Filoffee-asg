import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import TaskFilters from "./TaskFilters";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, filter, setFilter, deleteTask, setEditingTask } = useContext(TaskContext);

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className="bg-white shadow rounded p-4">
      <TaskFilters filter={filter} setFilter={setFilter} />
      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Due Date</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onEdit={setEditingTask}
                onDelete={deleteTask}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
