import { TodoListBoard } from "../components/todo/TodoListBoard"

const Home=()=>{
    return(
        <div className="index-wrap">            
            <div className="center-align">
                    <TodoListBoard/>
            </div>
            <style jsx>{`
                .index-wrap{
                    padding : 10px;
                }
            `}</style>           
        </div>
    )
}

export default Home;