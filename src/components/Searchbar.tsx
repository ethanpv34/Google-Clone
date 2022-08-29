import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MicrophoneIcon from '@mui/icons-material/Mic';
import { Paper, IconButton, InputBase, Input } from "@material-ui/core";
import { useStateContext } from '../context/StateContextProvider';
import './Searchbar.css';
import { useNavigate } from 'react-router-dom';

const Searchbar: React.FC = () => {

    const { setSearch, search, getResults, text, setText } = useStateContext();
    const navigate = useNavigate();

    const handleSearch = (): void => {
        if(!text) return;
        localStorage.setItem("searchTerm", text);
        navigate("/search");
    };

    return (
        <Paper className="searchbar" component="form" elevation={5}>
            <IconButton onClick={handleSearch}>
                <SearchIcon />
            </IconButton>
            <InputBase
                type="text" 
                className="input"
                placeholder="Search Google or type a URL"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
            />
            <IconButton>
                <MicrophoneIcon htmlColor="dodgerblue"/>
            </IconButton>
        </Paper>
    );
};

export default Searchbar;