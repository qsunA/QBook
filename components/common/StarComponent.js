import React from 'react';

const StarComponent = ()=>{
    return(
        <div className="star">
            <style jsx>{`
            .star{
                height: 25px;
                width: 25px;
                background : #49A6A6;
                clip-path:polygon(
                    50% 0%,
                    63% 38%,
                    100% 38%,
                    69% 59%,
                    82% 100%,
                    50% 75%,
                    18% 100%,
                    31% 59%,
                    0% 38%,
                    37% 38%
                );
            }
            `}</style>
        </div>
    )
};

export default StarComponent;