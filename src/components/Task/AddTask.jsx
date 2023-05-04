import React from 'react'
import { TaskButton, TaskForm, TaskInput, TaskTitle } from './AddTaskStyles'

const AddTask = () => {
    return (
        <>
            <TaskTitle>To Do List </TaskTitle>
            <TaskForm>
                <TaskInput />
                <TaskButton>Agregar</TaskButton>
            </TaskForm>
        </>
    )
}

export default AddTask