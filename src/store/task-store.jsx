import { createContext, useReducer } from "react";

export const TaskList = createContext({
  tasksList: [],
  addTask: () => {},
  deleteTask: () => {},
  changeStatus: () => {},
  filterByAssignee: () => {},
  filterByPriority: () => {},
});

const taskListReducer = (currTaskList, action) => {
  let newTaskList = currTaskList;

  if (action.type === "DELETE_TASK") {
    newTaskList = currTaskList.filter(
      (task) => task.id !== action.payload.taskId
    );
  } else if (action.type === "ADD_TASK") {
    newTaskList = [action.payload, ...currTaskList];
  } else if (action.type === "CHANGE_STATUS") {
    let filteredObj = currTaskList.find(
      (item) => item.id === action.payload.taskId
    );
    filteredObj.status = action.payload.value;
    filteredObj.priority = action.payload.taskPriority;
    newTaskList = currTaskList.map((item) =>
      item.id === filteredObj ? filteredObj : item
    );
  } else if (action.type === "FILTER_ASSIGNEE") {

    newTaskList = currTaskList.filter(
      (item) => item.assignee === action.payload.assigneeValue
    );

  } else if (action.type === "FILTER_PRIORITY") {
    newTaskList = currTaskList.filter(
      (item) => item.priority === action.payload.priorityValue
    );
  }

  return newTaskList;
};

const TaskListProvider = ({ children }) => {
  const [tasksList, dispatchTaskList] = useReducer(
    taskListReducer,
    DEFAULT_TASK_LIST
  );

  const addTask = (taskTitle, taskBody, assignee, priority, status) => {
    dispatchTaskList({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        title: taskTitle,
        body: taskBody,
        assignee: assignee,
        priority: priority,
        status: status,
      },
    });
  };

  const changeStatus = (value, taskId, taskPriority) => {
    dispatchTaskList({
      type: "CHANGE_STATUS",
      payload: {
        value,
        taskId,
        taskPriority,
      },
    });
  };

  const deleteTask = (taskId) => {
    dispatchTaskList({
      type: "DELETE_TASK",
      payload: {
        taskId,
      },
    });
  };

  const filterByAssignee = (assigneeValue, priorityValue) => {
    dispatchTaskList({
      type: "FILTER_ASSIGNEE",
      payload: {
        assigneeValue,
        priorityValue,
      },
    });
  };

  const filterByPriority = (priorityValue) => {
    dispatchTaskList({
      type: "FILTER_PRIORITY",
      payload: {
        priorityValue,
      },
    });
  };

  return (
    <TaskList.Provider
      value={{
        tasksList,
        addTask,
        deleteTask,
        changeStatus,
        filterByAssignee,
        filterByPriority,
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
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit facere facilis vitae, optio ipsum tempore mollitia ad eos obcaecati, fuga architecto quam dolor ea nisi similique corrupti, cupiditate eius perferendis!",
    assignee: "PQR",
    priority: "P3",
    status: "Pending",
  },
  {
    id: 8,
    title: "Feature X",
    body: "Implement the feature in main branch",
    assignee: "MAN",
    priority: "P2",
    status: "Deployed",
  },
  {
    id: 9,
    title: "Add Payment Button",
    body: "Add a button which redirects to Payment Gateway",
    assignee: "ABC",
    priority: "P3",
    status: "Completed",
  },
];

export default TaskListProvider;
