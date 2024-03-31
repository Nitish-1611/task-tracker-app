import CreateTask from "./CreateTask";
import { Modal } from "bootstrap";

const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <h2 className="mb-0">TASK TRACKER APP</h2>

          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add New Task
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5 text-dark"
                    id="exampleModalLabel"
                  >
                    Create New Task
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-dark">
                  <CreateTask />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
