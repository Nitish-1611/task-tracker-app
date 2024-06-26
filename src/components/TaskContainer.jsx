import CompletedTask from "./CompletedTask";
import DeferredTask from "./DeferredTask";
import DeployedTask from "./DeployedTask";
import PendingTask from "./PendingTask";
import ProgressTask from "./ProgressTask";

const TaskContainer = () => {
  return (
    <div className="row task-container">
      <div className="col-md-2 container-div">
        <p className="pending col-header">Pending</p>
        <PendingTask />
      </div>
      <div className="col-md-2 container-div">
        <p className="in-progress col-header">In Progress</p>
        <ProgressTask />
      </div>
      <div className="col-md-2 container-div">
        <p className="complete col-header">Completed</p>
        <CompletedTask />
      </div>
      <div className="col-md-2 container-div">
        <p className="deploy col-header">Deployed</p>
        <DeployedTask />
      </div>
      <div className="col-md-2 container-div">
        <p className="defer col-header">Deferred</p>
        <DeferredTask />
      </div>
    </div>
  );
};

export default TaskContainer;
