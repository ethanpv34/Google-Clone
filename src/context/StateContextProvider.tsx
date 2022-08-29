import React, { useContext, useEffect, useState } from 'react';

const StateContext = React.createContext<any>({});
const baseUrl= 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({ children }: any) => {

    const [results, setResults] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [text, setText] = useState<string>('');

    // const searchTerm = localStorage.getItem("searchTerm");
    const getResults = async (url: any) => {
        setLoading(true);
        
        const response = await fetch(`${baseUrl}${url}`, {
            method: "GET",
            headers: {
                'x-proxy-location': 'US',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY as string,
            }
        });
        const data = await response.json();
        console.log(data);
        setResults(data);
        setLoading(false);
    };
    
    return (
        <StateContext.Provider value={{ getResults, results, loading, text, setText }}>
            {children}
        </StateContext.Provider>
    );

};

export const useStateContext = () => useContext(StateContext);

