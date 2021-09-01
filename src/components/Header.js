import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header-wrap">
           <header>
               <div className="header-flex">
                   <div className="logo">Logo</div>
                   <div className="navlink">
                        <nav>
                            <ul>
                                <li>
                                    <Link exact to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                   </div>
               </div>
           </header>
        </div>
    );
}

export default Header;