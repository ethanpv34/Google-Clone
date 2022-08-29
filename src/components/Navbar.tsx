import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MicrophoneIcon from '@mui/icons-material/Mic';
import FeedIcon from '@mui/icons-material/FeedOutlined';
import ImageIcon from '@mui/icons-material/ImageSearch';
import Close from '@mui/icons-material/Close';
import Divider from '@material-ui/core/Divider';
import { Paper, IconButton, InputBase } from "@material-ui/core";
import './Navbar.css';
import logo from '../assets/google-logo-1.jpg';
import { useStateContext } from '../context/StateContextProvider';

const Navbar: React.FC = () => {

    const { getResults, text, setText } = useStateContext();
    const location = useLocation();
    const navigate = useNavigate();

    const handleSearch = (): void => {
        if(!text) return;
        localStorage.setItem("searchTerm", text);
        getResults(`${location.pathname}/q=${text}&num=40`);
    };

    return (
        <nav className="nav">
            <section className="top-container">
                <Link to="/"><img src={logo} alt="google-logo" className="navbar-logo"/></Link>
                <Paper elevation={3} component="form" className="navbar-search">
                    <InputBase 
                        className="inputbase"
                        value={text}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setText(e.target.value)}
                    />
                    {text && 
                        <>
                            <IconButton onClick={() => setText('')}>
                                <Close htmlColor="gray"/>
                            </IconButton>
                            <Divider orientation="vertical" id="divider" />
                        </>
                    }
                    <IconButton>
                        <MicrophoneIcon htmlColor="dodgerblue" id="mic-button"/>
                    </IconButton>
                    <IconButton onClick={handleSearch} >
                        <SearchIcon htmlColor='dodgerblue' />
                    </IconButton>
                </Paper>
            </section>
            <section className="bottom-container">
                <SearchIcon fontSize="small" htmlColor="gray" />
                <Link to="/search" className='link'>All</Link>
                <FeedIcon fontSize="small" htmlColor="gray" />
                <Link to="/news" className='link'>News</Link>
                <ImageIcon fontSize="small" htmlColor="gray" />
                <Link to="/images" className='link'>Images</Link>
            </section>
            <hr />
        </nav>
    );
};

export default Navbar;