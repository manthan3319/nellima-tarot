import React from 'react';
import { motion } from 'framer-motion';
import { grid_bg, NeelimaTarot, question_Card, shadow1, shadow2, star } from '../../images/Images';
import { Link } from 'react-router-dom';

// Dynamic card data
const cardOptions = [
    { title: 'One Question', image: question_Card },
    { title: 'Two Questions', image: question_Card },
    { title: 'Three Questions', image: question_Card },
    { title: 'Five Questions', image: question_Card },
];

// Define variants for left-to-right and right-to-left animations
const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

// Container variants to stagger card animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Reduce the delay between each child animation
            delayChildren: 0.3, // Delay before starting the stagger
        },
    },
};

export const Neelima_Tarot = () => {
    return (
        <motion.div
            style={{
                backgroundImage: `url(${grid_bg})`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
            }}
            className="z-[99] relative bg-white lg:py-[50px] md:py-[50px] sm:py-[50px] py-[50px] overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={fadeInLeft} // Entry animation for the whole section
        >
            <div className="absolute z-[-1] top-0">
                <img src={shadow1} alt="shadow1" />
            </div>

            <div className="lg:max-w-[1440px] m-auto lg:px-[30px] px-[20px]">
                <div className="text-center">
                    <h1 className="lg:text-[70px] md:text-[40px] sm:text-[35px] text-black font-dm-serif text-[27px]">NEELIMA TAROT</h1>
                </div>

                <motion.div
                    className="flex sm:flex-row flex-col gap-[18px] justify-between items-center md:gap-[50px] sm:gap-[20px] relative lg:mb-[70px]"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInLeft} // Apply fadeInLeft to this section as well
                >
                    <div className="absolute top-10 right-[10%] z-[-1]">
                        <img src={star} alt="star" />
                    </div>
                    <div>
                        <p className="sm:text-[18px] font-inter text-[17px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>

                    <div>
                        <motion.img
                            src={NeelimaTarot}
                            alt="NeelimaTarot"
                            className="lg:w-[300px] md:w-[680px] w-[200px] NeelimaTarot_img"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } }} // Smooth transition for the image
                        />
                    </div>

                    <div className="lg:mt-[200px] ">
                        <p className="sm:text-[18px] font-inter text-[17px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>

                    <div className="absolute bottom-0 left-[10%] z-[-1]">
                        <img src={star} alt="star" />
                    </div>
                </motion.div>

                <div className="text-center md:mt-[50px] sm:mt-[50px] mt-[40px]">
                    <h1 className="font-dm-serif lg:text-[56px] md:text-[50px] text-custom-red sm:text-[35px] text-[27px]">Ask the Stars</h1>
                    <p className="lg:text-[20px] md:text-[18px] max-w-[800px] m-auto lg:mt-[12px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                {/* Dynamic Card Section with staggered animation */}
                <motion.div
                    className="md:grid-cols-4 sm:grid-cols-4 grid-cols-2 grid md:gap-[40px] lg:mt-[40px] md:mt-[40px] relative sm:mt-[20px] mt-[30px] z-[699]"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {cardOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            className="relative card-container overflow-hidden"
                            variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link to="#">
                                {/* Card image */}
                                <motion.img
                                    src={option.image}
                                    alt={option.title}
                                    className="w-full h-auto relative z-10"
                                    style={{ willChange: 'transform' }}
                                />

                                {/* Flexbox to perfectly center the text */}
                                <motion.h1
                                    className="absolute inset-0 flex items-center justify-center text-white text-center font-inter font-bold lg:text-[20px] text-[12px]  z-20"
                                >
                                    {option.title.split(' ').map((line, i) => (
                                        <span key={i}>{line}<br /></span>
                                    ))}
                                </motion.h1>

                                {/* Rotating border container */}
                                <div className="border-animation"></div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

            </div>

            <div className="absolute z-[-1] right-[-20%] top-1/4">
                <img src={shadow2} alt="shadow2" />
            </div>
        </motion.div>
    );
};
