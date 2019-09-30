import React from 'react';
import TitleBoardComponent from './TitleBoardComponent';

const dummy = [
    {
        title : '소장권수',
        message : '100권'
    },
    {
        title : '읽은 권수',
        message : '30권'
    },
    {
        title : '소장 Top 분야',
        message : '역사'
    },
    {
        title : '서평 권수',
        message : '20'
    }
];

const TitleBoardListComponent = ()=>{
    const allRows = Array.from(Array(2).keys());
    let counter=1;
    return(
        <div>
            {
                allRows.map(rows=>
                    <div key={rows} className='row'>
                        {
                            dummy.slice(rows*2,counter++ *2).map((v)=>{
                                return <TitleBoardComponent key={v} board={v}/>                            })
                        }
                    </div>
                )
            }
            <style jsx>{`
                .row{
                    display:flex;
                    flex-direction : row;
                }
            `}</style>
        </div>
    )
}

export default TitleBoardListComponent;