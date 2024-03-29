import { useContext } from "react";
import { TaskList } from "../store/task-store";
import Task from "./Task";

const ProgressTask = () => {
  const { categoryValue, tasksList } = useContext(TaskList);
  //console.log(categoryValue, "from progresstask");

  return (
    <>
      {categoryValue === "In Progress" &&
        tasksList
          .filter((item) => {
            item.categoryValue === "In Progress";
            return item;
          })
          .map((item) => <Task key={item.id} task={item} />)}
    </>
  );
};

export default ProgressTask;
