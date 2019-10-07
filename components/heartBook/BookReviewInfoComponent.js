import React from 'react';

const BookReviewInfoComponent = ({title, content})=>{
    return(
        <div className="review-main">
            <img src='/static/img/no_img.png'/>
            <div className="review-content">
                <p>{title}</p>
                <div >
                    {content}
                </div>
            </div>
            <style jsx>{`
                .review-main{
                    display : flex;
                    flex-direction : row;
                    flex : 1;
                }

                img{
                    flex : 1;
                }

                .review-content{
                    display : flex;
                    flex-direction : column;
                    flex: 3;
                }

                p{
                    text-decoration : bold;
                }
            `}</style>
        </div>
    );
};

export default BookReviewInfoComponent;