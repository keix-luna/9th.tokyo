import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from "axios";

import Header    from './Header';
import MainTitle from './MainTitle';
import About     from './About';
import Photos    from './Photos';
import Blog      from './Blog';
import Contact   from './Contact';
import Footer    from './Footer';
import Page404   from './Page404';

import './App.css';

function App() {

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
                    <Route path="/" element={<Photos content={content} />} />
                    <Route path="/about" element={<About content={content} />} />
                    <Route path="/blog" element={<Blog content={content} />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Router>
            <Footer />
        </div>

    );
}

export default App;
