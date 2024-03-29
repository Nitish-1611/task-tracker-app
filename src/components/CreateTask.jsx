import { useContext, useRef } from "react";
import { TaskList } from "../store/task-store";

const CreateTask = () => {
  const { addTask } = useContext(TaskList);
  const taskTitleElement = useRef();
  const taskBodyElement = useRef();
  const assigneeElement = useRef();
  const priorityElement = useRef();
  const categoryElement = useRef();


  const handleOnSubmit = (event) => {
    event.preventDefault();
    const taskTitle = taskTitleElement.current.value;
    const taskBody = taskBodyElement.current.value;
    const assignee = assigneeElement.current.value;
    const priority = priorityElement.current.value;
    const category = categoryElement.current.value;

    addTask(taskTitle, taskBody, assignee, priority, category);

    taskTitleElement.current.value = "";
    taskBodyElement.current.value = "";
    assigneeElement.current.value = "";
    priorityElement.current.value = "";
    categoryElement.current.value = "";
    console.log(taskTitle, taskBody, assignee, priority, category);
  };

  return (
    <>
      <form className="createTask" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Task Title
          </label>
          <input
            ref={taskTitleElement}
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter Title for Task"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Task Description
          </label>
          <textarea
            ref={taskBodyElement}
            rows="4"
            className="form-control"
            id="body"
            placeholder="Describe Task"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Assignee
          </label>
          <input
            ref={assigneeElement}
            type="text"
            className="form-control"
            id="reactions"
            placeholder="Assign To"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="assignee" className="form-label">
            Priority
          </label>
          <select name="priority" id="priority" ref={priorityElement}>
            <option value="DEFAULT" disabled>
              Priority
            </option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
            <option value="P3">P3</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Select Category
          </label>
          <select name="category" id="category" ref={categoryElement}>
            <option value="DEFAULT" disabled>
              Category
            </option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div className="mb-3 form-check form-submit-div">
          <button
            type="submit"
            className="btn btn-primary form-submit-button"
            data-bs-dismiss="modal"
          >
            Create Task
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateTask;
