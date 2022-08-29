import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useStateContext } from '../context/StateContextProvider';
import './Images.css';

const Images: React.FC = () => {

    const { getResults, loading, results } = useStateContext();
    const searchTerm = localStorage.getItem("searchTerm");

    useEffect(() => {
        getResults(`/images/q=${searchTerm}&num=40`)
    }, []);

    return (
        <div>
            <Navbar />
            {loading && <CircularProgress color="primary" size={50} id="spinner3" />}
            {!loading &&
            <>
                <p id="info3">About {results?.image_results?.length} results ({results?.ts} seconds)</p>
                <section className="images-results-section">
                    {results?.image_results?.map(({ image, link: { href, title } }: any, index: number) => (
                        <div className="image-container" key={index}>
                            <a href={href} target="_blank">
                                <img src={image?.src} alt={title} />
                                <p>{title}</p>
                            </a>
                        </div>
                    ))}
                </section>
            </>}
        </div>
    );
};

export default Images;