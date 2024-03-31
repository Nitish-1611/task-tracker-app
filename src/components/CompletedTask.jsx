import React, { useContext } from "react";
import Task from "./Task";
import { TaskList } from "../store/task-store";

const CompletedTask = () => {
  const { tasksList } = useContext(TaskList);

  return (
    <>
      {tasksList
        .filter((item) => {
          return item.status === "Completed";
        })
        .map((item) => (
          <Task key={item.id} task={item} />
        ))}
    </>
  );

};

export default CompletedTask;
