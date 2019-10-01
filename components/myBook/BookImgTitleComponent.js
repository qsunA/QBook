import React from 'react';

const BookImgTitleComponent = ({img, title}) =>{
    return(
        <div>
            <img src={img? img: '/static/img/no_img.png'}/>
            <label>{title}</label>
            <style jsx>{`
                div{
                    display : flex;
                    flex-direction : column;
                    align-itme : center;
                    cursor: pointer;
                }
                
                :hover {
                        opacity : 0.5;
                }

                img {
                    max-width : 190px;
                    height : '100%';
                    border : 1.2px solid #6D7D7B;
                }
            `}</style>
        </div>
    );
};

export default BookImgTitleComponent;