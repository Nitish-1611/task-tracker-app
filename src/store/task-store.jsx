import { createContext, useReducer, useState } from "react";

export const TaskList = createContext({
  tasksList: [],
  progressTask: [],
  addTask: () => {},
  deleteTask: () => {},
  changeToProgress: () => {},
});

const taskListReducer = (currTaskList, action) => {
  let newTaskList = currTaskList;
  if (action.type === "DELETE_TASK") {
    newTaskList = currTaskList.filter(
      (task) => task.title !== action.payload.taskTitle
    );
  } else if (action.type === "ADD_TASK") {
    newTaskList = [action.payload, ...currTaskList];
  }
  else if (action.type === "CHANGE_TO_PROGRESS") {
    
  }

  return newTaskList;
};

const TaskListProvider = ({ children }) => {
  const [tasksList, dispatchTaskList] = useReducer(
    taskListReducer,
    DEFAULT_TASK_LIST
  );

  const [categoryValue, setCategoryValue] = useState("");

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

  const changeToProgress = () => {
    dispatchTaskList({
      type: "CHANGE_TO_PROGRESS",
      payload: {
        title: taskTitle,
        body: taskBody,
        assignee: assignee,
        priority: priority,
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
        categoryValue,
        setCategoryValue,
        changeToProgress,
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
    category: "Pending",
  },
  {
    id: 6,
    title: "Testing",
    body: "Hi Everyone, Please test this app",
    assignee: "Xyz",
    priority: "P2",
    category: "Pending",
  },
];

export default TaskListProvider;
