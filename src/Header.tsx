import React from 'react';

import dark from './dark.svg'
import light from './light.svg'

import black from './black.png'
import white from './white.png'


interface Props {}

class Header extends React.Component<Props> {

    constructor(props: Props) {

        super(props);

        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            document.documentElement.setAttribute('theme', "dark")
        } else {
            document.documentElement.setAttribute('theme', "light")
        }

    }

    setDarkMode() {
        localStorage.setItem('darkMode', 'true');
        document.documentElement.setAttribute('theme', "dark")
    }

    setLightMode() {
        localStorage.setItem('darkMode', 'false');
        document.documentElement.setAttribute('theme', "light")
    }

    render() {

        return (

            <div className='header'>
                <ul>
                    <li className="menu"><a href="/">Home</a></li>
                    <li className="menu"><a href="/about">About</a></li>
                    <li className="menu"><a href="/blog">Article</a></li>
                    <li className="menu"><a href="/contact">Contact</a></li>
                    <li className="menu">
                        <span>
                            <img className="mode" src={white} width="16px" height="16px" alt="lang" />
                        </span>
                        <span>
                            <img className="mode" src={black} width="16px" height="16px" alt="lang" />
                        </span>
                    </li>
                    <li className="menu">
                        <span onClick={() => { this.setDarkMode() }}>
                            <img className="mode" src={dark} width="16px" height="16px" alt="dark" />
                        </span>
                        <span onClick={() => { this.setLightMode() }}>
                            <img className="mode" src={light} width="16px" height="16px" alt="light" />
                        </span>
                    </li>
                </ul>
            </div>

        );
    }
}

export default Header;
