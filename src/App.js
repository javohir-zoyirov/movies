import './App.css';
import { HomePage } from './components/home-page/home-page';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { All } from './components/all/all';
import { useEffect, useState } from 'react';
import { Nav } from './components/nav/nav';
import { Multfilms } from './components/multfilms/multfilm';
import ApiContext from './components/context/context';
import { Serials } from './components/serials/serial';
import { AboutMovies } from './components/movies/moviesAbout';
import { Footer } from './components/footer/footer';
import axios from 'axios';
import { News } from './components/movieNews/movie-news';

function App() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
        try {
            const response = await axios.get("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON");
            setMoviesData(response.data);
        } catch (error) {
            console.error("Error fetching movies data:", error);
        }
    };

    fetchMoviesData();
}, []);
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState("");
  return (
    <div className='app'> 
    <ApiContext.Provider value={{
      setSearch,
      search,
      setDropdown,
      dropdown,
      moviesData
    }}>
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all" element={<All />} />
      <Route path="/nav" element={<Nav />} />
      <Route path='/multfilms' element={<Multfilms/> }/>
      <Route path='/serials' element={<Serials/>} />
      <Route path='/aboutmovie/:id' element={<AboutMovies/>} />
      <Route path='/footer' element={<Footer/> } />
      <Route path='/news' element={<News/>} />
      </Routes>
    </Router>
    </ApiContext.Provider>
    </div>
  );
}

export default App;
