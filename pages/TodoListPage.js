import { useContext, useState, useCallback, useEffect } from "react";
import { TodoListBoard } from "../components/todo/TodoListBoard";
import TodoListContext from "../context/TodoListContext";
import DraggableApp from "../components/Draggable/DraggableApp";
import TodoListAddWrapper from "../components/todo/TodoListAddWrapper";
import Draggable from "../components/Draggable/Draggable";
import {inRange} from 'lodash';

const WIDTH = 250;

const TodoListPage = ()=>{
    const {
        todoBoardList,
        addTodoBoard
    } = useContext(TodoListContext);

    const [state,setState] = useState({
        order : todoBoardList,
        dragOrder : todoBoardList,
        draggedIndex : null
    });

    useEffect(()=>{
        console.log(todoBoardList);
        setState(()=>{
            return {
                order : todoBoardList,
                dragOrder : todoBoardList,
                draggedIndex : null
            }
        });
    },[todoBoardList]);

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

    const handleDrag = useCallback(({translation, id}) => {
        if(id===2){
            console.log('ㅁㅁㅁ')
        }
        console.log(todoBoardList)
        const delta = Math.round(translation.x / WIDTH);
        const index = state.order.findIndex(val=>val.index ===id);
        const dragOrder = state.order.filter(val => val.index !== id);
            
        if (!inRange(index + delta, 0, todoBoardList.length)) {
          return;
        }
            
        dragOrder.splice(index + delta, 0, id);
        setState(state => ({
          ...state,
          draggedIndex: id,
          dragOrder
        }));
      }, [state.order, todoBoardList.length]);
        
    const handleDragEnd = useCallback(() => {
        setState(state => ({
          ...state,
          order: state.dragOrder,
          draggedIndex: null
        }));
      }, []);

    return(
        <div className="todo-board-wrapper">
            {
                todoBoardList.length>0 && 
                todoBoardList.map((v,idx)=>{
                    const isDragging = state.draggedIndex === idx;
                    const top = state.dragOrder.indexOf(idx) * (WIDTH + 10);
                    const draggedTop = state.order.indexOf(idx) * (WIDTH + 10);
                    return(
                        <Draggable 
                            key={idx} 
                            id={idx} 
                            onDrag={handleDrag}
                            onDragEnd={handleDragEnd}
                        >
                            <TodoListBoard key={idx} todos = {v} 
                            isDragging={isDragging}
                            top={isDragging ? draggedTop : top}/>
                        </Draggable>
                    )
                    
                })
            }
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