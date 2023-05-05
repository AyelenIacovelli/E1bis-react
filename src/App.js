import { useContext } from "react";
import AddTask from "./components/Task/AddTask";
import CardMsg from "./components/Task/CardMsg";
import CardTask from "./components/Task/CardTask";
import ToDoListContext from "./components/context/ToDoListContext";



function App() {

  const { data, handleAdd, handleDelete } = useContext(ToDoListContext)
  console.log(data);

  return (
    <>        
        <div>
          <AddTask handleAdd={handleAdd} />
        </div>
        <ul>
          {data.length > 0 ? (
            data.map( (item) => (
              <CardTask key={item.id} item={item} handleDelete={handleDelete} />
            ))
          ) : (
            <CardMsg message="No hay tareas pendientes"/>
          )
          }        
        </ul>
        
    </>
  );
}

export default App;
