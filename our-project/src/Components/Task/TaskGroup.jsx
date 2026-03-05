import { useState } from "react";
import OneTask from "./OneTask";

export default function TaskGroup({ arr, setarr, onConfirm }) {
  const [showInput, setShowInput] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", duration: "", recommendedDay: "" });

  const handleAddTask = () => {
    if (!newTask.title) return;

    setarr(prevArr => [
      ...prevArr,
      { id: Date.now(), ...newTask, duration: newTask.duration ? Number(newTask.duration) : undefined }
    ]);

    setNewTask({ title: "", duration: "", recommendedDay: "" });
    setShowInput(false);
  };

  const handleConfirm = () => {
    if (onConfirm) onConfirm(arr);
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      {arr.map(task => (
        <OneTask key={task.id} task={task} arr={arr} setarr={setarr} />
      ))}

      <hr />
      <button onClick={() => setShowInput(true)}>הוסף משימה</button>

      {showInput && (
        <div style={{ marginTop: "10px" }}>
          <input
            placeholder="שם משימה"
            value={newTask.title}
            onChange={e => setNewTask({ ...newTask, title: e.target.value })}
          />
          <input
            placeholder="זמן (דקות)"
            type="number"
            value={newTask.duration}
            onChange={e => setNewTask({ ...newTask, duration: e.target.value })}
            style={{ marginLeft: "5px" }}
          />
          <input
            placeholder="יום מומלץ"
            value={newTask.recommendedDay}
            onChange={e => setNewTask({ ...newTask, recommendedDay: e.target.value })}
            style={{ marginLeft: "5px" }}
          />
          <button onClick={handleAddTask} style={{ marginLeft: "5px" }}>הוסף</button>
        </div>
      )}

      <hr />
      <button onClick={handleConfirm} style={{ marginTop: "10px", backgroundColor: "lightgreen" }}>
        אשר
      </button>
    </div>
  );
}

