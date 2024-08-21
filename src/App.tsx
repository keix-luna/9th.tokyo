import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from "axios";

import MainTitle     from './MainTitle';
import Header        from './Header';
import Home          from './Home';
import Architecture  from './Architecture';
import Specification from './Specification';
import Article       from './Article';
import Footer        from './Footer';
import Page404       from './Page404';

import './App.css';

function App() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [content, setContent] = useState([]);

    useEffect(() => {
        const endpoint = "http://localhost" + window.location.pathname
        const getContent = async () => {
            try {
                const response = await axios.get(endpoint);
                setContent(response.data);
            } catch (error) {
                setContent([]);
            }
        };
        getContent();
    }, []);

    return (

        <div className="App">
            <Header />
            <MainTitle />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/architecture" element={<Architecture />} />
                    <Route path="/specification" element={<Specification />} />
                    <Route path="/article" element={<Article />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Router>
            <Footer />
        </div>

    );
}

export default App;
