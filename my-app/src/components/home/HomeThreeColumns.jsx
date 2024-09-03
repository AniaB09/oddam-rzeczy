import React from "react";
import '../../scss/elements/_home-three-columns.scss';

function HomeThreeColumns () {
    return (
        <section className='three-columns' id='three-columns'>
            <div className='column'>
                <h3>10</h3>
                <h4>ODDANYCH WORKÓW</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className='column'>
                <h3>5</h3>
                <h4>WSPARTYCH ORGANIZACJI</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className='column'>
                <h3>7</h3>
                <h4>ZORGANIZOWANYCH ZBIÓREK</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </section>
    )
}

export default HomeThreeColumns;
