import { useContext, useState } from "react";
import Task from "./Task";
import { TaskList } from "../store/task-store";

const PendingTask = () => {
  const { tasksList } = useContext(TaskList);
  return (
    <>
      {tasksList
        .filter((item) => {
          return item.status === "Pending";
        })
        .map((item) => (
          <Task key={item.id} task={item} />
        ))}
    </>
  );
};

export default PendingTask;
