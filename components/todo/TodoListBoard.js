import React, { useState, useCallback } from 'react';
import { useInput } from '../../utils/utils';
import { TodoCard } from './TodoCard';

export const TodoListBoard = ()=>{
    const [listTitle, onChangeListTitle] = useInput('');
    const [todoListAddFlag, setTodoListAddFlag] = useState(false);
    const [todoListComplete, setTodoListComplete] = useState(false);
    const [todoCardAddFlag, setTodoCardAddFlag] = useState(false);
    const [todoCardTitle, setTodoCardTitle] = useState('');
    const [todoCardList, setTodoCardList] = useState([]);

    const onCreateTodoList = useCallback(()=>{
        setTodoListAddFlag(prev=>!prev);
    },[]);

    const onClickTodoListTitleAdd = useCallback((e)=>{
        e.preventDefault();
        if(!listTitle){
            return;
        }
        console.log(listTitle);
        setTodoListComplete(true);
    },[listTitle]);

    const onClickTodoCard = useCallback(()=>{
        setTodoCardAddFlag(prev=>!prev);
    },[todoCardAddFlag]);

    const onClickTodoCardTitleAdd = useCallback((e)=>{
        e.preventDefault();
        if(!todoCardTitle){
            return;
        }
        console.log(todoCardTitle);
        setTodoCardList([...todoCardList, {title : todoCardTitle, checkList : []}]);
        setTodoCardTitle('');
        setTodoCardAddFlag(prev=>!prev);
    },[todoCardTitle, todoCardList]);

    const onChangeAddFlag = useCallback(()=>{
        setTodoListAddFlag(prev=>!prev);
    },[]);

    const onChangeTodoCardTitle = (e)=>{
        setTodoCardTitle(e.target.value);
    }

    return(
        <div>
            {
                todoListComplete ? 
                <div>
                    <div>
                        {listTitle}
                    </div>
                    <div>
                    {
                        todoCardList.length>0 && 
                        todoCardList.map((todo, idx)=>(
                            <TodoCard key={idx} todo={todo}/>
                        ))
                    }
                    </div>                    
                    <div>
                    {
                        todoCardAddFlag? 
                        <form>
                            <input value={todoCardTitle} onChange={onChangeTodoCardTitle} required/>
                            <div>
                                <button onClick={onClickTodoCardTitleAdd}>저장</button>
                                <button onClick={onClickTodoCard}>취소</button>
                            </div>
                        </form>
                        :
                        <div onClick={onClickTodoCard}>
                            카드추가
                        </div>
                    }
                    </div>
                </div>
                :<div>
                {
                    todoListAddFlag? 
                    <form>
                        <input value={listTitle} onChange= {onChangeListTitle} required/>
                        <div>
                            <button onClick={onClickTodoListTitleAdd}>추가</button>
                            <button onClick={onChangeAddFlag}>x</button>
                        </div>
                    </form>
                    : <div onClick={onCreateTodoList}>
                        추가염
                    </div>
                }
                </div>
                
            }
        </div>
        
    );
};