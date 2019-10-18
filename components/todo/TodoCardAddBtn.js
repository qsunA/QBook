import React from 'react';
import PropTypes from 'prop-types';

export const TodoCardAddBtn = ({onClickTodoCard}) =>{
    return(
        <div className="card-add-wrap" onClick={onClickTodoCard}>
            카드 추가염 
            <style jsx>{`
                .card-add-wrap{
                    margin: 0;
                    padding : 0;
                    margin-top: 10px;
                    display : block;
                    border : 1px dashed #bdbfc2;
                    height : 34px;
                    border-radius : 2px;
                    position : relative;
                    cursor : pointer;
                }
            `}</style>
        </div>
    );
}

TodoCardAddBtn.propTypes = {
    onClickTodoCard : PropTypes.func
}