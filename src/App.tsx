import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from './ThemeContext';
import MainTitle   from './MainTitle';
import Header    from './Header';
import Home      from './Home';
import Architecture  from './Architecture';
import Article     from './Article';
import Discussions  from './Discussions';
import Footer    from './Footer';
import Page404     from './Page404';

import './App.css';

function App() {

  return (

    <div className="App">
      <ThemeProvider>
        <Header />
        <MainTitle />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/article" element={<Article />} />
            <Route path="/discussions" element={<Discussions />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Router>
        <Footer />
      </ThemeProvider>
    </div>

  );
}

export default App;
