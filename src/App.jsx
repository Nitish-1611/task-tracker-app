import Header from "./components/Header";
import Filter from "./components/Filter";
import TaskContainer from "./components/TaskContainer";
import TaskListProvider from "./store/task-store";

function App() {
  return (
    <>
      <TaskListProvider>
        <Header />
        <Filter />
        <TaskContainer />
      </TaskListProvider>
    </>
  );
}

export default App;
