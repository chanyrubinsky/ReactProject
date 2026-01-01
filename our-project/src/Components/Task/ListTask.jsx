import { useEffect, useState } from "react";

import {
  getHomeTasks,
  getHostingTasks,
  getGuestTasks
} from '../../data/tasksService';
import  OneTask  from "./OneTask";

const ListTask = () => {

  const [homeTasks, setHomeTasks] = useState([]);
  const [hostingTasks, setHostingTasks] = useState([]);
  const [guestTasks, setGuestTasks] = useState([]);


  useEffect(() => {
    getHomeTasks().then(data => {
      setHomeTasks(data);
    });
  }, []);


  useEffect(() => {
    getHostingTasks().then(data => {
      setHostingTasks(data);
    });
  }, []);


  useEffect(() => {
    getGuestTasks().then(data => {
      setGuestTasks(data);
    });
  }, []);





const renderTasks4 = (arr,setarr) => {
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
  };


  return (
    <div>
      
       <h2>רשימת משימות:</h2>
          {renderTasks4(homeTasks, setHomeTasks)}
          {renderTasks4(hostingTasks, setHostingTasks)}
          {renderTasks4(guestTasks, setGuestTasks)}
    
      
      
      
    
    </div>
  );
};

export default ListTask;