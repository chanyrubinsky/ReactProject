import React, { useState } from "react";

export default function FinalTaskList({ tasks }) {
  const [finalTasks, setFinalTasks] = useState(tasks);

  const toggleDone = (id) => {
    setFinalTasks(prev => prev.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const totalTime = finalTasks
    .filter(task => !task.done && task.duration)
    .reduce((sum, task) => sum + task.duration, 0);

  return (
    <div>
      <h2>רשימת משימות סופית:</h2>
      <ul>
        {finalTasks.map(task => (
          <li key={task.id}>
            {task.title} {task.duration && `(${task.duration} דקות)`}
            <label style={{ marginLeft: "10px" }}>
              <input
                type="checkbox"
                checked={task.done || false}
                onChange={() => toggleDone(task.id)}
              />
              בוצע
            </label>
          </li>
        ))}
      </ul>
      <p>סה"כ זמן שנותר לביצוע: {totalTime} דקות</p>
    </div>
  );
}