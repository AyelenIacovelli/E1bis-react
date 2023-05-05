import React, { useReducer } from 'react'
import ToDoListContext from './ToDoListContext'
import reducer from './ToDoListReducer';
import { ADD_TASK, DELETE_ALL, DELETE_TASK } from '../../actionTypes/actions';

const ToDoListState = ({ children }) => {

    const initialState = []

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAdd = (task) => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    const handleDelete = (idTask) => {
        dispatch({
            type: DELETE_TASK,
            payload: idTask
        })
    }

    const handleDeleteAll = (idTask) => {
        dispatch({
            type: DELETE_ALL,
            payload: idTask
        })
    }

    return (
        <ToDoListContext.Provider value={{ data: state, handleAdd, handleDelete, handleDeleteAll }}>
            {children}
        </ToDoListContext.Provider>
    )
}

export default ToDoListState