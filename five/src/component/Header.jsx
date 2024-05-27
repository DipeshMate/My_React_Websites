import React from 'react'

const Header = () => {
    return<nav>
        <NavBar/>
    </nav>;
};
const NavBar = () =>(
    <>
    <h2>Dipesh</h2>
    <div>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#timeline">Experience</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#testimonial">Testimonial</a>
    </div>
    <a href="mailto:dipeshmate17@gmail.com"><button>Email Me</button></a>
    </>
)
export default Header