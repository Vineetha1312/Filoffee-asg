import React from "react";

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <tr>
      <td className="border px-4 py-2">{task.title}</td>
      <td className="border px-4 py-2">{task.description}</td>
      <td className="border px-4 py-2">{task.dueDate}</td>
      <td className="border px-4 py-2">{task.status}</td>
      <td className="border px-4 py-2 flex justify-center">
        <button
          className="text-blue-500 hover:underline mr-2"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button
          className="text-red-500 hover:underline"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this task?")) {
              onDelete(task.id);
            }
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
