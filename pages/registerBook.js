import { useInput } from "../utils/utils";
import { useState, useCallback } from "react";

const registerBook = ()=>{

    const [isbn, onChangeIsbn] = useInput('');
    const [title,onChangeTitle] = useInput('');
    const [publisher, onChangePublisher] = useInput('');
    const [author, onChangeAuthor] = useInput('');
    const [category, setCategory] = useState('');
    const [price, onChangePrice] = useInput(0);
    const [subTitle, onChangeSubTitle] =useInput('');

    const categories = [
        {label:'인문', value:'humanist'},
        {label:'과학', value : 'science'},
        {label:'예술', value : 'art'},
        {label: '컴퓨터', value : 'computer'}
    ];

    const onChangeCategory = useCallback((e)=>{
        setCategory(e.target.value);
    },[]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        const book = {
            isbn : isbn,
            title : title,
            publisher : publisher,
            author : author,
            category : category,
            price : price,
            subTitle : subTitle
        };

        console.log({
            isbn,
            title,
            publisher,
            author,
            category,
            price,
            subTitle
        })
    },[isbn,title,publisher,author,category,price, subTitle]);

    return(
        <form onSubmit={onSubmit}>
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
                        <select value={category} onChange={onChangeCategory}>
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
            <div className="btn-div">
                <button type="submit">등록</button>
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
                    flex : 1;
                    margin-top : 10px;
                }
                label {
                    flex : 1;
                }
                input {
                    flex : 3;
                }
                select{
                    flex : 3;
                }
                .img-btn{
                    flex : 1;
                    margin : 10px;
                    border : 1px solid #c4cfb0;
                    background : #d8dfcb; 
                    display : flex;
                    align-items: center;
                    justify-content : center;
                }

                .btn-div{
                    margin : 10px;
                }
            `}</style>
        </form>
    );
}

export default registerBook;