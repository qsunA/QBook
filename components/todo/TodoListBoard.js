import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TodoCard } from './TodoCard';
import { TodoCardBoardForm } from './TodoCardBoardForm';
import { TodoCardAddBtn } from './TodoCardAddBtn';

export const TodoListBoard = ({todos})=>{
    const [listTitle, setListTitle] = useState('');
    const [todoCardAddFlag, setTodoCardAddFlag] = useState(false);
    const [todoCardTitle, setTodoCardTitle] = useState('');
    const [todoCardList, setTodoCardList] = useState([]);

    useEffect(() => {
        if(todos){
            setListTitle(todos.listTitle);
        }
    }, []);

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

    const onChangeTodoCardTitle = (e)=>{
        setTodoCardTitle(e.target.value);
    }

    const onCardDragOver = useCallback((e)=>{
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        return false;
    },[]);

    const onCardDrop = useCallback((e)=>{
        let idx = e.dataTransfer.getData('idx');
    },[]);
    
    return(
        <div className="board-list-wrap">
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
            <style jsx>{`
                .board-list-wrap{
                    margin : 0;
                    margin-right : 10px;
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

// TodoListBoard.propTypes = {
//     todos : PropTypes.func.isRequired
// }