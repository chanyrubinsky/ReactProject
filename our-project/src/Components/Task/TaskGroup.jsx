import { useState } from "react";
import OneTask from "./OneTask";

export default function TaskGroup({ arr, setarr }) {
  const [showInput, setShowInput] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleAddTask = () => {
    if (!newTaskTitle) return;

    // עדכון בטוח של state
    setarr(prevArr => [...prevArr, { id: Date.now(), title: newTaskTitle }]);

    setNewTaskTitle("");
    setShowInput(false); 
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      {arr.map(task => (
        <OneTask key={task.id} task={task} arr={arr} setarr={setarr} />
      ))}

      <hr />

      
      <button onClick={() => setShowInput(true)}>אוסף משימה</button>

      {/* ה-input שמופיע רק בלחיצה */}
      {showInput && (
        <div style={{ marginTop: "10px" }}>
          <input
            placeholder="מלא את שם המשימה"
            value={newTaskTitle}
            onChange={e => setNewTaskTitle(e.target.value)}
          />
          <button onClick={handleAddTask}>אוסף משימה</button>
        </div>
      )}
    </div>
  );
}

