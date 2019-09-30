import React from 'react';
import PropTypes from 'prop-types';

const TitleBoardComponent = ({board})=>{
    return (
        <div>
            <h3>{board.title}</h3>
            <p>{board.message}</p>
            <style jsx>{`
                div {
                        background : #78A6A4;
                        display : flex;
                        max-width : 520px;
                        flex : 1;
                        flex-direction : column;
                        justify-content : center;
                        border : 1px solid #6D7D7B;
                        border-radius : 10px;
                        text-align : center;
                        padding : 15px;
                        margin : 10px;
                    }
                    
                h3,p{
                    font-weight : bold;
                    color : #5F5E58;
                }

            `}</style>
        </div>
    );
}

TitleBoardComponent.propTypes = {
    board : PropTypes.shape({
        title : PropTypes.string,
        message : PropTypes.string,
    })    
}

export default TitleBoardComponent;