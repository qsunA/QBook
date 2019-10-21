import { useState, useCallback } from "react";
import { TodoListBoard } from "../components/todo/TodoListBoard";

const initialValue = [
    {title:'title', idx : 1},
    {title:'tit', idx : 2}
];

const TodoListPage = ()=>{
    
    const [todoBoardList, setTodoBoardList] = useState(initialValue);

    const onAddTodoBoardList = (listTitle) =>{
        setTodoBoardList([...todoBoardList, {title: listTitle, idx : todoBoardList.length}]);
    }

    console.log(todoBoardList.length);
    return(
        <div>
            {
                todoBoardList.length>0 && 
                todoBoardList.map((v,idx)=>(
                    <TodoListBoard key={idx} todos = {v} onAddTodoBoardList={onAddTodoBoardList}/>
                ))
            }
            <TodoListBoard onAddTodoBoardList={onAddTodoBoardList}/>
        </div>
    );  
}

export default TodoListPage