import { createContext } from "react";

const TodoListContext = createContext({
    todoBoardList : [],
    addTodoBoard : ()=>{},
    addTodoList : ()=>{},
    updateTodoBoard : ()=>{},
    updateTodoList : ()=>{},
    removeTodoBoard : ()=>{},
    removeTodoList : ()=>{},
    changeOrderToddBoardList : ()=>{}
})

export default TodoListContext;