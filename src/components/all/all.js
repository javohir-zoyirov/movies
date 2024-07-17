import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ApiContext from "../context/context";
import { useNavigate } from "react-router-dom";
import { Footer } from "../footer/footer";

export const All = () => {
    const [data, setData] = useState([]);
    const { search, dropdown,setDropdown,setSearch } = useContext(ApiContext);
    const searchFunc = (value) => {
        setSearch(value)
    }
const navigate = useNavigate()
    useEffect(() => {
        const fetchMoviesData = async () => {
            try {
                const response = await axios.get("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching movies data:", error);
            }
        };

        fetchMoviesData();
    }, []);

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img
              style={{ width: "100px", height: "100px" }}
              className="object-cover rounded-5"
              src="https://logos.flamingtext.com/Name-Logos/Movies-design-china-name.png"
              alt="Logo"
            />
          </a>
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
              <li className="nav-item dropdown bg-white rounded">
                <a
                  className="nav-link text-black btn fw-bold dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  Janr
                </a>
                <ul className="dropdown-menu">
                  <li onClick={() => {setDropdown("Action")}}>
                    <a className="dropdown-item" href="#">
                    Action
                    </a>
                  </li>
                  <li onClick={() => {setDropdown("Fantasy")}}>
                    <a className="dropdown-item" href="#">
                    Fantasy
                    </a>
                  </li>
                  <li onClick={() => {setDropdown("Drama")}}>
                    <a className="dropdown-item" href="#">
                    Drama 
                    </a>
                  </li>
                  <li onClick={() => {setDropdown("Comedy")}}>
                    <a className="dropdown-item" href="#">
                    Comedy 
                    </a>
                  </li>
                </ul>
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-black btn dropdown-toggle fw-bold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mamlakat
                </a>
                <ul className="dropdown-menu">
                  <li onClick={() => {setDropdown("USA")}}>
                    <a className="dropdown-item" href="#">
                      USA
                    </a>
                  </li>
                  <li onClick={() => {setDropdown("Ireland")}}>
                    <a className="dropdown-item" href="#">
                      Ireland
                    </a>
                  </li>
                  <li  onClick={() => {setDropdown("Kanada")}}>
                    <a className="dropdown-item" href="#">
                      Kanada
                    </a>
                  </li>
                  <li  onClick={() => {setDropdown("UK")}}>
                    <a className="dropdown-item" href="#">
                      UK
                    </a>
                  </li>
                  <li  onClick={() => {setDropdown("France")}}>
                    <a className="dropdown-item" href="#">
                      France
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                onChange={(e) => {searchFunc(e.target.value)}}
                className="form-control me-2 rounded"
                placeholder="Search..."
              />
            </form>
          </div>
        </div>
      </nav>
            <div className="row" style={{minHeight:"100vh"}}>
                {data
                    .filter(item => 
                        search === "" || item.Title.toLowerCase().includes(search.toLowerCase())
                    )
                    .filter(item => 
                        dropdown === "" || 
                        item.Country.toLowerCase().includes(dropdown.toLowerCase()) ||
                        item.Genre.toLowerCase().includes(dropdown.toLowerCase())
                    )
                    .map((item, index) => (
                        <div onClick={() => {navigate(`/aboutmovie/${item.imdbID}`)}} key={index} className="col-lg-3 col-md-4 col-sm-6 mt-4 col-12">
                            <div className="card rounded-3 border-0">
                                <img 
                                    style={{ height: "350px" }} 
                                    className="img w-100 object-fit-cover" 
                                    src={item.Images[0]} 
                                    alt={item.Title} 
                                />
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
    );
}
