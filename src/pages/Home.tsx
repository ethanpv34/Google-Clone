import React from 'react';
import Searchbar from '../components/Searchbar';
import logo from "../assets/google-logo-1.jpg";
import "./Home.css";

const Home: React.FC = () => {
    return (
        <div className="container">
            <img className="logo" src={logo} alt="logo" />
            <Searchbar />
        </div>
    );
};

export default Home;