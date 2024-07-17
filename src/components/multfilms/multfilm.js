import { useNavigate } from "react-router-dom"
import "./multfilm.css"
import { Footer } from "../footer/footer";
export const Multfilms = () => {
  const navigate = useNavigate();
    return <div className="mb-3 container">
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img 
            style={{ width: "100px", height: "100px" }}
            className="navbar-brand rounded-5"
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
            <li onClick={() => {navigate("/")}} className="nav-item fw-bold bg-white rounded">
                <a className="nav-link text-black fw-bold" href="#">
                  Home
                </a>
              </li>
              <li onClick={() => {navigate("/serials")}} className="nav-item fw-bold bg-white rounded">
                <a className="nav-link text-black fw-bold" href="#">
                  Seriallar
                </a>
              </li>
              <li onClick={() => {navigate("/all")}} className="nav-item fw-bold bg-white rounded">
                <a className="nav-link text-black fw-bold" href="#">
                  Kinolar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://s1.afisha.ru/mediastorage/ab/b4/b2bf138c5fa94897b7f73b4bb4ab.jpg" class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://thumbs.dfs.ivi.ru/storage15/contents/3/c/e2b0f43b1fa6ccbe6c4f7231d42ac9.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://asilmedia.org/rasmlar/images/2022/08/24/erfgergeg.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<Footer/>
</div>
}