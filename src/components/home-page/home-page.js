import { useEffect, useState } from 'react';
import axios from 'axios';
import { Movies } from '../movies/movies';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Nav />
      <h1 className="fw-bold text-black my-5">Premyeralar</h1>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {data.map((item, index) => (
            <div onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate(`/aboutmovie/${item.imdbID}`); }} key={index} className={`carousel-item ${index === 0 ? 'active' : ''} rounded`}>
              <img src={item.Images[0]} className="d-block w-100 rounded" alt={item.Title} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.Title}</h5>
                <p>{item.Actors}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Movies />

      <div className="row">
        <h1 className="fw-bold text-black my-5">Seriallar</h1>
        {data.filter(item => item.Type === "series").slice(0, 4)
          .map((item, index) => (
            <div onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate(`/aboutmovie/${item.imdbID}`); }} key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <div className="card rounded-3 border-0">
                <img style={{ height: "350px" }} className="img w-100 object-fit-cover" src={item.Images[1]} alt={item.Title} />
                <div className="mt-3 text-center">
                  <p className="fw-bold text-secondary">
                    {item.Title}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="mb-3">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h1 className="fw-bold text-black my-5">Multfilmlar</h1>
            <div id="carouselExampleMultfilm" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active h-100">
                  <img src="https://images.uzmovi.com/2024-06-22/78f15b1cbae4bb5cce1340804a122fb4.jpg" className="d-block w-100 rounded" alt="Multfilm 1" />
                </div>
                <div className="carousel-item">
                  <img src="https://images.uzmovi.com/2024-06-21/3eaeba88ccfe9b6f1057e0894706be07.jpg" className="d-block w-100 rounded" alt="Multfilm 2" />
                </div>
                <div className="carousel-item">
                  <img src="https://images.uzmovi.com/2024-04-23/abbe128f378a6ecd0b05541bbd7273f6.jpg" className="d-block w-100 rounded" alt="Multfilm 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleMultfilm" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleMultfilm" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <h1 className="fw-bold text-black my-5">Kino yangiliklari</h1>
            <ul className="ul">
              {data.slice(7, 11).map((item, index) => (
                <li onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate(`/aboutmovie/${item.imdbID}`); }} key={index} className="d-flex list gap-3 bg-secondary rounded align-items-center p-1 mb-4">
                  <img style={{ width: "90px", height: "90px", objectFit: 'cover', borderRadius: '7px' }} className="img object-fit-cover" src={item.Images?.[0]} alt={item.Title || "Image"} />
                  <p className="text-white">{item.Title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
