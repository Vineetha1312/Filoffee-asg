import React from "react";

const TaskFilters = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <label className="font-bold mr-2">Filter by Status:</label>
        <select
          className="border rounded p-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilters;
