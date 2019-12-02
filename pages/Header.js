import React from 'react';
import Link from 'next/link';
import "../styles/header.scss";

const linkStyle = {
    marginRight: 15
};


const Header = ({refs}) => {
    function scroll (index) {
        window.scrollTo({behavior: 'smooth', top: refs[index].current.offsetTop});
    }


    return (
        <section className="Header">
            <div className='nav-lg'>
                <ul>
                    <li><a onClick={() => scroll(0)}>Home</a></li>
                    <li><a onClick={() => scroll(1)}>About</a></li>
                    <li><a onClick={() => scroll(2)}>Skills</a></li>
                    <li><a onClick={() => scroll(3)}>Projects</a></li>
                    <li><a onClick={() => scroll(4)}>Contact</a></li>
                </ul>
            </div>
        </section>
    );
}

export default Header;