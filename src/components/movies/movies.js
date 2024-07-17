import React, { useEffect, useState } from "react";
import "./movies.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Movies = () => {
    const [moviesData, setMoviesData] = useState([]);
    const navigate = useNavigate();

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

    return (
        <>
            <h1 className="fw-bold text-black my-5">Tarjima kinolar</h1>
            <div className="row">
                {moviesData.filter(item => item.Type === "movie").slice(0, 4).map((item, index) => (
                    <div 
                        onClick={() => { 
                            window.scrollTo({ top: 0, behavior: 'smooth' }); 
                            navigate(`/aboutmovie/${item.imdbID}`); 
                        }} 
                        key={index} 
                        className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                    >
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
        </>
    );
};
