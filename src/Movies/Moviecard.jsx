import React, { useState } from 'react';


import { toast } from 'react-toastify';

const MovieCard = ({ movie }) => {
    const [favorite, setFavorite] = useState(false);
    const [cart, setCart] = useState(false);

    
    const handleFavorite = () => {
        setFavorite(!favorite);
        const vlaue = favorite ? "Removed from favorite" : "Added to favorite";
        toast.success(vlaue, {
            position: "top-center",
            theme: "dark",
        });

    };
    const handleCart = () => {
        setCart(!cart);
        const vlaue = cart ? "Removed from cart" : "Added to cart";
        toast.success(vlaue, {
            position: "top-center",
            theme: "dark",
        });
    };


    return (
        <>
            <div className="col-md-6 col-xl-4 col-12">
                <div className="card" style={{ margin: "20px", marginLeft: "auto", marginRight: "auto" }}>
                    {movie.Poster === "N/A" ? (
                        <img
                            src="https://cdn.pixabay.com/photo/2017/03/21/02/00/image-2160911_1280.png"
                            className="img-fluid"
                            alt={movie.Title}
                        />
                    ) : (
                        <img
                            src={movie.Poster}
                            className="img-fluid"
                            alt={movie.Title}
                        />
                    )}
                    <div className="card-body" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <h5 className="card-title" style={{ textAlign: "center" }}>{movie.Title}</h5>
                        <p className="card-text">Release date: {movie.Year}</p>
                        <h5>Price: $19</h5>
                        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                            {favorite ? (

                                <button
                                    type="button"
                                    className="btn btn-danger"

                                    onClick={handleFavorite}

                                >
                                    Unfavorite
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-success"

                                    onClick={handleFavorite}
                                >
                                    Add favorite
                                </button>
                            )}
                            {cart ? (

                                <button
                                    type="button"
                                    className="btn btn-danger"

                                    onClick={handleCart}
                                >
                                    Remove from cart
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-warning"

                                    onClick={handleCart}
                                >
                                    Add to cart
                                </button>
                            )}




                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MovieCard;


