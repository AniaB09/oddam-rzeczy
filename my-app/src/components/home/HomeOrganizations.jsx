import React from "react";
import '../../scss/elements/_home-organizations.scss';
import {useState, useEffect} from "react";
import decoration from '../../assets/Decoration.svg';

const tabs = ['Fundacjom', 'Organizacjom pozarządowym', 'Lokalnym zbiórkom'];

const foundations = [
    {
        id: 1,
        name: 'Fundacja A',
        subtext: 'Cel: pomoc potrzebującym.',
        text: 'ubrania, meble, zabawki'
    },
    {
        id: 2,
        name: 'Fundacja B',
        subtext: 'Cel: pomoc potrzebującym.',
        text: 'ubrania, meble, zabawki'
    },
    {
        id: 3,
        name: 'Fundacja C',
        subtext: 'Cel: pomoc potrzebującym.',
        text: 'ubrania, meble, zabawki'
    },
    {
        id: 4,
        name: 'Fundacja D',
        subtext: 'Cel: pomoc potrzebującym.',
        text: 'ubrania, meble, zabawki'
    },
    {
        id: 5,
        name: 'Fundacja E',
        subtext: 'Cel: pomoc potrzebującym.',
        text: 'ubrania, meble, zabawki'
    },
    {
        id: 6,
        name: 'Fundacja F',
        subtext: 'Cel: pomoc potrzebującym.',
        text: 'ubrania, meble, zabawki'
    },
    {
        id: 7,
        name: 'Fundacja G',
        subtext: 'Cel: pomoc potrzebującym.',
        text: 'ubrania, meble, zabawki'
    },
    {
        id: 8,
        name: 'Fundacja H',
        subtext: 'Cel: pomoc potrzebującym.',
        text: 'ubrania, meble, zabawki'
    },
    {
        id: 9,
        name: 'Fundacja I',
        subtext: 'Cel: pomoc potrzebującym.',
        text: 'ubrania, meble, zabawki'
    }
];

const organizations = [
    {
        id: 1,
        name: 'Organizacja A',
        subtext: 'Cel: pomoc.',
        text: 'jedzenie, ubrania, koce'
    },
    {
        id: 2,
        name: 'Organizacja B',
        subtext: 'Cel: pomoc.',
        text: 'jedzenie, ubrania, koce'
    },
    {
        id: 3,
        name: 'Organizacja C',
        subtext: 'Cel: pomoc.',
        text: 'jedzenie, ubrania, koce'
    },
    {
        id: 4,
        name: 'Organizacja D',
        subtext: 'Cel: pomoc.',
        text: 'jedzenie, ubrania, koce'
    },
    {
        id: 5,
        name: 'Organizacja E',
        subtext: 'Cel: pomoc.',
        text: 'jedzenie, ubrania, koce'
    },
    {
        id: 6,
        name: 'Organizacja F',
        subtext: 'Cel: pomoc.',
        text: 'jedzenie, ubrania, koce'
    }
];

const local = [
    {
        id: 1,
        name: 'Zbiórka A',
        subtext: 'Cel: pomoc potrzebującym.',
        text: 'meble, ubrania'
    },
    {
        id: 2,
        name: 'Zbiórka B',
        subtext: 'Cel: pomoc potrzebującym.',
        text: 'meble, ubrania'
    },
    {
        id: 3,
        name: 'Zbiórka C',
        subtext: 'Cel: pomoc potrzebującym.',
        text: 'meble, ubrania'
    }
];

function HomeOrganizations() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeItems, setActiveItems] = useState(foundations);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 3;

    useEffect(() => {
        switch (activeTab) {
            case 0: {
                setActiveItems(foundations);
                break;
            }
            case 1: {
                setActiveItems(organizations);
                break;
            }
            case 2: {
                setActiveItems(local);
                break;
            }
        }
    }, [activeTab]);

    return (
        <section className='organizations-section' id='organizations'>
            <div className='organizations'>
                <h2>Komu pomagamy?</h2>
                <img src={decoration} alt='decoration-element' />
                <div className='buttons-container-org'>
                    {tabs.map((tab, index) => (
                        <button
                            style={{border: activeTab === index ? '2px solid lightgrey' : ''}}
                            key={index}
                            onClick={() => setActiveTab(index)} className='org-option'>
                            {tab}
                        </button>
                    ))}
                </div>
                <p>W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy. Możesz sprawdzić, czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            <div className='foundations-list'>
                {activeItems.slice(currentPage * itemsPerPage - itemsPerPage, currentPage * itemsPerPage).map(item => (
                    <div key={item.id} className='org-list-el'>
                        <div className='org-details'>
                            <div className='org-name'>
                                <h3>{item.name}</h3>
                                <h4>{item.subtext}</h4>
                            </div>
                            <div className='org-needs'>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='pages-buttons'>
                {
                    new Array(Math.ceil(activeItems.length / itemsPerPage)).fill(1).map((_, index) => <button style={{ border: currentPage === index + 1 ? '2px solid lightgrey' : '' }} onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>)
                }
            </div>
        </section>
    )
}

export default HomeOrganizations;
