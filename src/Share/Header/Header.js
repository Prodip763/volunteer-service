import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from '../../images/logos/logo.png';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = ()=>{
        signOut(auth);
    }
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
                {
                    user ?
                        <button onClick={handleSignout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Sign Out
                        </button>
                        :
                        <li><Link to='/login'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Login
                        </button></Link></li>}
            </ul>


        </nav>
    );
};

export default Header;