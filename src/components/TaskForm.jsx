import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { saveTask, editingTask } = useContext(TaskContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
  });

  useEffect(() => {
    if (editingTask) setFormData(editingTask);
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim()) {
      saveTask(formData);
      setFormData({ title: "", description: "", dueDate: "", status: "Pending" });
    }
  };

  return (
    <form className="bg-white p-4 shadow rounded mb-4" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="block text-sm font-bold">Title</label>
        <input
          type="text"
          className="w-full border rounded p-2"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold">Description</label>
        <textarea
          className="w-full border rounded p-2"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        ></textarea>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold">Due Date</label>
        <input
          type="date"
          className="w-full border rounded p-2"
          value={formData.dueDate}
          onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold">Status</label>
        <select
          className="w-full border rounded p-2"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
