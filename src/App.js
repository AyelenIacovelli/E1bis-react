import { useContext } from "react";
import AddTask from "./components/Task/AddTask";
import CardMsg from "./components/Task/CardMsg";
import CardTask from "./components/Task/CardTask";
import ToDoListContext from "./components/context/ToDoListContext";


function App() {

  const { initialState } = useContext(ToDoListContext)
  console.log(initialState);

  return (
    <>
      <AddTask />
      <CardTask />
      <CardMsg />
    </>
  );
}

export default App;
