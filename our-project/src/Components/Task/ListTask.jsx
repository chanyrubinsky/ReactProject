import { useEffect, useState } from "react";
import TaskGroup from "./TaskGroup";

import {
  getHomeTasks,
  getHostingTasks,
  getGuestTasks
} from '../../data/tasksService';
import OneTask from "./OneTask";

const ListTask = () => {

  const [homeTasks, setHomeTasks] = useState([]);
  const [hostingTasks, setHostingTasks] = useState([]);
  const [guestTasks, setGuestTasks] = useState([]);

useEffect(() => {
  getHomeTasks().then(data => setHomeTasks(data));
  getHostingTasks().then(data => setHostingTasks(data));
  getGuestTasks().then(data => setGuestTasks(data));
}, []);
 

  /*useEffect(() => {
    getHomeTasks().then(data => setHomeTasks(prev => [...prev, ...data]));
    getHostingTasks().then(data => setHostingTasks(prev => [...prev, ...data]));
    getGuestTasks().then(data => setGuestTasks(prev => [...prev, ...data]));
  }, []);*/

  //פונקציה שמציגה  כל מערך של משימות//
  /*const renderTasks4 = (arr,setarr) => {
    
      return arr.map((task) => <OneTask key={task.id} task={task} arr={arr}  setarr={setarr}/>);
      
    };
  
  
  
    const renderTasks1 = () => {
      return homeTasks.map((task) => <OneTask key={task.id} task={task} />);
    };
    const renderTasks2 = () => {
      return hostingTasks.map((task) => <OneTask key={task.id} task={task} />);
    };
  
    const renderTasks3 = () => {
      return guestTasks.map((task) => <OneTask key={task.id} task={task} />);
    };*/


  return (
    <div>

      <h2>רשימת משימות:</h2>
      <TaskGroup arr={homeTasks} setarr={setHomeTasks} />
      <TaskGroup arr={hostingTasks} setarr={setHostingTasks} />
      <TaskGroup arr={guestTasks} setarr={setGuestTasks} />





    </div>
  );
};

export default ListTask;


