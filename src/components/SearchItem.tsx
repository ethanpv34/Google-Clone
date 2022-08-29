import React from 'react';
import './SearchItem.css';

const SearchItem: React.FC = ({ link, title, description }: any) => {
    return (
        <div className="search-item">
            <p id="top-link">{link}</p>
            <h2 className="search-link"><a href={link} target="_blank" className="search-link">{title}</a></h2>
            <p>{description}</p>
        </div>
    );
};

export default SearchItem;