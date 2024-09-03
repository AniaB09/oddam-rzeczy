import React from "react";
import heroImage from '../../assets/Home-Hero-Image.jpg';
import {Link} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll';
import decoration from '../../assets/Decoration.svg';
import '../../scss/elements/_home-header.scss';
import hamburger from '../../assets/hamburger.png';

function HomeHeader() {

    const showRemove = () => {
        const img = document.querySelector('.img-container');
        img.classList.toggle('d-none');
    }

    return (
        <header className='header container' id='header'>
            <div className='img-container'>
                <img src={heroImage} className='hero-image' alt='hero-image' />
            </div>
            <div className='hero-section'>
                <nav className='nav-section'>
                    <input onChange={showRemove} type='checkbox' className='menu-btn' id='menu-btn' />
                    <label className='hamburger' htmlFor='menu-btn'>
                        <img src={hamburger} alt='hamburger-icon' />
                    </label>
                    <ul className='nav first-row'>
                        <Link to='/logging' className='nav-element'>Zaloguj</Link>
                        <Link to='/signing-up' className='nav-element'>Załóż konto</Link>
                    </ul>
                    <ul className='nav second-row'>
                        <ScrollLink to='header' className='nav-element'>Start</ScrollLink>
                        <ScrollLink to='three-columns' className='nav-element'>O co chodzi?</ScrollLink>
                        <ScrollLink to='about' className='nav-element'>O nas</ScrollLink>
                        <ScrollLink to='organizations' className='nav-element'>Fundacje i organizacje</ScrollLink>
                        <ScrollLink to='contact' className='nav-element'>Kontakt</ScrollLink>
                    </ul>
                </nav>

                <div className='hero'>
                    <h1>Zacznij pomagać!<br />
                        Oddaj niechciane rzeczy w zaufane ręce!
                    </h1>
                    <img src={decoration} alt='decoration-element' />
                    <div className='buttons-container'>
                        <div className='button-border'>
                            <button>ODDAJ<br />RZECZY</button>
                        </div>
                        <div className='button-border'>
                            <button>ZORGANIZUJ<br />ZBIÓRKĘ</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader;
