import React, {useState} from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {

    const[toggleMenu, setToggleMenu] = useState(false);

    const MenuToggleSwitch = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    }

    return (
    <>
     <header>
            <nav>
                <div className="navigation">
                    <div className="logo-wrapper">
                        <a href="./" className="logo"><StaticImage src="../assets/logo/logo.svg"></StaticImage></a>
                        <div className="language">
                            <a href='?language=spanish' >Esp</a>
                            <a href='?language=english' >Eng</a>
                        </div>
                    </div>

                    <div className="hamburguer" onClick={MenuToggleSwitch} onKeyDown={MenuToggleSwitch}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={toggleMenu ? "nav active" : "nav"}>
                        <li><a href='#one' className="active">Menu</a></li>
                        <li><a href='#two'>About us</a></li>
                        <li><a href='#three'>Whitepaper</a></li>
                        <li><a href='https://pancakeswap.finance/info/token/0xe0ed96187ad3bB862E6616Cb7Cf04ba541309F5e' className="btn c-red br-30">Buy now</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    </>
    )
    ;
}

export default Header;