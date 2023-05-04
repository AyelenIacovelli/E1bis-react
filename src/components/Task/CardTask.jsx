import React from 'react'
import { TaskButtonDelete, TaskLi, TaskP } from './CardTaskStyles'

const CardTask = () => {
    return (
        <>
            <TaskLi>
                <TaskP>Tarea</TaskP>
                <TaskButtonDelete>Borrar</TaskButtonDelete>
            </TaskLi>
        </>
    )
}

export default CardTask