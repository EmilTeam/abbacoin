import React, {useState} from 'react';
import logo from "../assets/logo/logo.svg"

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
                        <a href="./" className="logo"><img alt='logo' src={logo}/></a>
                        <div className="language d-none">
                            <a href='?language=spanish' >Esp</a>
                            <a href='?language=english' >Eng</a>
                        </div>
                    </div>

                    <div role="button" tabIndex="-1" className="hamburguer" onClick={MenuToggleSwitch} onKeyDown={MenuToggleSwitch}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={toggleMenu ? "nav active" : "nav"}>
                        <li><a  onClick={MenuToggleSwitch}  href='#one'>Home</a></li>
                        <li><a  onClick={MenuToggleSwitch}  href='#two'>About us</a></li>
                        <li><a  onClick={MenuToggleSwitch}  href='#three'>Whitepaper</a></li>
                        <li><a  onClick={MenuToggleSwitch}  href='https://pancakeswap.finance/info/token/0xe0ed96187ad3bB862E6616Cb7Cf04ba541309F5e' className="btn c-red br-30">Buy now</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    </>
    )
    ;
}

export default Header;