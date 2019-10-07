import BookImgListComponent from "../components/myBook/BookImgListComponent"
import Link from "next/link";
import { useCallback, useState, createRef, useRef } from "react";


const myBook = ()=>{

    const [file,setFile] = useState('');
    const userFileName = useRef();

    const onSubmit = useCallback((e)=>{
        e.preventDefault();
        if(file === null){
            return;
        }

    },[]);

    const onChange = useCallback((e) => {
        setFile(e.target.files[0]);
        userFileName.current.value = e.target.files[0].name;
    },[]);    

    return(
        <div className="mybook-main">
            <div className="mybook-header">
                <Link href="./registerBook"><button>책 등록하기</button></Link>
                <form onSubmit={onSubmit}>
                    <input placeholder="선택된 파일" type="text" ref={userFileName}/>
                    <label htmlFor="userfile">
                        <input type="file" accept=".xlsx,xls,csv"
                            onChange={onChange}
                        />
                    </label>
                    <button type="submit">올리기</button>
                </form>
            </div>
            <BookImgListComponent/>
            <style jsx>{`
                .mybook-main{
                    display : flex;
                    flex-direction:column;
                }

                .mybook-header{
                    display : flex;
                    flex-direction:row;
                    height : 25px;
                    width : 100%;
                    justify-content : flex-end;
                }
                
                form {
                    display : flex;
                    flex-direction:row;                    
                }
            `}</style>
        </div>
    )
};

export default myBook;