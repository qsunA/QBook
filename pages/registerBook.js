import { useInput } from "../utils/utils";
import { useState } from "react";

const registerBook = ()=>{

    const [isbn, onChangeIsbn] = useInput('');
    const [title,onChangeTitle] = useInput('');
    const [publisher, onChangePublisher] = useInput('');
    const [author, onChangeAuthor] = useInput('');
    const [category, onChangeCategory] = useState('');
    const [price, onChangePrice] = useInput(0);
    const [subTitle, onChangeSubTitle] =useInput('');

    const categories = [
        {label:'인문', value:'humanist'},
        {label:'과학', value : 'science'},
        {label:'예술', value : 'art'},
        {label: '컴퓨터', value : 'computer'}
    ];

    return(
        <form>
            <div className="register-main">
                <div className="register-form">
                    <div className="form-input">
                        <label htmlFor="book-title">책 제목</label>
                        <input value={title} required onChange={onChangeTitle}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="book-subtitle">부제목</label>
                        <input value={subTitle} required onChange={onChangeSubTitle}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="book-publisher">ISBN</label>
                        <input value={isbn} required onChange={onChangeIsbn}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="book-author">저자</label>
                        <input value={author} onChange={onChangeAuthor}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="book-publisher">출판사</label>
                        <input value={publisher} onChange={onChangePublisher}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="book-price">가격</label>
                        <input value={price} onChange={onChangePrice}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="book-category">분야</label>
                        <select>
                            {
                                categories.map((v,i)=>
                                    <option value={v.value} key={i}>{v.label}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className="img-btn">
                    <button>이미지 등록</button>
                </div>
            </div>
            <style jsx>{`
                form {
                    padding : 10px;
                }
                .register-main{
                    display : flex;
                    flex-direction : row;
                }
                .register-form{
                    flex : 3;                    
                }
                .form-input {                    
                    display : flex;
                    flex-direction : row;
                    height : 35px;
                }
                .img-btn{
                    flex : 1;
                }
            `}</style>
        </form>
    );
}

export default registerBook;