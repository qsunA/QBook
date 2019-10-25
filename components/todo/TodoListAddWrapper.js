import React, { useState, useCallback } from 'react';
import { TodoListTitleForm } from './TodoListTitleForm';
import { TodoCardListAddBtn } from './TodoCardListAddBtn';

const TodoListAddWrapper = ({onAddTodoBoardList}) =>{
    
    const [todoListAddFlag, setTodoListAddFlag] = useState(false);
    const [listTitle, setListTitle] = useState('');
    
    const onChangeListTitle = (e) =>{
        setListTitle(e.target.value);
    }

    const onChangeAddFlag = useCallback(()=>{
        setTodoListAddFlag(prev=>!prev);
    },[]);
    
    const onCreateTodoList = useCallback(()=>{
        setTodoListAddFlag(prev=>!prev);
    },[]);

    const onClickTodoListTitleAdd = useCallback((e)=>{
        e.preventDefault();
        if(!listTitle){
            return;
        }

        onAddTodoBoardList(listTitle);
        setListTitle('');
    },[listTitle]);

    return(
        <div className="board-list-wrap list-title">
        {
            todoListAddFlag? 
            <TodoListTitleForm listTitle={listTitle} onChangeListTitle={onChangeListTitle}
            onClickTodoListTitleAdd={onClickTodoListTitleAdd} onChangeAddFlag={onChangeAddFlag}/>
            : <TodoCardListAddBtn onCreateTodoList={onCreateTodoList}/>
        }
        <style jsx>{`
            .board-list-wrap{
                margin : 0;
                padding : 15px;
                background: #e1e2e5;
                border-radius: 2px;
                width : 250px;
            }
            .list-title{
                font-size : 13px;
            }
        `}</style>
        </div>
    );  
}

export default TodoListAddWrapper; 