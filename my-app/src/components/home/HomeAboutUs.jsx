import React from "react";
import '../../scss/elements/_home-about.scss';
import decoration from '../../assets/Decoration.svg';
import signature from '../../assets/Signature.svg';
import people from '../../assets/People.jpg';

function HomeAboutUs () {
    return (
        <section className='about-us' id='about'>
            <div className='about-text-container'>
                <div className='about-us-description'>
                    <h2>O nas</h2>
                    <img src={decoration} alt='decoration-element' />
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                </div>
                <div className='signature'>
                    <img src={signature} alt='signature' />
                </div>
            </div>
            <div className='about-img-container'>
                <img src={people} alt='people' className='people-image' />
            </div>
        </section>
    )
}

export default HomeAboutUs;
