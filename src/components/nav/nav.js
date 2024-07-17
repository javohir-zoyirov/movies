import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ApiContext from "../context/context";

export const Nav = () => {
  const { setSearch } = useContext(ApiContext);
  const navigate = useNavigate();

  const searchFunc = (value) => {
    setSearch(value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                onClick={() => {
                  navigate("/all");
                }}
                className="nav-item"
              >
                <a className="nav-link" href="#">
                  Kinolar
                </a>
              </li>
              <li
                onClick={() => {
                  navigate("/multfilms");
                }}
                className="nav-item"
              >
                <a className="nav-link" href="#">
                  Multfilm
                </a>
              </li>
              <li
                onClick={() => {
                  navigate("/serials");
                }}
                className="nav-item"
              >
                <a className="nav-link" href="#">
                  Seriallar
                </a>
              </li>
              <li
                onClick={() => {
                  navigate("/news");
                }}
                className="nav-item"
              >
                <a className="nav-link" href="#">
                  Kino yangiliklari
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input onChange={(e) => {
                  searchFunc(e.target.value);
                }}
                className="form-control me-2 rounded"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
