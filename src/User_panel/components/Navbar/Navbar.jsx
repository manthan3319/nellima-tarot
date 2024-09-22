import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../images/Images';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Platform', path: '/platform' },
        { label: 'Contact', path: '/contact' },
    ];

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    // Handle scroll event for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            const isNowSticky = window.scrollY > 100; // Sticky threshold
            setIsSticky(isNowSticky);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Prevent body scrolling when the drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    }, [isOpen]);

    return (
        <div className={`navbar ${isSticky ? 'sticky' : ''} bg-custome-white py-[5px] z-[99999] w-[100%]`}>
            <div className='lg:max-w-[1440px] m-auto lg:px-[30px] px-[20px] hidden md:block overflow-hidden'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Link to='/'>
                            <img src={logo} className='lg:w-[180px] md:w-[150px]' alt='logo' />
                        </Link>
                    </div>

                    <div>
                        <ul className='flex gap-x-11'>
                            {menuItems.map((item, index) => (
                                <li key={index} className='font-inter lg:text-[20px] md:text-[16px] font-bold'>
                                    <Link to={item.path}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='md:hidden block px-[20px]'>
                <div className='flex flex-row justify-between items-center'>
                    <div>
                        <Link to='/'>
                            <img src={logo} className='w-[150px]' alt='logo' />
                        </Link>
                    </div>
                    <div>
                        <button onClick={toggleDrawer} className='text-white text-[34px]'>
                            <i className='fa fa-bars' aria-hidden='true'></i>
                        </button>
                    </div>
                </div>

                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='right'
                    className='bla bla bla'
                >
                    <div>
                        <ul className='flex gap-[12px] flex-col relative z-[99999999]'>
                            {menuItems.map((item, index) => (
                                <li key={index} className='font-inter lg:text-[20px] md:text-[16px] font-bold'>
                                    <Link to={item.path}>{item.label}</Link>
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
