import { useContext } from "react";
import AddTask from "./components/Task/AddTask";
import ToDoListContext from "./components/context/ToDoListContext";
import ButtonAll from "./components/button/ButtonAll";
import { Container } from "./components/Wrapper/GeneralWrapperStyles";
import List from "./components/Task/List";
import Routes from "./routes/Routes";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";




function App() {

  const { data, handleAdd, handleDeleteAll } = useContext(ToDoListContext)
  console.log(data);

  return (
    <>
      <Container>
        <Navbar />
        <AddTask handleAdd={handleAdd} />
        <List />
        <ButtonAll handleDeleteAll={handleDeleteAll}></ButtonAll>
      </Container>
    </>
  );
}

export default App;
