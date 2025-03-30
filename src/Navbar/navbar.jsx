import './navbar.css';



const Navbar = ({cart,favorititem}) => {



    return (
        <div className="navbar">

            <div><h3 style={{ color: "white", paddingLeft: "10px"}} ><span><i className="fa-solid fa-video" style={{ color: "yellow", fontSize: "25px" }}></i></span> Justwatch</h3></div>
            <div style={{ display: "flex", justifyContent: "space-around", paddingRight: "10px" }}>
                {/* <span style={{ paddingRight: "10px", color: "white" }}><i className="fa-solid fa-heart" style={{ color: "red", fontSize: "30px" }}></i>0</span>
                <span style={{ paddingRight: "10px", color: "white" }}><i className="fa-solid fa-cart-plus" style={{ color: "yellowgreen", fontSize: "30px" }}></i>0</span> */}

                <button type="button" className="btn  position-relative" style={{ backgroundColor: 'transparent',marginRight:'10px' }}>
                    <i className="fa-solid fa-heart" style={{ color: "red", fontSize: "30px" }}></i>
                    {favorititem===0?null:<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {favorititem}
                    </span>}
                </button>

                <button type="button" className="btn  position-relative" style={{ backgroundColor: 'transparent',marginRight:'10px' }}>
                    <i className="fa-solid fa-cart-plus" style={{ color: "yellowgreen", fontSize: "30px" }}></i>
                    {cart===0?null:<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                       {cart}
                    </span>}
                </button>


            </div>
        </div>
    );
}

export default Navbar;


