import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchItem from '../components/SearchItem';
import { useStateContext } from '../context/StateContextProvider';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Search.css';

const Search = () => {

    const { getResults, loading, results } = useStateContext();

    const searchTerm = localStorage.getItem("searchTerm");

    useEffect(() => {
        getResults(`/search/q=${searchTerm}&num=40`)
    }, []);

    
    return (
        <>
            <Navbar />
            {loading && <CircularProgress color="primary" size={50} id="spinner"/> }
            {!loading &&
            <div className="search-results-section">
                <p id="info">About {results?.total} results ({results?.ts} seconds)</p>
                {results?.results?.map(({ link, title, description }, index) => (                  
                    <SearchItem 
                        key={index}
                        link={link}
                        title={title}
                        description={description}
                    />                   
                ))}
            </div>}
        </>
    );
};

export default Search;