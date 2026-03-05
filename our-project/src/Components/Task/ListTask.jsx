import { useEffect, useState } from "react";
import TaskGroup from "./TaskGroup";
import FinalTaskList from "./FinalTaskList";
import { getHomeTasks, getHostingTasks, getGuestTasks } from '../data/tasksService';
import { useShabbat } from "../context/ShabbatContext";

const ListTask = () => {
  const [homeTasks, setHomeTasks] = useState([]);
  const [hostingTasks, setHostingTasks] = useState([]);
  const [guestTasks, setGuestTasks] = useState([]);
  const [confirmedTasks, setConfirmedTasks] = useState(null);

  const { shabbatSettings } = useShabbat();

  useEffect(() => {
    getHomeTasks().then(data => setHomeTasks(data));
    getHostingTasks().then(data => setHostingTasks(data));
    getGuestTasks().then(data => setGuestTasks(data));
  }, []);

  const getTasksForUser = () => {
    if (!shabbatSettings) return [...homeTasks, ...hostingTasks, ...guestTasks];

    if (shabbatSettings.isTraveling) return guestTasks;
    if (shabbatSettings.numberOfGuests > 0) return hostingTasks;
    return homeTasks;
  };

  const setTasksForUser = (newArr) => {
    if (shabbatSettings.isTraveling) setGuestTasks(newArr);
    else if (shabbatSettings.numberOfGuests > 0) setHostingTasks(newArr);
    else setHomeTasks(newArr);
  };

  const tasks = getTasksForUser();

  return (
    <div>
      {!confirmedTasks ? (
        <TaskGroup
          arr={tasks}
          setarr={setTasksForUser}
          onConfirm={(finalArr) => setConfirmedTasks(finalArr)}
        />
      ) : (
        <FinalTaskList tasks={confirmedTasks} />
      )}
    </div>
  );
};

export default ListTask;


