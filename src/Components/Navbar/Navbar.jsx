import { NavbarData } from "../NavbarData/NavbarData";
import {useDispatch, useSelector} from "react-redux";
import { DisplayNavbar } from "../Store/Store";
import { useEffect } from "react";
import logo from "../assets/img/logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../Navbar/Navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () =>{
    const dispatch = useDispatch();
    const navbarItems = useSelector((state)=>state);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(()=>{
        dispatch(DisplayNavbar(NavbarData));
    },[dispatch]);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
    return(
        <>
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6 left-col">
                            <img className="logo" src={logo} alt="logo" />
                        </div>
                        <div className="col-sm-6 right-col">
                            <nav>
                                <div className="hamburger" onClick={toggleMenu}>
                                    {isMenuOpen ? (
                                    <FontAwesomeIcon icon={faTimes} />
                                    ) : (
                                    <FontAwesomeIcon icon={faBars} />
                                    )}
                                </div>
                                <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
                                    {
                                        navbarItems.map((items,id)=>(
                                            <li key={id}>{items.title}</li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Navbar;