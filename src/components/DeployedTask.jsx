import React, { useContext } from "react";
import Task from "./Task";
import { TaskList } from "../store/task-store";

const DeployedTask = () => {
  const { tasksList } = useContext(TaskList);

  return (
    <>
      {tasksList
        .filter((item) => {
          return item.status === "Deployed";
        })
        .map((item) => (
          <Task key={item.id} task={item} />
        ))}
    </>
  );
};
export default DeployedTask;
