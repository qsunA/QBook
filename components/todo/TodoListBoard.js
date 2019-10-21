import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TodoCard } from './TodoCard';
import { TodoListTitleForm } from './TodoListTitleForm';
import { TodoCardListAddBtn } from './TodoCardListAddBtn';
import { TodoCardBoardForm } from './TodoCardBoardForm';
import { TodoCardAddBtn } from './TodoCardAddBtn';

export const TodoListBoard = ({todos,onAddTodoBoardList})=>{
    const [listTitle, setListTitle] = useState('');
    const [todoListAddFlag, setTodoListAddFlag] = useState(false);
    const [todoListComplete, setTodoListComplete] = useState(false);
    const [todoCardAddFlag, setTodoCardAddFlag] = useState(false);
    const [todoCardTitle, setTodoCardTitle] = useState('');
    const [todoCardList, setTodoCardList] = useState([]);

    useEffect(() => {
        if(todos){
            setListTitle(todos.title);
            setTodoListComplete(true);
            console.log(todos.title)
        }
    }, [todos]);

    const onCreateTodoList = useCallback(()=>{
        setTodoListAddFlag(prev=>!prev);
    },[]);

    const onClickTodoListTitleAdd = useCallback((e)=>{
        e.preventDefault();
        if(!listTitle){
            return;
        }
        setTodoListComplete(true);
        onAddTodoBoardList(listTitle);
    },[listTitle]);

    const onClickTodoCard = useCallback(()=>{
        setTodoCardAddFlag(prev=>!prev);
    },[todoCardAddFlag]);

    const onClickTodoCardTitleAdd = useCallback((e)=>{
        e.preventDefault();
        if(!todoCardTitle){
            return;
        }
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

    const onChangeListTitle = (e) =>{
        setListTitle(e.target.value);
    }

    const onCardDragOver = useCallback((e)=>{
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        return false;
    },[]);

    const onCardDrop = useCallback((e)=>{
        let idx = e.dataTransfer.getData('idx');

        console.log('onCardDropIdx: '+idx);
    },[]);

    return(
        <div className="board-list-wrap">
            {
                todoListComplete ? 
                <div>
                    <div className="list-title">
                        {listTitle}
                    </div>                            
                    <div onDragOver={onCardDragOver} onDrop={onCardDrop}>
                    {
                        todoCardList.length>0 && 
                        todoCardList.map((todo, idx)=>(
                            <TodoCard key={idx} todo={todo} todoKey={idx}/>
                        ))
                    }
                    </div>                    
                    <div>
                    {
                        todoCardAddFlag? 
                            <TodoCardBoardForm todoCardTitle={todoCardTitle} onChangeTodoCardTitle={onChangeTodoCardTitle}
                            onClickTodoCardTitleAdd={onClickTodoCardTitleAdd} onClickTodoCard={onClickTodoCard}/>
                            :
                            <TodoCardAddBtn onClickTodoCard={onClickTodoCard}/>
                    }
                    </div>
                </div>
                :<div>
                {
                    todoListAddFlag? 
                    <TodoListTitleForm listTitle={listTitle} onChangeListTitle={onChangeListTitle}
                    onClickTodoListTitleAdd={onClickTodoListTitleAdd} onChangeAddFlag={onChangeAddFlag}/>
                    : <TodoCardListAddBtn onCreateTodoList={onCreateTodoList}/>
                }
                </div>
                
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
};

TodoListBoard.propTypes = {
    onAddTodoBoardList : PropTypes.func.isRequired
}