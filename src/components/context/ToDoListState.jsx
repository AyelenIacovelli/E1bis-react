import React from 'react'
import ToDoListContext from './ToDoListContext'

const ToDoListState = ({ children }) => {

    const initialState = [{
        id: new Date().getTime(),
        name: "Entregar trabajo",
    }]

    return (
        <ToDoListContext.Provider value={{ initialState }}>
            {children}
        </ToDoListContext.Provider>
    )
}

export default ToDoListState