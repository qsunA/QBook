import { useContext, useState, useCallback, useEffect } from "react";
import { TodoListBoard } from "../components/todo/TodoListBoard";
import TodoListContext from "../context/TodoListContext";
import DraggableApp from "../components/Draggable/DraggableApp";
import TodoListAddWrapper from "../components/todo/TodoListAddWrapper";
import { DragDropContext,Droppable, Draggable } from 'react-beautiful-dnd';
const WIDTH = 250;

const TodoListPage = ()=>{
    const {
        todoBoardList,
        addTodoBoard,
        changeOrderToddBoardList
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

    const reorder = (list,startIndex,endIndex)=>{
        const result = Array.from(list);
        const [removed] = result.splice(startIndex,1);
        result.splice(endIndex,0,removed);
        return result;
    }

    const onDragEnd = (result) =>{
        if(!result.destination){
            return;
        }
        
        const items = reorder(
            todoBoardList,
            result.source.index,
            result.destination.index
        );

        changeOrderToddBoardList(items);
    }

    return(
        <div className="todo-board-wrapper">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable" direction="horizontal">
                    {(provided,snapshot) =>(
                        <div {...provided.droppableProps} >
                        {
                            todoBoardList.length>0 && 
                            todoBoardList.map((v,idx)=>{
                                return (
                                <Draggable key={v.todoListKey} draggableId={v.todoBoardKey.toString()} index={idx} >
                                    {(provided,snapshot) =>(
                                        <TodoListBoard key={idx} todos = {v}  
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}/>   
                                    )}                                    
                                </Draggable>
                                )
                            })                            
                        }
                        {provided.placeholder}
                        </div>
                    )}                
                </Droppable>
            
            </DragDropContext>
            
            <TodoListAddWrapper onAddTodoBoardList={onAddTodoBoardList}/>
            <style jsx>{`
                .todo-board-wrapper{
                    display : flex;
                    flex-direction : row;
                    margin : 0;
                    padding : 10px;
                }
            `}</style>
            <DraggableApp/>
        </div>
    );  
}

export default TodoListPage