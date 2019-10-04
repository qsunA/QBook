import BookImgListComponent from "../components/myBook/BookImgListComponent"
import Link from "next/link";


const myBook = ()=>{
    return(
        <div>
            <div>
                <Link href="./registerBook"><button>책 등록하기</button></Link>
                <button>엑셀로 책 등록하기</button>
            </div>
            <BookImgListComponent/>
        </div>
    )
};

export default myBook;