import React from 'react';

const NavBar = (props) => {
    return (
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Navbar <span>Boxess Count:{props.boxesCount }</span>
                </a>
                
          </div>
        </nav>
    );
}

export default NavBar;