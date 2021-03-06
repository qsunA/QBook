import React from 'react';
import BookImgTitleComponent from './BookImgTitleComponent';

const bookList = [
    {
        img : 'data:image/jpeg;base64,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',
        title : 'yunakim1'
    },
    {
        img : 'https://i.pinimg.com/originals/41/48/48/4148489608f2028f6fc23adba2fdde2a.jpg',
        title : 'yunakim2'
    },
    {
        img : 'https://i.pinimg.com/originals/0e/6d/97/0e6d9787a114c932ab527367c4d28415.jpg',
        title : 'yunakim3'
    },
    {
       
        title : 'yunakim4'
    },
    {
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjC6O2iNsFLYnki4JSeU1rPasdewpoudWT2JsLHZGQ4-gh64ciyA',
        title : 'yunakim5'
    },
];

const BookImgListComponent = ()=>{
    return(
        <div>
            <ul>
                {
                    bookList.map((v,i)=>{
                        return <li key={i}><BookImgTitleComponent title={v.title} img={v.img} key={i}/></li>
                    })
                }
                
            </ul>
            <ul>
                {
                    bookList.map((v,i)=>{
                        return <li key={i}><BookImgTitleComponent title={v.title} img={v.img} key={i}/></li>
                    })
                }
                
            </ul>
            <style jsx>{`
                ul{
                    list-style: none;
                    flex : 1;
                    display : flex;
                    flex-direction : row;
                }

                li{
                    flex : 1;
                    margin : 10px;
                }
            `}</style>
            <hr/>
        </div>
        
    );
};

export default BookImgListComponent;