import { useState, useCallback, useContext } from "react";
import { TodoListBoard } from "../components/todo/TodoListBoard";
import TodoListContext from "../context/TodoListContext";

const initialValue = [
    {title:'title', idx : 1},
    {title:'tit', idx : 2}
];

const TodoListPage = ()=>{
    const {
        todoBoard,
        addTodoBoard
    } = useContext(TodoListContext);

    const onAddTodoBoardList = (listTitle) =>{
        addTodoBoard({listTitle : listTitle, index : todoBoard.length, todoBoardkey : todoBoard.length, todoList : []});
    }

    console.log(todoBoard.length);
    return(
        <div>
            {
                todoBoard.length>0 && 
                todoBoard.map((v,idx)=>(
                    <TodoListBoard key={idx} todos = {v} onAddTodoBoardList={onAddTodoBoardList}/>
                ))
            }
            <TodoListBoard onAddTodoBoardList={onAddTodoBoardList}/>
        </div>
    );  
}

export default TodoListPage