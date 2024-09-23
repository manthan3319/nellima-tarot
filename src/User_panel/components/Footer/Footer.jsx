import React from 'react'
import { logo } from '../../images/Images'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className='bg-custome-white relative z-[99] lg:py-[50px] md:pt-[50px] md:pb-[20px] pt-[50px] pb-[20px]'>
            <div className='max-w-[1440px] m-auto lg:px-[30px] px-[20px]'>
                <div className='flex md:flex-row justify-between flex-col sm:gap-[50px] md:gap-0 gap-[25px]'>
                    <div className='md:w-[30%] sm:w-[100%]'>
                        <img src={logo} alt='neelima tarot' className='sm:w-[200px] w-[140px]' />
                        <p className='mt-[25px] lg:text-[20px] md:text-[17px] font-inter text-[15px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div>

                    <div className='md:w-[25%]'>
                        <h1 className='sm:text-[25px] font-dm-serif font-bold sm:pb-[25px] pb-[10px] text-[25px]'>Page</h1>

                        <div>
                            <ul className='flex flex-col gap-[13px]'>
                                <li className='text-[18px] font-inter hover:text-custom-red hover:font-semibold'><Link>Home</Link></li>
                                <li className='text-[18px] font-inter hover:text-custom-red hover:font-semibold'><Link>About</Link></li>
                                <li className='text-[18px] font-inter hover:text-custom-red hover:font-semibold'><Link>Platform</Link></li>
                                <li className='text-[18px] font-inter hover:text-custom-red hover:font-semibold'><Link>Terms Condition</Link></li>
                                <li className='text-[18px] font-inter hover:text-custom-red hover:font-semibold'><Link>Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='md:w-[35%]'>
                    <h1 className='sm:text-[25px] font-dm-serif font-bold sm:pb-[25px] pb-[10px] text-[25px]'>Newsletter</h1>

                        <div>
                            <p className='sm:text-[19px] font-inter text-[14px]'>Get exclusive offers and become part of our family!
                            </p>

                            <div className='mt-[24px] bg-[#1E1E24] px-[10px] py-[5px] flex flex-row justify-between gap-[10px] items-center rounded-[5px]'>
                                <div className='flex-grow'>
                                    <input
                                        type='email'
                                        placeholder='Email Address'
                                        className='w-full py-[15px] px-[10px] bg-transparent outline-none text-white'
                                    />
                                </div>

                                <div className='flex-shrink-0'>
                                    <button className='bg-custom-pink text-custom-red font-inter py-[15px] px-[20px] rounded-[5px]'>
                                        Subscribe
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='pt-[25px] text-center border-t-2 mt-[25px]'>
                    <Link className='md:text-[20px]'><p>© 2024 TechExpertsWorld. All Rights Reserved.</p></Link>
                </div>
            </div>
        </div>
    )
}
