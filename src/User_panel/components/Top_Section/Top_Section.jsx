import React from 'react';
import { circle_gif, circle_groupe, section1bg } from '../../images/Images';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Top_Section = () => {
    const { ref, inView } = useInView({
        threshold: 0.1, // 10% visible
        triggerOnce: true, // Only trigger once
    });

    const textAnimation = {
        hidden: { opacity: 0, x: 100 }, // Start from right
        visible: { opacity: 1, x: 0 }, // End at original position
    };

    const headingAnimation = {
        hidden: { opacity: 0, scale: 0.9 }, // Start with scale
        visible: { opacity: 1, scale: 1 }, // Scale to normal
    };

    const fadeInAnimation = {
        hidden: { opacity: 0 }, // Start invisible
        visible: { opacity: 1 }, // Fade in
    };

    return (
        <div
            style={{
                backgroundImage: `url(${section1bg})`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
            }}
            className=' relative overflow-hidden overflow-x-hidden'
        >
            {/* Rotating circle image */}
            <div className='fixed sm:top-1/2 left-1 transform -translate-x-1/2 -translate-y-1/2  top-[260px]'>
                <img src={circle_gif} alt='circle image' className='2xl:w-[570px] lg:w-[450px] md:w-[300px] sm:w-[270px] w-[300px] animate-spin-slow' />
            </div>

            {/* Main content */}
            <div ref={ref} className={`max-w-[900px] m-auto lg:py-[87px] md:py-[40px] sm:pb-[50px] sm:pt-[110px] pt-[130px] pb-[100px] text-center transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                <div className='w-[100%] text-center'>
                    <img src={circle_groupe} alt='circle image' className='m-auto imge_bluer_filer sm:w-[300px] md:w-[100%]' />
                </div>

                <motion.div
                    className='text-center z-[999] relative'
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={textAnimation}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                >
                    <motion.h1
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={headingAnimation}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }} // Delay for heading
                        className='text-custom-pink font-dm-serif 2xl:text-[80px] lg:text-[75px] md:text-[45px] sm:text-[35px] font-normal text-[29px]'
                    >
                        A Guide To Healing Love & Resolving Relationship Issues
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInAnimation}
                        transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }} // Fade in for paragraph
                        className='text-white font-inter mt-[10px] 2xl:text-[24px] lg:text-[20px] text-[13px]'
                    >
                        Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry.
                    </motion.p>
                </motion.div>

                <div className='mt-[20px]'>
                    <Link className='bg-custom-red z-[999] relative text-white px-[30px] py-[10px] font-inter md:text-[18px] text-[15px] inline-block join_now_links transition-transform duration-300 hover:translate-x-2 hover:bg-opacity-80 hover:-translate-y-1'>
                        Join Now
                    </Link>
                </div>

                <div className='w-[100%] text-center'>
                    <img src={circle_groupe} alt='circle image' className='m-auto imge_bluer_filer sm:w-[300px] md:w-[100%]' />
                </div>
            </div>

            {/* Rotating circle image */}
            <div className='fixed top-1/2 2xl:right-[-571px] lg:right-[-459px] md:right-[-300px] transform -translate-x-1/2 -translate-y-1/2 sm:right-[-260px] hidden'>
                <img src={circle_gif} alt='circle image' className='lg:w-[450px] 2xl:w-[570px]  md:w-[300px] sm:w-[260px] animate-spin-slow' />
            </div>
        </div>
    );
};

export default Top_Section;
