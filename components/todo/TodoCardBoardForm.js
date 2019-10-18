import React from 'react';
import { FooterBtn } from './FooterBtn';
import PropTypes from 'prop-types';

export const TodoCardBoardForm =({todoCardTitle,onChangeTodoCardTitle,onClickTodoCardTitleAdd,onClickTodoCard})=>{
    return (
        <form>
            <span>
                <textarea onChange={onChangeTodoCardTitle} required defaultValue={todoCardTitle}></textarea>
                {/* <input value={todoCardTitle} onChange={onChangeTodoCardTitle} required/> */}
            </span>            
            <FooterBtn onClickSaveBtn={onClickTodoCardTitleAdd} onClickCancelBtn={onClickTodoCard}/>
            <style jsx>{`
                form{
                    display : block;
                }
                span{
                    width : 100%;
                    vertical-align : middle;
                    display : inline-block;
                    padding : 2px 0;
                }
                textarea{
                    height : 100%;
                    resize : vertical;
                    padding : 10px;
                    background : #fff;
                    border : none;
                    border-radius : 2px;
                    width : 100%;
                    min-height : 50px;
                    max-height : 200px;
                    margin : 0;
                    line-height : normal;
                    box-sizing : border-box;
                }
            `}</style>
        </form>
    );
};

TodoCardBoardForm.propTypes = {
    todoCardTitle : PropTypes.string,
    onChangeTodoCardTitle : PropTypes.func,
    onClickTodoCardTitleAdd : PropTypes.func,
    onClickTodoCard : PropTypes.func,
}

TodoCardBoardForm.defaultProps = {
    todoCardTitle : ''
}