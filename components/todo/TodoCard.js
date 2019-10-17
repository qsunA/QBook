import React, { useState, useCallback } from 'react';

export const TodoCard = ({todo})=>{
    const [todoCheckContent, setTodoCheckContent] = useState('');
    const [todoCheckList, setTodoCheckList] = useState(todo.checkList);

    const onClickCheckContentAdd = useCallback((e)=>{
        e.preventDefault();
        console.log(todoCheckContent);
        setTodoCheckList([...todoCheckList, {check : false, content: todoCheckContent}]);
        setTodoCheckContent('');
    },[todoCheckContent,todoCheckList]);

    const onChangeTodoCheckContent = (e)=>{
        console.log(e.target.value);
        setTodoCheckContent(e.target.value);
    }
    return(
        <div>
            {todo.title}
            <div>
            {
                todoCheckList.length>0 && 
                todoCheckList.map((checkItem,idx)=>(
                    <div key={idx}>
                        <input type="checkbox"/>
                        {checkItem.content}
                        <button>체크염</button>
                    </div>
                ))
            }
            </div>
            <form>
                <input value={todoCheckContent} onChange={onChangeTodoCheckContent}/>
                <div>
                    <button onClick={onClickCheckContentAdd}>+</button>
                    <button>x</button>
                </div>
            </form>
        </div>
    )
};