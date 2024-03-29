import { useContext, useRef, useState } from "react";
import { TaskList } from "../store/task-store";

const EditTask = ({ task }) => {
  const [changeCategory, setChangeCategory] = useState("");
  const newSelectValue = useRef();
  const { setCategoryValue, deleteTask } = useContext(TaskList);

  const handleChange = (e) => {
    setChangeCategory(e.target.value);
  };

  const handleTaskSaveButton = () => {
    setCategoryValue(changeCategory);
   // deleteTask(task.title);
  };
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
        <div className="category">
          <label>Change Category: </label>
          <select
            name="category"
            id="category"
            defaultValue={task.category}
            onChange={handleChange}
            ref={newSelectValue}
          >
            <option disabled>{task.category}</option>
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
          onClick={handleTaskSaveButton}
        >
          Save Task
        </button>
      </div>
    </>
  );
};

export default EditTask;
