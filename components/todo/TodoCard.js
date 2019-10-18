import React, { useState, useCallback } from 'react';

export const TodoCard = ({todo,todoKey})=>{
    const [todoCheckContent, setTodoCheckContent] = useState('');
    const [todoCheckList, setTodoCheckList] = useState(todo.checkList);
    const [todoCheckAddFlag,setTodoCheckAddFlag] = useState(false);

    const onClickCheckContentAdd = useCallback((e)=>{
        e.preventDefault();
        console.log(todoCheckContent);
        setTodoCheckList([...todoCheckList, {check : false, content: todoCheckContent}]);
        setTodoCheckContent('');
        setTodoCheckAddFlag(prev=>!prev);
    },[todoCheckContent,todoCheckList]);

    const onChangeTodoCheckContent = (e)=>{
        console.log(e.target.value);
        setTodoCheckContent(e.target.value);
    }

    const onClickCheckFlag = useCallback((e)=>{
        e.preventDefault();
        setTodoCheckAddFlag(prev=>!prev);
    },[todoCheckAddFlag]);

    const onTodoCardDragStart = useCallback((e)=>{
        console.log('dragstart: ', e.target.dataset.idx);
        e.dataTransfer.setData("idx",e.target.dataset.idx);
    },[]);

    return(
        <div className="border-card-wrap" draggable='true' onDragStart={onTodoCardDragStart} data-idx={todoKey}>
            <div className="card-title">
                {todo.title}
            </div>            
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
            {
                todoCheckAddFlag ? 
                    <form>
                        <input value={todoCheckContent} onChange={onChangeTodoCheckContent}/>
                        <div>
                            <button onClick={onClickCheckContentAdd}>+</button>
                            <button onClick={onClickCheckFlag}>x</button>
                        </div>
                    </form>
                    :
                    <div onClick={onClickCheckFlag}>add</div>
            }
            
            <style jsx>{`
                .border-card-wrap{
                    position : relative;
                    padding : 0 10px 10px;
                    background : #fff;
                    border-radius : 2px;
                    font-size : 15px;
                    margin : 0;
                    margin-top: 6px;
                }

                .card-title{
                    padding : 10px 20px 0 0;
                }
            `}</style>
        </div>
    )
};