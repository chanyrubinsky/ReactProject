import React from "react";

export default function OneTask({ task,arr,setarr }) {


const To_delete = (id) => {
        setarr(arr.filter((index) => index.id !== id));}


  return (
    <div style={{ border: "1px solid gray", padding: "5px", margin: "5px",color:"red" }}>
      <ul>
  <li>title: {task.title}</li>
  <li>duration: {task.duration}</li>
  <li>recommendedDay: {task.recommendedDay}</li>
  <li>done: {task.done.toString()}</li>
</ul>


   
   <button onClick={() => To_delete(task.id)}>Delete</button>
     
    </div>
    

  );
}