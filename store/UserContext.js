import React, {createContext, Component} from 'react';
import API from '../utils/API';

const UserContext = createContext();
const {Provider, Consumer:UserConsumer} = UserContext;

class UserProvider extends Component{

    state = {
        user : {}
    };

    actions = {
        signUp : (userInfo)=>{
            console.log(userInfo);

            return API.post('/user/signUp',userInfo)
                    .then(response => {
                        const {user} = response.data;
                        this.setState(()=>({
                            user : user
                        }));
                        return response;
                    });
        },

        login : (userInfo) => {
            console.log(userInfo);
            return API.post('/user/login',userInfo)
                    .then(response => {
                        const {user} = response.data;
                        this.setState(()=>({
                            user : user
                        }));
                        return response;
                    });
        },
        
        logout : (userInfo) => {
            return API.post('/user/logout')
                    .then(
                        this.setState(()=>({
                            user : null
                        }))
                    )
        },

        loadUser : () =>{
            return API.get('/user/')
                    .then(response => {
                        const {me} = response.data;
                        this.setState(()=>({
                            me : me
                        }))
                    })
        }
    }
    render(){
        const {state, actions} = this;
        const value = {state, actions};

        return(
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    UserContext,
    UserProvider,
    UserConsumer
}