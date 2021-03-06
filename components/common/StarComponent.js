import React, { useState, useCallback } from 'react';
import classnames from 'classnames';


const StarComponent = ({selected=false,onClick=f=>f})=>{

    return(
        <div className={classnames('star',{select : selected})} onClick={onClick}>
            <style jsx>{`
            .star{
                height: 25px;
                width: 25px;
                background : #808080;
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

            .select {
                background : #FF0000; 
            }
            `}</style>
        </div>
    )
};

export default StarComponent;