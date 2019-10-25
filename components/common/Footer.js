import React from 'react';

export const Footer = ()=>{
    return (
        <footer>
            <div>푸터</div>
            <style jsx>{`
                footer{
                    flex-shrink: 0;
                    display : flex;
                    align-items : center;
                    background : #5F5e58;
                    justify-content : center;  
                    height : 100px;                  
                }    
            `}</style>
        </footer>
    )
}