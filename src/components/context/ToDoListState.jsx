import React, { useReducer } from 'react'
import ToDoListContext from './ToDoListContext'
import reducer from './ToDoListReducer';
import { ADD_TASK, DELETE_TASK } from '../../actionTypes/actions';

const ToDoListState = ({ children }) => {

    const initialState = [{
        id: new Date().getTime(),
        name: "Entregar trabajo",
    }]

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAdd = (task) => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    const handleDelete  = (idTask) => {
        dispatch({
            type: DELETE_TASK,
            payload: idTask
        })
    }

    return (
        <ToDoListContext.Provider value={{ data: state, handleAdd, handleDelete }}>
            {children}
        </ToDoListContext.Provider>
    )
}

export default ToDoListState