import React, { useState, useEffect } from 'react';
import { logo } from '../../images/Images';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'What WE Do', path: '#What_We_Do' },
        { label: 'About', path: '#Choose_your_future' },
        { label: 'Astrology', path: '#Neelima_Tarot' },
        { label: 'Get Report', path: '#get_report' },
    ];

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <div>
            <div className={`navbar ${isSticky ? 'sticky' : ''} bg-custome-white py-[5px] z-[99999] w-[100%]`}>
                <div className='lg:max-w-[1440px] m-auto lg:px-[30px] px-[20px] hidden md:block '>
                    <div className='flex justify-between items-center'>
                        <div>
                            <a href='/'>
                                <img src={logo} className='lg:w-[180px] md:w-[150px]' alt='logo' />
                            </a>
                        </div>

                        <div>
                            <ul className='flex gap-x-11'>
                                {menuItems.map((item, index) => (
                                    <li key={index} className='font-inter lg:text-[20px] md:text-[16px] font-bold'>
                                        <a href={item.path}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:hidden block px-[20px] sticky'>
                <div className='flex flex-row justify-between items-center'>
                    <div>
                        <a href='/'>
                            <img src={logo} className='w-[150px]' alt='logo' />
                        </a>
                    </div>
                    <div>
                        <button onClick={toggleDrawer} className='text-white text-[34px]'>
                            <i className='fa fa-bars' aria-hidden='true'></i>
                        </button>
                    </div>
                </div>

                <Drawer open={isOpen} onClose={toggleDrawer} direction='right'>
                    <div>
                        <ul className='flex gap-[12px] flex-col px-[15px] pt-[25px]'>
                            {menuItems.map((item, index) => (
                                <li key={index} className='font-inter lg:text-[20px] md:text-[16px] font-bold'>
                                    <a href={item.path} onClick={toggleDrawer}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Drawer>
            </div>
        </div>
    );
};

export default Navbar;
