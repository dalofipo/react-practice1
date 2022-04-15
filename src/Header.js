import React from 'react';

const Nav = () => {
    return (
        <nav className="flex-container">
            <img src="img/react-logo.svg" alt="react-logo" width="40px" />
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

const Header = () => {
    return (
        <header>
            <Nav/>
        </header>
    );
}

export default Header;