import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logos/logo.png';


const Header = () => {

    return (
        <nav className="flex items-center justify-around mt-4 sticky top-0" style={{ background: 'rgba(255, 255, 255, 0.9)' }} >
            <Link to='/'><img style={{ width: '150px' }} src={logo}></img></Link>
            
            {/* <div onClick={() => setOpen(!open)} className="md:hidden">
                {open ? <Icon icon="ci:close-small" /> : <Icon icon="ci:menu-alt-01" />}
                
            </div> */}



            <ul className='flex gap-2 text-lg'>

                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>Donation</Link></li>
                <li><Link to='/about'>Events</Link></li>
                <li><Link to='/about'>Blog</Link></li>
            </ul>


        </nav>
    );
};

export default Header;