import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './CMS/Home';
import Header from './Layout/Header';
import Gallery from './CMS/Gallery';
import Footer from './Layout/Footer';
import Photo_Detail from './CMS/Photo Detail';
import Latest from './CMS/Latest';
import Collections from './CMS/Collections';
import Search from './CMS/Search';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Collect_id from './CMS/Collect_id';
import CollectId from './CMS/Collect_id';


function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, [pathname]);

    return null;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Helmet>
          <title>Image app</title>
        </Helmet>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery  />} />
          <Route path='/latest' element={<Latest />} />
          <Route path='/:id' element={<Photo_Detail />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/search/:name' element={<Search />} />
          <Route path='/c/:id' element={<CollectId />} />


        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
