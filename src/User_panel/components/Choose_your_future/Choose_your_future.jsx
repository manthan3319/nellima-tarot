import React from 'react';
import { section3_bg, section3_bg2 } from '../../images/Images';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Dynamic content data
const futureOptions = [
    { title: 'Tarot Reader', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { title: 'Palmist', description: 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.' },
    { title: 'Astrologer', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { title: 'Numerologist', description: 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.' },
    { title: 'Crystal Healer', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
];

const ChooseYourFuture = () => {
    // Intersection observer to detect if the section is in view
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    // Animation variants for left and right side content
    const slideInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
                staggerChildren: 0.3,
            },
        },
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
    };

    return (
        <div
            style={{
                backgroundImage: `url(${section3_bg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
            }}
            className="z-[99] relative bg-white lg:py-[60px] md:py-[50px] sm:py-[50px] py-[50px] overflow-hidden"
            ref={ref}
        >
            {/* <div className="absolute inset-0 bg-black opacity-40 sm:hidden block" /> */}

            <div className="lg:max-w-[1440px] m-auto lg:px-[30px] px-[20px] lg:mb-[80px] relative z-[2]">
                <div className="text-center">
                    <motion.h1
                        className="font-dm-serif lg:text-[56px] md:text-[40px] sm:text-[35px] text-custom-pink text-[27px]"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={titleVariants}
                    >
                        Choose Way to Know Your Future
                    </motion.h1>
                    <motion.p
                        className="lg:text-[20px] md:text-[15px] sm:text-[13px] max-w-[800px] m-auto mt-[12px] text-white"
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.5 } } : {}}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </motion.p>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${section3_bg2})`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                    }}
                    className="flex z-[999] relative sm:flex-row gap-[25px] flex-col justify-between items-center lg:gap-[230px] md:gap-[100px] sm:gap-[160px] lg:py-[80px] md:py-[50px] sm:py-[30px] py-[40px] md:w-[70%] w-[100%] m-auto"
                >
                    {/* <div className="absolute inset-0 bg-black opacity-40 sm:hidden block " /> */}
                    <motion.div
                        className="sm:text-right flex flex-col sm:gap-[60px] gap-[25px] z-[99]"
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={slideInLeft}
                    >
                        {futureOptions.slice(0, 3).map((option, index) => (
                            <motion.div
                                key={index}
                                className="future-option"
                                variants={itemVariants}
                            >
                                <h1 className="font-dm-serif font-normal lg:text-[34px] text-custom-pink italic text-[20px]">
                                    {option.title}
                                </h1>
                                <p className="font-inter text-white lg:text-[18px] text-[14px]">
                                    {option.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right column with content sliding in from the right */}
                    <motion.div
                        className="text-left flex flex-col sm:gap-[50px] gap-[25px] z-[99]"
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={slideInRight}
                    >
                        {futureOptions.slice(3, 5).map((option, index) => (
                            <motion.div
                                key={index}
                                className="future-option"
                                variants={itemVariants}
                            >
                                <h1 className="font-dm-serif font-normal lg:text-[34px] text-custom-pink italic text-[20px]">
                                    {option.title}
                                </h1>
                                <p className="font-inter text-white lg:text-[18px] text-[14px]">
                                    {option.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ChooseYourFuture;
