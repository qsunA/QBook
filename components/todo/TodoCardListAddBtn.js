import React from 'react';

export const TodoCardListAddBtn = ({onCreateTodoList})=>{
    return (
        <div onClick={onCreateTodoList}>
            추가염
        </div>
    );
}