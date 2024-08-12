import React from 'react';

const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    document.documentElement.setAttribute('theme', "dark")
} else {
    document.documentElement.setAttribute('theme', "light")
}

function setDarkMode() {
    localStorage.setItem('darkMode', 'true')
    document.documentElement.setAttribute('theme', "dark")
};

function setLightMode() {
    localStorage.setItem('darkMode', 'false')
    document.documentElement.setAttribute('theme', "light")
}

function Header() {
return (
    <div className='header'>
        <ul>
            <li className="menu"><a href="/">Home</a></li>
            <li className="menu"><a href="/about">About</a></li>
            <li className="menu"><a href="/blog">Article</a></li>
            <li className="menu"><a href="/contact">Contact</a></li>
            <li className="menu">
                <span>
                    <img className="mode" src="images/white.png" width="16px" height="16px" alt="lang" />
                </span>
                <span>
                    <img className="mode" src="images/dark.png" width="16px" height="16px" alt="lang" />
                </span>
            </li>
            <li className="menu">
                <span onClick={() => { setDarkMode() }}>
                    <img className="mode" src="images/dark.svg" width="16px" height="16px" alt="dark" />
                </span>
                <span onClick={() => { setLightMode() }}>
                    <img className="mode" src="images/light.svg" width="16px" height="16px" alt="light" />
                </span>
            </li>
        </ul>
    </div>
    );
}

export default Header;
