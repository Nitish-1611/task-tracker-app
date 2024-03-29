import { createContext, useReducer, useState } from "react";

export const TaskList = createContext({
  tasksList: [],
  addTask: () => {},
  deleteTask: () => {},
  changeStatus: () => {},
});

const taskListReducer = (currTaskList, action) => {
  let newTaskList = currTaskList;
  if (action.type === "DELETE_TASK") {
    newTaskList = currTaskList.filter(
      (task) => task.title !== action.payload.taskTitle
    );
  } else if (action.type === "ADD_TASK") {
    newTaskList = [action.payload, ...currTaskList];
    console.log("from addtask");
  } else if (action.type === "CHANGE_STATUS") {
    let filteredObj = currTaskList.find(
      (item) => item.id === action.payload.taskId
    );
    filteredObj.status = action.payload.value;
    console.log(filteredObj, "after update");
    newTaskList = [filteredObj, ...currTaskList];
  }

  return newTaskList;
};

const TaskListProvider = ({ children }) => {
  const [tasksList, dispatchTaskList] = useReducer(
    taskListReducer,
    DEFAULT_TASK_LIST
  );

  const [statusValue, setStatusValue] = useState("");

  const addTask = (taskTitle, taskBody, assignee, priority) => {
    dispatchTaskList({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        title: taskTitle,
        body: taskBody,
        assignee: assignee,
        priority: priority,
      },
    });
  };

  const changeStatus = (value, taskId) => {
    dispatchTaskList({
      type: "CHANGE_STATUS",
      payload: {
        value,
        taskId,
      },
    });
  };

  const deleteTask = (taskTitle) => {
    dispatchTaskList({
      type: "DELETE_TASK",
      payload: {
        taskTitle,
      },
    });
  };

  return (
    <TaskList.Provider
      value={{
        tasksList,
        addTask,
        deleteTask,
        statusValue,
        setStatusValue,
        changeStatus,
      }}
    >
      {children}
    </TaskList.Provider>
  );
};

const DEFAULT_TASK_LIST = [
  {
    id: 5,
    title: "App to deploy",
    body: "Hi Everyone, Deploy this app.",
    assignee: "ABC",
    priority: "P1",
    status: "Pending",
  },
  {
    id: 6,
    title: "Testing",
    body: "Hi Everyone, Please test this app",
    assignee: "Xyz",
    priority: "P2",
    status: "In Progress",
  },
  {
    id: 7,
    title: "Deployment",
    body: "This is a deployment",
    assignee: "PQR",
    priority: "P3",
    status: "Pending",
  },
];

export default TaskListProvider;
