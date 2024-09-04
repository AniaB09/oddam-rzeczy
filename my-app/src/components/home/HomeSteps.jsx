import React from 'react';
import '../../scss/elements/_home-steps.scss';
import decoration from '../../assets/Decoration.svg';
import tShirt from '../../assets/Icon-1.svg';
import pack from '../../assets/Icon-2.svg';
import mGlass from '../../assets/Icon-3.svg';
import arrows from '../../assets/Icon-4.svg';
import {Link} from "react-router-dom";

function HomeSteps () {
    return (
        <section className='steps' id='steps'>
            <div className='title'>
                <h2>Wystarczą 4 proste kroki</h2>
                <img src={decoration} alt='decoration-element' />
            </div>
            <div className='steps-container'>
                <div className='step'>
                    <img src={tShirt} alt='t-shirt' />
                    <h3>Wybierz rzeczy</h3>
                    <span></span>
                    <p>ubrania, zabawki,<br />sprzęt i inne</p>
                </div>
                <div className='step'>
                    <img src={pack} alt='pack' />
                    <h3>Spakuj rzeczy</h3>
                    <span></span>
                    <p>skorzystaj<br />z worków na śmieci</p>
                </div>
                <div className='step'>
                    <img src={mGlass} alt='magnifying-glass' />
                    <h3>Wybierz miejsce</h3>
                    <span></span>
                    <p>zdecyduj,<br />komu pomożesz</p>
                </div>
                <div className='step'>
                    <img src={arrows} alt='arrows' />
                    <h3>Zamów kuriera</h3>
                    <span></span>
                    <p>kurier przyjedzie<br />w dogodnym terminie</p>
                </div>
            </div>
            <div className='button-container'>
                <div className='button-border'>
                    <Link to='/logging' className='button'>ODDAJ<br />RZECZY</Link>
                </div>
            </div>
        </section>
    )
}

export default HomeSteps;
