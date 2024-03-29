import React from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import "../App.css";

export default function Navbar() {
  //using useLocation to highlight the nav link when neccessary
  const location = useLocation();
  const navigate = useNavigate();
  //handles Logout logic
  const handleLogout = ()=>{
    localStorage.removeItem('token'); //remove the auth-token from localstorage
    navigate("/"); //go to homepage
  }
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <strong>noteUp</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
            <li className="nav-item">
                <Link className= {`nav-link ${!localStorage.getItem('token')?"d-none":"d-block"} ${location.pathname==="/notes"?"active":""}`} to="/notes">
                  Notes
                </Link>
              </li>
              <li className="nav-item">
                <Link className= {`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">
                  About
                </Link>
              </li>
              {/* hide the login/signup link once we fidn the auth token from the localStorage */}
              {!localStorage.getItem('token')?
              <>
              <li className="nav-item">
                <Link
                  className= {`nav-link btn ${location.pathname==="/login"?"active":""}`}
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className= {`nav-link btn ${location.pathname==="/signup"?"active":""}`} to="/signup">
                  Signup
                </Link>
              </li></>:<button className="nav-link btn" onClick={handleLogout}>Logout</button>}
            </ul>
            <form className="d-flex align-items-center" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  border:"none",
                  color:"black"
                }
                }
              />
               <i className="fa-solid fa-magnifying-glass fa-xl" style={{margin: "0 -7vh", color:"black"}}></i>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
