import React, {useEffect} from 'react';

export default function useHttp(url, params, callback, errorCallback) {
    useEffect(() => {
        fetch(url, params)
            .then((response) => response.json())
            .then(response => callback(response))
            .catch(error => errorCallback(error))
            ;
    }, []);
}
