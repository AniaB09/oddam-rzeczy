import React, {useState} from "react";
import {Link} from "react-router-dom";
import hamburger from '../assets/hamburger.png';
import {HashLink} from "react-router-hash-link";
import decoration from '../assets/Decoration.svg';
import '../scss/elements/_logging.scss';

function Logging () {

    const showRemove = () => {
        const img = document.querySelector('.img-container');
        img.classList.toggle('d-none');
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({email: '', password: ''});

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {email: '', password: ''};

        if (!validateEmail(email)) {
            newErrors.email = 'Podany email jest nieprawidłowy!';
        }
        if (password.length < 6) {
            newErrors.password = 'Podane hasło jest za krótkie!';
        }
        if (newErrors.email || newErrors.password) {
            setErrors(newErrors);
            return;
        }

        console.log({email, password});
        setEmail('');
        setPassword('');
        setErrors({email: '', password: ''});
    }

    return (
        <section className='logging container'>
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
                    <HashLink to='/#header' style={{color: 'black'}} className='nav-element'>Start</HashLink>
                    <HashLink to='/#steps' style={{color: 'black'}} className='nav-element'>O co chodzi?</HashLink>
                    <HashLink to='/#about' style={{color: 'black'}} className='nav-element'>O nas</HashLink>
                    <HashLink to='/#organizations' style={{color: 'black'}} className='nav-element'>Fundacje i organizacje</HashLink>
                    <HashLink to='/#contact' style={{color: 'black'}} className='nav-element'>Kontakt</HashLink>
                </ul>
            </nav>

            <div className='logging-section'>
                <h2>Zaloguj się</h2>
                <img src={decoration} alt='decoration-element' />
                <form className='logging-form-container' onSubmit={handleSubmit}>
                    <div className='logging-form'>
                        <label htmlFor='email-logging'>Email</label>
                        <input
                            type='email'
                            id='email-logging'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}

                        <label htmlFor='password-logging' style={{marginTop: '20px'}}>Hasło</label>
                        <input
                            type='password'
                            id='password-logging'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
                    </div>
                    <div className='logging-buttons-container'>
                        <Link to='/signing-up' style={{fontSize: '18px', color: 'black'}}>Załóż konto</Link>
                        <input style={{fontSize: '18px'}} id='logging-button' type='submit' value='Zaloguj się' />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Logging;
