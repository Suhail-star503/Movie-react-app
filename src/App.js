import React from "react";
import Navbar from "./Navbar/navbar";
import Movies from "./Movies/movies";
import Footer from "./Footer";
import { useState } from "react";
const App = () => {
    const [cartitem, setCartitem] = useState(0);
    const [favoriteitem, setFavoriteitem] = useState(0);

    return (
        <div>
            <Navbar cart={cartitem} favorititem={favoriteitem}/>
            
            <Movies cartitem={cartitem} setCartitem={setCartitem} favorititem={favoriteitem} setFavoriteitem={setFavoriteitem}/>
            <Footer />
            
           
            
        </div>
    );
}
export default App;