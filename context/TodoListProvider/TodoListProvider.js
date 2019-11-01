import React, { useState } from 'react';
import TodoListContext from '../TodoListContext';

const TodoListProvider = ({children}) => {

    const todoListState = {
        title : '',
        idx : 0,
        todoListKey : 0        
    }
    
    const todoBoardState = {
        listTitle : '',
        index : 0,
        todoBoardKey : 0,
        todoList : [todoListState]
    };

    const getTodoBoard = (todoBoardKey)=>{
        return todoBoard.find(v=> v.todoBoardKey === todoBoardKey)
    }

    const getTodoBoardIndex = (todoBoardKey)=>{
        return todoBoard.findIndex(v=> v.todoBoardKey === todoBoardKey)
    }

    const getTodoLlist = (todoBoardKey, todoListKey) =>{
        let todoBoardItem= getTodoLlist(todoBoardKey);
        return todoBoardItem.todoList.find(v=>v.todoListKey === todoListKey);
    }

    const getTodoLlistIndex = (todoBoardKey, todoListKey) =>{
        let todoBoardItem= getTodoLlist(todoBoardKey);
        return todoBoardItem.todoList.findIndex(v=>v.todoListKey === todoListKey);
    }    
    
    const addTodoBoard = ({
        listTitle,
        index,
        todoBoardKey,
        todoList
    })=>{
        setTodoBoard(prev=>{
            return{
                ...prev,
                todoBoardList : 
                [...prev.todoBoardList, 
                    {listTitle: listTitle, index : index, 
                    todoBoardKey : todoBoardKey, todoList : todoList}]
            }
        });
    }

    const addTodoList = ({
        title,
        idx,
        todoListKey,
        todoBoardKey
    })=>{
        const todo = {title : title, idx : idx, todoListKey: todoListKey};
        const todoBoardTmp = getTodoBoard(todoBoardKey);
        if(todoBoardTmp.todoList){
            const todoList = todoBoardTmp.todoList.slice();
            todoList = [...todoList , todo];
            todoBoardTmp.todoList = todoList;
        }else{
            todoBoardTmp.todoList = [todo];
        }

        setTodoBoard(prev=>{ 
            return {
                ...prev,
                todoBoardList : 
                [...todoBoard,todoBoardTmp]
                }
        });
    }  
    
    const updateTodoBoard = ({
        listTitle,
        index,
        todoBoardKey
    }) =>{
        let todoBoardItem = getTodoBoard(todoBoardKey);
        todoBoardItem = {...todoBoardItem, listTitle : listTitle, index : index};
        const todoBoardIndex = getTodoBoardIndex(todoBoardKey);
        let todoBoardList = todoBoard.slice();
        todoBoardList.splice(todoBoardIndex,1, todoBoardItem);

        setTodoBoard(prev=>{
            return{
                ...prev,
                todoBoardList : todoBoardList
            }
        });
    }

    const updateTodoList = ({
        title,
        idx,
        todoListKey,
        todoBoardKey
    }) => {
        let todoList = getTodoLlist(todoBoardKey,todoListKey);
        const todoListIndex = getTodoLlistIndex(todoBoardKey, todoListKey);
        
        todoList = {...todoList, title : title, idx : idx};
        
        const todoBoardItem = getTodoBoard(todoBoardKey);
        const todoBoardIndex = getTodoBoardIndex(todoBoardKey);
        if(todoBoardItem.todoList){
            const todoListTmp = todoBoardItem.todoList.slice();
            todoListTmp.splice(todoListIndex, 1, todoList);
            const todoBoardTmp = {...todoBoardItem};
            todoBoardTmp.todoList = todoListTmp;
            let todoBoardList = todoBoard.slice();
            todoBoardList.splice(todoBoardIndex,1, todoBoardTmp);

            setTodoBoard(prev=>{
                return{
                    ...prev,
                    todoBoardList : todoBoardList
                }
            });
        }        
    }

    const removeTodoBoard = ({
        todoBoardKey
    }) => {

        setTodoBoard(prev=>{
            return{
                ...prev,
                todoBoardList : todoBoard.filter(v=>v.todoBoardKey !== todoBoardKey)
            }
        });
    }

    const removeTodoList = ({
        todoListKey,
        todoBoardKey
    }) => {
        const todoBoardItem = getTodoBoard(todoBoardKey);
        let todoList = todoBoardItem.todoList.slice();
        todoList = todoList.filter(v=>v!==todoListKey);
        const todoBoardTmp = {...todoBoardItem};
        todoBoardTmp.todoList = todoList;
        const todoBoardIndex = getTodoBoardIndex(todoBoardKey);
        let todoBoardList = todoBoard.slice();
        todoBoardList.splice(todoBoardIndex,1, todoBoardTmp);

        setTodoBoard(prev=>{
            return{
                ...prev,
                todoBoardList : todoBoardList
            }
        });
    }

    const changeOrderToddBoardList = ({todoBoardList})=>{
        setTodoBoard(prev=>{
            return{
                ...prev,
                todoBoardList : todoBoardList
            }
        });
    }
    
    const todoBoardListState = {
        todoBoardList : [],
        addTodoBoard,
        addTodoList,
        updateTodoBoard,
        updateTodoList,
        removeTodoBoard,
        removeTodoList,
        changeOrderToddBoardList
    }

    const [todoBoard, setTodoBoard] = useState(todoBoardListState);

    return (
        <TodoListContext.Provider value={todoBoard}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListProvider;