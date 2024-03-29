import { MdDelete } from "react-icons/md";
import { TaskList } from "../store/task-store";
import { useContext } from "react";
import EditTask from "./EditTask";

const Task = ({ task }) => {
  const { deleteTask, setCategoryValue, categoryValue } = useContext(TaskList);

  const handleTaskSaveButton = () => {};
  return (
    <>
      <div className="card my-card">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-task"
          onClick={() => deleteTask(task.title)}
        >
          <MdDelete />
        </span>
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.body}</p>
          <p>Assigned to: @{task.assignee}</p>
          <p>Priority: {task.priority}</p>
          <p>Category: {task.category}</p>

          <a
            href="#"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Edit Task
          </a>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Edit Task
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">{<EditTask task={task} />}</div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
