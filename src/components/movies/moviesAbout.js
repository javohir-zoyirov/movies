import { useNavigate, useParams } from "react-router-dom"
import { Footer } from "../footer/footer"
import "./aboutmovies.css"
import { useContext, useEffect, useState } from "react"
import ApiContext from "../context/context"
export const AboutMovies = () => {
  const { moviesData } = useContext(ApiContext);
  const {id} = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const foundMovie = moviesData.find((item) => item.imdbID === id);
    setMovie(foundMovie);
  }, [moviesData, id]);
  console.log(movie);
    return<div className="container">
      {
      <>
      
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img 
            style={{ width: "100px", height: "100px" }}
            className="navbar-brand object-cover rounded-5"
            src="https://logos.flamingtext.com/Name-Logos/Movies-design-china-name.png"
            alt="Logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto gap-3 mb-2 mb-lg-0">
            
              <li onClick={() => {navigate("/all")}} className="nav-item fw-bold bg-white rounded">
                <a className="nav-link text-black fw-bold" href="#">
                  Kinolar
                </a>
              </li>
              <li onClick={() => {navigate("/multfilms")}} className="nav-item bg-white rounded">
                <a className="nav-link text-black fw-bold" href="#">
                  Multfilm
                </a>
              </li>
              <li onClick={() => {navigate("/serials")}} className="nav-item fw-bold bg-white rounded">
                <a className="nav-link text-black fw-bold" href="#">
                  Seriallar
                </a>
              </li>
              <li onClick={() => {navigate("/news")}} className="nav-item fw-bold bg-white rounded">
                <a className="nav-link text-black fw-bold" href="#">
                  Kino yangiliklari
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
       <h1 className="fw-bold py-3">{movie?.Title}</h1>
       <div className="row my-5">
           <div style={{height:'380px'}} className="col-lg-6 col-sm-12">
               <img className="img object-fit-cover" src={movie?.Images[1]} alt="#"/>
           </div>
             <ul className="col-lg-6 col-sm-12">
               <li className="li"><span className="spanli bg-secondary d-flex align-items-center">Nomi</span> <span className="spanli2">{movie?.Title}</span></li>
               <li className="li"><span className="spanli bg-secondary">Janri</span> <span className="spanli2">{movie?.Genre}</span></li>
               <li className="li"><span className="spanli bg-secondary">Davlati</span> <span className="spanli2">{movie?.Country}</span></li>
               <li className="li"><span className="spanli bg-secondary">Yili</span> <span className="spanli2">{movie?.Year}</span></li>
               <li className="li"><span className="spanli bg-secondary">Tili</span> <span className="spanli2">{movie?.Language}</span></li>
               <li className="li"><span className="spanli bg-secondary">Davomiyligi</span> <span className="spanli2">{movie?.Runtime}</span></li>
               <li className="li"><span className="spanli bg-secondary">Yosh chegarasi</span> <span className="spanli2 d-flex align-items-center"><img style={{width:'30px' , height:'30px', objectFit:'cover'}} className="" src="https://uzmovi.com/images/age/eighteen.png" /></span></li>           
             </ul>      
       </div>
      </div>

      <div className="bg-secondary p-2 rounded-2 mb-5">
       <p style={{color:"#fff", fontSize:'18px'}}>
       {movie?.Plot}
       </p>
      </div>
      <div className="py-10 mb-5">
           <video style={{ height: "500px", width: "100%", borderRadius:'10px' }} controls>
             <source src={"https://www.youtube.com/watch?v=6llpYr6ZTjo"} type="video/mp4" />
             <source src="movie.ogg" type="video/ogg" />
           </video>
      </div> 
      </>
      }
      <div className="row">
                {moviesData.filter(item => item.Type === "movie").slice(0,4).map((item, index) => (
                    <div onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' }); navigate(`/aboutmovie/${item.imdbID}`)}} key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card rounded-3 border-0">
                            <img style={{ height: "350px" }} className="img w-100 object-fit-cover" src={item.Images[0]} alt={item.Title} />
                            <div className="mt-3 text-center">
                                <p className="fw-bold text-secondary">
                                    {item.Title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
       <Footer/>
     </div>
}