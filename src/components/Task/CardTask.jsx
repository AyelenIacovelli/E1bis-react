import React from 'react'
import { TaskButtonDelete, TaskLi, TaskP } from './CardTaskStyles'
import { FaTrash } from 'react-icons/fa';

const CardTask = ({ item, handleDelete }) => {

    return (
        <>
            <TaskLi >
                <TaskP  >{item.name}</TaskP>
                <TaskButtonDelete onClick={() => handleDelete(item.id)} ><FaTrash /></TaskButtonDelete>
            </TaskLi>
        </>
    )
}

export default CardTask