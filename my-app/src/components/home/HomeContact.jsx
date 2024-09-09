import React, { useState } from 'react';
import '../../scss/elements/_home-contact.scss';
import clothes from '../../assets/Background-Contact-Form.jpg';
import decoration from '../../assets/Decoration.svg';
import fb from '../../assets/Facebook.svg';
import instagram from '../../assets/Instagram.svg';

function HomeContact () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessages, setErrorMessages] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessages('');
        setSuccessMessage('');

        let errors = [];

        if (!name || name.split(' ').length > 1) {
            errors.push('Imię powinno być jednym wyrazem.');
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailPattern.test(email)) {
            errors.push('Proszę podać poprawny adres email.');
        }

        if (!message || message.length < 120) {
            errors.push('Wiadomość musi mieć co najmniej 120 znaków.');
        }

        if (errors.length > 0) {
            setErrorMessages(errors.join('<br>'));
            return;
        }

        const data = JSON.stringify({name, email, message});

        try {
            const response = await fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: data
            });

            if (response.ok) {
                const result = await response.json();
                if (result.status === 'success') {
                    setSuccessMessage('Wiadomość została wysłana!<br />Wkrótce się skontaktujemy.');
                    setName('');
                    setEmail('');
                    setMessage('');
                }
            } else {
                const errorResponse = await response.json();

                if (errorResponse.errors) {
                    setErrorMessages(errorResponse.errors.join('<br>'));
                } else {
                    setErrorMessages('Wystąpił błąd. Proszę spróbować ponownie.');
                }
            }
        } catch (error) {
            setErrorMessages('Wystąpił błąd połączenia. Proszę spróbować ponownie.');
        }
    };

    return (
        <section className='contact-footer-section' id='contact'>
            <div className='contact-form-container'>
                <img src={clothes} alt='clothes' className='clothes-image' />
                <div className='contact-form-section'>
                    <div className='form-title'>
                        <h2>Skontaktuj się z nami</h2>
                        <img src={decoration} alt='decoration-element' />
                        <p dangerouslySetInnerHTML={{__html: successMessage}} />
                    </div>
                    <form className='contact-form' id='contact-form' onSubmit={handleSubmit}>
                        <div className='name-email-container'>
                            <div>
                                <label htmlFor='name' style={{fontWeight: 'bold'}}>Wpisz swoje imię</label>
                                <input
                                    type='text'
                                    id='name'
                                    placeholder='Krzysztof'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    />
                            </div>
                            <div>
                                <label htmlFor='email' style={{fontWeight: 'bold'}}>Wpisz swój email</label>
                                <input
                                    type='text'
                                    id='email'
                                    placeholder='abc@xyz.pl'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                            </div>
                        </div>
                        <label style={{fontWeight: 'bold'}} htmlFor='message'>Wpisz swoją wiadomość</label>
                        <textarea
                            id='message'
                            rows='5'
                            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            />
                        <div className='error-messages' dangerouslySetInnerHTML={{__html: errorMessages}} />
                        <div className='send-button'>
                            <input id='send-button' type='submit' value='Wyślij'/>
                        </div>
                    </form>
                </div>
                <footer className='footer-section'>
                    <p>Copyright by Coders Lab</p>
                    <div className='icons-container'>
                        <img src={fb} alt='facebook-icon' />
                        <img src={instagram} alt='instagram-icon' />
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default HomeContact;
