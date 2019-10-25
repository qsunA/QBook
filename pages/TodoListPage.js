import { useState, useCallback, useContext } from "react";
import { TodoListBoard } from "../components/todo/TodoListBoard";
import TodoListContext from "../context/TodoListContext";
import DraggableApp from "../components/Draggable/DraggableApp";
import TodoListAddWrapper from "../components/todo/TodoListAddWrapper";
const TodoListPage = ()=>{
    const {
        todoBoardList,
        addTodoBoard
    } = useContext(TodoListContext);

    const onAddTodoBoardList = (listTitle) =>{
        console.log(listTitle);
        addTodoBoard(
            {
                listTitle : listTitle, 
                index : todoBoardList.length, 
                todoBoardKey : todoBoardList.length, 
                todoList : []
            }
        );
    }
    console.log(todoBoardList);
    return(
        <div>
            {
                todoBoardList.length>0 && 
                todoBoardList.map((v,idx)=>(
                    <TodoListBoard key={idx} todos = {v} />
                ))
            }
            <TodoListAddWrapper onAddTodoBoardList={onAddTodoBoardList}/>
            <DraggableApp/>
        </div>
    );  
}

export default TodoListPage