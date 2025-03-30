import React, { useEffect, useState } from 'react';
import './movies.css';
import MovieCard from './Moviecard';


let API_url = 'http://www.omdbapi.com/?apikey=c4c99b36&s=war';

const Movies = ({cartitem,setCartitem,favorititem,setFavoriteitem}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    

    const getMovies = async () => {
        setLoading(true);
        const response = await fetch(API_url);
        const result = await response.json();
        setData(result.Search || []);
        setLoading(false);
    };

    const handlesubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        let title = e.target.title.value;
        API_url = `http://www.omdbapi.com/?apikey=c4c99b36&s=${title}`;
        getMovies();
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            <div className="container">
                <form className="d-flex" onSubmit={handlesubmit} style={{ margin: "20px" }}>
                    <input className="form-control me-2" name='title' type="search" placeholder="Search by movie name" aria-label="Search" required style={{ backgroundColor: "black", color: "white" }} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <h1 style={{ color: "white", textAlign: "center", margin: "30px" }}>Top Movies</h1>
                <div className="row">
                    {
                        loading ? (
                            <div style={{ color: "white", textAlign: "center", width: "100%" }}>
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            data.length === 0 ? <h1 style={{ color: "white", textAlign: "center" }}>No movies found</h1> :
                                data.map((movie) =>{
                                   return <MovieCard key={movie.imdbID} movie={movie} cartitem={cartitem} setCartitem={setCartitem} favorititem={favorititem} setFavoriteitem={setFavoriteitem}/>
                                }) 
                                    
                                
                        )
                    }
                </div>
            </div>

            
            
        </>
    );
};

export default Movies;