import { useState, useCallback } from "react"

export const useInput = (initValue = null) =>{
    const [value,setter] = useState(initValue);
    const handler = useCallback(
        (e) => {
            setter(e.target.value);
        },[]
    );
    return [value,handler];
}

export const isEmptyObject=(obj)=>{
    if(Object.keys(obj).length===0 && JSON.stringify(obj)==="{}"){
        return true;
    }
    return false;
}