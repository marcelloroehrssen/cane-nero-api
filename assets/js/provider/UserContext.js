import React, {createContext, useState} from 'react';
import useHttp from "../hooks/UseHttp";

const UserContext = createContext([]);

export function UserContextProvider(props) {

    const [state, setState] = useState({
        'list': null
    });


    useHttp('/user',{}, (data) => {
        setState({
            'list': data.data
        })
    });

    return (
        <UserContext.Provider value={{...state}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContext;
