import './navbar.css';

const Navbar = () => {
    return (
       <div className="navbar">
        <span><i className="fa-solid fa-video" style={{color:"#352620",fontSize:"50px"}}></i></span> 
        <h1 style={{color:"white",padding:"5px",textDecoration:"underline"}}>Justwatch.</h1>
       </div>
    );
}

export default Navbar;