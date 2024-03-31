import { MdDelete } from "react-icons/md";
import { TaskList } from "../store/task-store";
import { useContext } from "react";
import EditTask from "./EditTask";

// destructuring task object via props
const Task = ({ task }) => {

  const { deleteTask } = useContext(TaskList);
 
// delete task logic
  const handleDelete = () => {
    const shouldDelete = window.confirm("Are you sure you want to delete?");
    if (shouldDelete) {
      // Perform delete operation
      deleteTask(task.id);
      console.log("Item deleted!");
    } else {
      // User canceled delete operation
      console.log("Delete operation canceled.");
    }
  };
  return (
    <>
      <div className="card my-card">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-task"
          onClick={handleDelete}
        >
          {/* React Delete icon from react icon library */}
          <MdDelete /> 
        </span>
        <div className="card-body">
          {/* Passing values coming from props */}
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.body}</p>
          <p>
            <b>Assigned to:</b> @{task.assignee}
          </p>
          <p>
            <b>Priority:</b> {task.priority}
          </p>
          <p>
            <b>Status:</b> {task.status}
          </p>

          <button
            href="#"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#staticBackdrop${task.id}`}
          >
            Edit Task
          </button>
        {/* Edit task Modal */}
          <div
            className="modal fade"
            id={`staticBackdrop${task.id}`}
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
