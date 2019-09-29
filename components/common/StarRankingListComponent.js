import React, { useState, useEffect } from 'react';

const StarRankingListComponent = ({point})=>{
    const [rankingList, setRankingList] = useState([]);
    const [totalStars,setTotalStars] = useState(5);
    const [starsSelected,setStarsSelected]= useState();

    useEffect(()=>{

    },[]);
    
    return(
        <div>   
           {
               [...Array(totalStars)].map((v,i)=>
               <StarComponent key={i} selected={i<starsSelected}
               onCLick={()=>onratechange(i+1)}/>)
           }
        </div>
    )
};

export default StarRankingListComponent;