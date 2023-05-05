import { useContext, useState } from "react";
import AddTask from "./components/Task/AddTask";
import CardMsg from "./components/Task/CardMsg";
import CardTask from "./components/Task/CardTask";
import ToDoListContext from "./components/context/ToDoListContext";
import ButtonAll from "./components/button/ButtonAll";
import { Container } from "./components/Wrapper/GeneralWrapperStyles";
import List from "./components/Task/List";



function App() {



  const { data, handleAdd, handleDelete, handleDeleteAll } = useContext(ToDoListContext)
  console.log(data);

  return (
    <>
      <Container>
        <AddTask handleAdd={handleAdd} />
        <List />
        <ButtonAll handleDeleteAll={handleDeleteAll}></ButtonAll>
      </Container>
    </>
  );
}

export default App;
