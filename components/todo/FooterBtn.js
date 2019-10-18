import React from 'react';
import PropTypes from 'prop-types';

export const FooterBtn = ({onClickSaveBtn,onClickCancelBtn}) => {
    return(
        <div>
            <button className="save-btn" onClick={onClickSaveBtn}>저장</button>
            <button className="cancel-btn" onClick={onClickCancelBtn}>취소</button>
            <style jsx>{`
                .save-btn{
                    border : 1px solid #38a9b6;
                    display : inline-block;
                    cursor : pointer;
                    color: #fff;
                    height : 26px;
                    line-height : 26px;
                    background : #25BED6;
                    border-radius : 2px;
                    font-size : 13px;
                    vertical-align : middle;
                    text-decoration : none;
                    padding : 0 8px;
                    margin : 0 1px;                    
                }

                .save-btn :hover {
                    opacity : 0.5;
                }

                .cancel-btn{
                    border : 1px solid #Eaeaea;
                    background : #f3f3f3;
                    margin : 0 1px;
                    border-radius : 2px;
                    font-size : 13px;
                    vertical-align : middle;
                    text-decoration : none;
                    padding : 0 8px;
                    display : inline-block;
                    cursor : pointer;
                    height : 26px;
                    line-height : 26px;
                }

                .cancel-btn :hover {
                    opacity : 0.5;
                }
                
            `}</style>
        </div>
    );
}

FooterBtn.propTypes = {
    onClickSaveBtn: PropTypes.func,
    onClickCancelBtn : PropTypes.func
}