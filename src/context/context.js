import React, { createContext, useContext } from "react";

export const context = createContext({
    todos: [
        {
            id: 1,
            todo: "First",
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    deleteTodo: (id)=>{},
    updateTodo: (id, todo)=>{},
    toggleComplete: (id)=>{}

})

export const useTodo = ()=>{
    return useContext(context)
}

export const TodoProvider = context.Provider