import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
    //handles Logout logic
    const handleLogout = ()=>{
      localStorage.removeItem('token'); //remove the auth-token from localstorage
      navigate("/"); //go to homepage
    }
  return (
    <div className="container text-white">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
        <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
        <li className="nav-item"><Link to="/notes" className={` ${!localStorage.getItem('token')?"d-none":"d-block"} nav-link px-2 text-white`}>Notes</Link></li>
         {/* hide the login/signup link once we fidn the auth token from the localStorage */}
         {!localStorage.getItem('token')?
              <>
              <li className="nav-item">
                <Link
                 className="nav-link px-2 text-white"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-2 text-white" to="/signup">
                  Signup
                </Link>
              </li></>:<button className="nav-link btn text-white" onClick={handleLogout}>Logout</button>}
        <li className="nav-item"><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
      </ul>
      <p className="text-center text-white">© Aaiiztony</p>
    </footer>
  </div>
  )
}

export default Footer
