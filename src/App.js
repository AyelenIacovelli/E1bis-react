import { useContext } from "react";
import AddTask from "./components/Task/AddTask";
import CardMsg from "./components/Task/CardMsg";
import CardTask from "./components/Task/CardTask";
import ToDoListContext from "./components/context/ToDoListContext";
import ButtonAll from "./components/button/ButtonAll";
import { Container } from "./components/Wrapper/GeneralWrapperStyles";



function App() {

  const { data, handleAdd, handleDelete, handleDeleteAll } = useContext(ToDoListContext)
  console.log(data);

  return (
    <>
      <Container>
        <AddTask handleAdd={handleAdd} />
        <ul>
          {data.length > 0 ? (
            data.map((item) => (
              <CardTask key={item.id} item={item} handleDelete={handleDelete} />
            ))
          ) : (
            <CardMsg message="No hay tareas pendientes" />
          )
          }
        </ul>


        <ButtonAll handleDeleteAll={handleDeleteAll}></ButtonAll>
      </Container>

    </>
  );
}

export default App;
