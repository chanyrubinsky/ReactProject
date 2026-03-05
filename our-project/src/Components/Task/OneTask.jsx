import React from "react";

export default function OneTask({ task, arr, setarr }) {
  const handleDelete = (id) => {
    setarr(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div style={{ border: "1px solid gray", padding: "5px", margin: "5px", color: "red" }}>
      <ul>
        <li>Title: {task.title}</li>
        {task.duration && <li>Duration: {task.duration}</li>}
        {task.recommendedDay && <li>Recommended Day: {task.recommendedDay}</li>}
      </ul>

      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
}
