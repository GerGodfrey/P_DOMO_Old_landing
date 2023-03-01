import React from 'react';
import { logo_color, close, menu } from '../assets';
import { useState } from 'react';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
    const [active, setActive] = useState("Inicio");
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <nav className='w-full flex py-6 justify-between items-center navbar'>
                <Link to={'/'}>
                    <img src={logo_color} alt="domo" className='w-[261px] h-[62px]' />
                </Link>
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className='w-[28px] h-[28px] object-contain'
                        onClick={() => setToggle((prev) => !prev)}
                    />
                    <div
                        className={`
            ${toggle ? 'flex' : 'hidden'}
            p-6 bg-black-gradient absolute top-20
            right-0 mx-4 my-2
            min-w-[140px] rounded-xl sidebar
          `}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col">
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-pink2" : "text-white"
                                        } ${index === navLinks.length - 1 ? "mb-4" : "mb-6"}`}
                                    onClick={() => setActive(nav.title)}
                                >
                                    <Link to={`/Home/${nav.id}`}>{nav.title}</Link>
                                </li>
                            ))}
                            <button className='btn-launch'>Launch App</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar2;