import React from 'react';
import { FooterBtn } from './FooterBtn';

export const TodoListTitleForm = ({listTitle, onChangeListTitle, onClickTodoListTitleAdd ,onChangeAddFlag}) => {
    return (
        <form>
            <span>
                <input value={listTitle} onChange= {onChangeListTitle} required/>
            </span>
            <FooterBtn onClickSaveBtn = {onClickTodoListTitleAdd} onClickCancelBtn = {onChangeAddFlag}/>
            <style jsx>{`
                form{
                    display : block;
                    width : 100%;
                }
                span {
                    width : 100%;
                    vertical-align : middle;
                    padding : 2px 0;
                    display : inline-block;
                }

                input{
                    display : inline-block;
                    padding : 10px;
                    border-radius : 2px;
                    min-width : 40px;
                    width : 90%;
                    border : 1px solid #ddd;
                    height : 26px;
                }
                footer{
                    margin-top : 4px;
                    display : block;                    
                }
            `}</style>
        </form>
    );
};
