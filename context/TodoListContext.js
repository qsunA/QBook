import { createContext } from "react";

const TodoListContext = createContext({
    todoBoard : [],
    addTodoBoard : ()=>{},
    addTodoList : ()=>{},
    updateTodoBoard : ()=>{},
    updateTodoList : ()=>{},
    removeTodoBoard : ()=>{},
    removeTodoList : ()=>{}
})

export default TodoListContext;