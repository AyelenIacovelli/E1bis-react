import React, { useContext } from 'react'
import { ListUl } from './ListStyles'
import ToDoListContext from '../context/ToDoListContext'
import CardTask from './CardTask'
import CardMsg from './CardMsg'

const List = () => {

    const { data, handleDelete } = useContext(ToDoListContext)

    return (
        <ListUl >
            {data.length > 0 ? (
                data.map((item) => (
                    <CardTask key={item.id} item={item} handleDelete={handleDelete} />
                ))
            ) : (
                <CardMsg message="No hay tareas pendientes" />
            )
            }
        </ListUl>
    )
}

export default List