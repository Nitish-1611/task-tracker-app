import Header from "./components/Header";
import Filter from "./components/Filter";
import TaskContainer from "./components/TaskContainer";
import "./App.css";
import TaskListProvider from "./store/task-store";

function App() {
  // const [modalOpen, setModalOpen] = useState(false);

  // const handleCreateTask = () => {
  //   setModalOpen(!modalOpen);
  // };

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
