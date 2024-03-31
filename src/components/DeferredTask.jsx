import { useContext } from "react";
import { TaskList } from "../store/task-store";
import Task from "./Task";

const DeferredTask = () => {
  const { tasksList } = useContext(TaskList);

  return (
    <>
      {tasksList
        .filter((item) => {
          return item.status === "Deferred";
        })
        .map((item) => (
          <Task key={item.id} task={item} />
        ))}
    </>
  );
};

export default DeferredTask;
