import React, {createContext, useState} from 'react';
import useHttp from "../hooks/UseHttp";

const UserContext = createContext([]);

export function UserContextProvider(props) {

    const [state, setState] = useState({
        'user': null
    });


    useHttp('/user',{}, (data) => {
        setState({
            'user': data.user
        })
    });

    return (
        <UserContext.Provider value={{...state}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContext;
