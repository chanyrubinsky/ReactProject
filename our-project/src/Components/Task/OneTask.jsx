import React from "react";

export default function OneTask({ task, setarr }) {


/*const To_delete = (id) => {
        /*setarr(arr.filter((index) => index.id !== id));
      setArr(prevArr => prevArr.filter(item => item.id !== id));}*/
 const To_delete = (id) => {
  setarr(prevArr => prevArr.filter(item => item.id !== id));
};
     


  return (
    <div style={{ border: "1px solid gray", padding: "5px", margin: "5px",color:"red" }}>
      <ul>
  <li>title: {task.title}</li>
        {task.duration && <li>duration: {task.duration}</li>}
        {task.recommendedDay && <li>recommendedDay: {task.recommendedDay}</li>}
        {task.done !== undefined && <li>done: {task.done.toString()}</li>}
</ul>


   
   <button onClick={() => To_delete(task.id)}>Delete</button>
     
    </div>
    

  );
}

