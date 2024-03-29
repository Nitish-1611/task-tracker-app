import { useContext } from "react";
import Task from "./Task";
import { TaskList } from "../store/task-store";

const PendingTask = () => {
  const { tasksList } = useContext(TaskList);
  //console.log(tasksList);

  return (
    <>
      {tasksList.map((item) => (
        <Task key={item.title} task={item} />
      ))}
    </>
  );
};

export default PendingTask;
