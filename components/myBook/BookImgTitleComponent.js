import React from 'react';

const BookImgTitleComponent = ({img, title}) =>{
    return(
        <div>
            <image src={img}></image>
            <label>{title}</label>
            <style jsx>{`
                width : 120px;
                
            `}</style>
        </div>
    );
};

export default BookImgTitleComponent;