import React from 'react';
import BookImgTitleComponent from './BookImgTitleComponent';

const BookImgListComponent = ({bookList})=>{
    return(
        <ul>
            {
                bookList.map((v,i)=>{
                    return <li><BookImgTitleComponent book={v} key={i}/></li>
                })
            }
            <style jsx>{`
                ul : {
                    list-style: none;
                }

                li : {
                    display : inline-block;
                }
            `}</style>
        </ul>
    );
};

export default BookImgListComponent;