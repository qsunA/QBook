import React from 'react';

const BookInfoComponent = ()=>{
    return (
        <div className="info">
            <img src='/static/img/no_img.png'/>
            <div className="detail">
                <p>
                    <label>Title</label>
                </p>
                <p>
                    <div>
                        author
                    </div>
                    <div>
                        publisher
                    </div>
                </p>
                <p>
                    <label>분야</label>
                    역사
                </p>
                <p>
                    <label>가격</label>
                    2000원
                </p>
                <p>별점</p>
                <p>리뷰</p>
            </div>
            <style jsx>{`
                .info{
                    display: flex;
                    flex-direction : row;                    
                }
                img {
                    flex : 1;
                }
                .detail{
                    display : flex;
                    flex : 2;
                    flex-display : column;
                }

            `}</style>
        </div>
    );
};

export default BookInfoComponent;