import React, { useState, useCallback } from 'react';
import { useInput } from '../../utils/utils';

export const ListBoard = ()=>{
    const [title, onChangeTitle] = useInput('');
    const [addFlag, setAddFlag] = useState(false);
    const [listFlag, setListFlag] = useState(false);
    const [checkContent, setCheckContent] = useState('');
    const [checkList, setCheckList] = useState([]);
    const onClickAdd = useCallback((e)=>{
        e.preventDefault();
        console.log(title);        
        setListFlag(true);
    },[title]);
    
    const onChangeAddFlag = useCallback(()=>{
        setAddFlag(prev=>!prev);
    },[]);

    const onCreateTodoList = useCallback(()=>{
        onChangeAddFlag();
    },[]);

    const onChekContentAdd = useCallback((e)=>{
        e.preventDefault();
        console.log(checkContent);
        setCheckList([...checkList,checkContent]);
        setCheckContent('');
    },[checkContent,checkList]);

    const onChangeCheckContent = (e)=>{
        setCheckContent(e.target.value);
    }

    const onRemoveCheckContent = useCallback((idx)=>{
        const filterCheckList  = checkList.filter((v,i)=>i!==idx);
        setCheckList(filterCheckList);
    },[checkList]);

    return(
        <div>
            {
                !listFlag? 
                    <div>
                        {
                            addFlag ? 
                            <form>
                                <input value={title} required onChange={onChangeTitle}/>
                                <div>
                                    <button onClick={onClickAdd}>추가</button>
                                    <button onClick={onChangeAddFlag}>x</button>
                                </div>
                            </form>
                            : <div onClick={onCreateTodoList}>추가염</div>
                        }
                    </div>                   
                :
                <div>
                    <div>
                        {title}
                    </div>
                    <div>
                        {
                            checkList.length>0 && 
                            checkList.map((v,idx)=>(
                                <div key={idx}>
                                    <input type="checkbox"/>                                
                                    {v}                                                                      
                                    <button onClick={()=>onRemoveCheckContent(idx)}>x</button>
                                </div>
                            ))
                        }
                        <form>
                            <input value={checkContent} onChange={onChangeCheckContent}/>
                            <button onClick={onChekContentAdd}>+</button>   
                        </form>                        
                    </div>  
                </div>                
            }                     
        </div>
    );
};