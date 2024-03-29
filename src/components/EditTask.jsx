import { useContext, useEffect, useRef, useState } from "react";
import { TaskList } from "../store/task-store";

const EditTask = ({ task }) => {
  const { tasksList,changeStatus } = useContext(TaskList);
  const statusValue = useRef();
  const handleTaskUpdateButton = () => {
     const statusValueElement = statusValue.current.value;
    // tasksList.forEach((item) => {
    //   if (item.id === task.id) {
    //     task.status = statusValueElement;
    //     console.log(item.id, task.status, tasksList);
    //   }
    // });

    changeStatus(statusValueElement, task.id)
  };

  // const statusValueElement = statusValue.current.value;
  //     newValue.status = statusValueElement;
  //     console.log(newValue, "2nd");
  //     task.status = newValue[0].status;

  //   console.log(statusValueElement, task.id);
  //   console.log(newValue[0].status, "newVal status");

  return (
    <>
      <div className="edit-form">
        <label>Task Title</label>
        <input
          type="text"
          value={task.title}
          className="disabled-text"
          disabled
        />
        <br />
        <label>Task Description</label>
        <textarea
          type="textarea"
          rows="4"
          disabled
          value={task.body}
          className="disabled-text"
        />
        <br />
        <label>Assignee</label>
        <input
          type="text"
          disabled
          value={task.assignee}
          className="disabled-text"
        />
        <br />
        <div>
          <label>Change Priority: </label>
          <select name="priority" id="priority">
            <option value="DEFAULT" disabled>
              {task.priority}
            </option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
            <option value="P3">P3</option>
          </select>
        </div>
        <div className="status">
          <label>Change status: </label>
          <select
            name="status"
            id="status"
            defaultValue={task.status}
            ref={statusValue}
          >
            <option disabled>{task.status}</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Deployed">Deployed</option>
            <option value="Deferred">Deferred</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-dismiss="modal"
          onClick={handleTaskUpdateButton}
        >
          Save Task
        </button>
      </div>
    </>
  );
};

export default EditTask;
