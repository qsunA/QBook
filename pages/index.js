import LoginForm from "../components/common/LoginForm"

const Home=()=>{
    return(
        <div>            
            <div className="center-align">
                    sssff
            </div>
            {/* <div>

                
            </div>
            <nav>
                <div>
                    <div>
                        홈
                    </div>
                    <div>
                        홈
                    </div>
                    <div>
                        홈
                    </div>
                    <div>
                        홈
                    </div>
                </div>
            </nav>
            <div>
                본문
            </div> */}
            <style jsx>{`
                div {
                    margin : 0;
                    padding : 0;
                }
                .center-align {
                    margin : 0 auto;
                    width : 1080px;   
                }
                header {
                    margin : 0;
                    padding : 10;
                    background : #49A6A6;
                }
                .header-main{
                    display : flex;
                    flex-direction: row;
                    justify-content : space-around;
                }   
                header form {
                    align-items : flex-end;
                } 
                
                header ul{
                    margin : 0;
                    padding : 0;
                    list-style : none;
                }

                header ul li{
                    list-style-type : none;
                    display : inline-block;
                }
            `}

            </style>
        </div>
    )
}

export default Home;