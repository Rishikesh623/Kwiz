import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Button } from 'react-bootstrap';

const Nav = ({ Toggle }) => {
    const { user, logoutUser } = useContext(AuthContext);

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
                <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle} style={{ cursor: "pointer" }}></i>
                {/*for mobile screens */}
                <button className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation" >
                    <i className='bi bi-justify'></i>
                </button>
                <Button className='home-board' onClick={()=>{window.location.reload()}}><i className="bi bi-arrow-clockwise"></i>Refresh</Button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item dropdown dropstart">
                            <Link to="/" className="nav-link dropdown-toggle text-white" id="dropdownId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                {user.username}
                            </Link>
                            <div className="dropdown-menu " aria-labelledby="dropdownId">
                                <Link to="/Profile" className="dropdown-item" >Profile</Link>
                                <button onClick={logoutUser} className="dropdown-item">Logout</button>
                            </div>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
};

export default Nav;