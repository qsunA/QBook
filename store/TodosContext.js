import React, { createContext } from 'react';

const TodosContext = createContext();
const {Provider, Consumer: TodosConsumer} = TodosContext;

class TodosProvider extends Component {
    state = {
        todos : []
    }

    actions = {
        addTodos : (todo)=>{
            this.setState(()=>({
                todos : [...todos, {title: todo.title, idx : todo.idx, todoList : [todo.todoList ? todo.todoList : []]}]
            }));
        },

        getTodos : ()=>{
            return this.state.todos;
        },

        removeTodos : (todo) =>{
            this.setState(()=>({
                todos : todos.filter((v,i)=>i!== todo.idx)
            }))
        }
    }

    render(){
        const {state,actions} = this;
        const value = {state,actions};

        return(
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    TodosContext,
    TodosProvider,
    TodosConsumer
}