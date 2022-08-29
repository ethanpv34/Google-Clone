import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Navbar from '../components/Navbar';
import { useStateContext } from '../context/StateContextProvider';
import './News.css';

const News: React.FC = () => {
    const { loading, getResults, results } = useStateContext();

    const searchTerm = localStorage.getItem("searchTerm");
    useEffect(() => {
        getResults(`/news/q=${searchTerm}&num=40`);
    }, []);

    return (
        <>
            <Navbar />
            {loading && <CircularProgress color="primary" size={50} id="spinner2"/>}
            {!loading &&
            <section className="news-results-section">
                <p id="info">About {results?.entries?.length} results ({results?.ts} seconds)</p>
                {results?.entries?.map(({ id, links, source, title, title_detail, published }: any) => (
                    <div key={id} className="news-item-container">
                        <p>{source?.href}</p>
                        <h2 className="news-link"><a href={links?.[0].href} target="_blank">{title}</a></h2>
                        <p>{title_detail?.value}</p>
                        <p id="date">{published}</p>
                    </div>
                ))}
                {results?.entries?.length === 0 && <p>No results found for this search</p>}
            </section>}
        </>
    );
};

export default News;