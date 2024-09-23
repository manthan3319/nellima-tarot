import React, { useState, useMemo,useEffect } from "react";
import { circle_gif, circle_groupe, gif } from "../../images/Images";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Top_Section = () => {
    const { ref, inView } = useInView({
        threshold: 0.3, // Lowered the threshold for better triggering
        triggerOnce: true, // Only trigger once when in view
    });

    const title = "A Guide To Healing Love & Resolving Relationship Issues";

    // Memoized letter animation
    const letterAnimation = useMemo(
        () => ({
            hidden: { opacity: 0, y: 40 },
            visible: (index) => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: index * 0.09, // Reduced the delay for smoother and quicker appearance
                    duration: 0.3, // Adjust duration to make it faster
                    ease: "easeOut" // Ease out for smoother animation
                },
            }),
        }),
        []
    );
    

    const [gifLoaded, setGifLoaded] = useState(false);

    const [bgLoaded, setBgLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = gif;
        img.onload = () => setBgLoaded(true);
    }, [gif]);

    const handleGifLoad = () => {
        setGifLoaded(true);
    };

    return (
        <div
            style={{
                backgroundImage: `url(${gif})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                position: "relative",
                overflow: "hidden",
                backgroundPosition: 'center', // Add this to ensure it scales properly
            }}

            className="px-[20px]"
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-60" />

            {/* Rotating Image on the Left */}
            <LazyLoadedImage
                src={circle_gif}
                gifLoaded={gifLoaded}
                handleGifLoad={handleGifLoad}
                position="left"
            />

            {/* Content Section */}
            <motion.div
                ref={ref}
                className="max-w-[900px] m-auto lg:py-[87px] md:py-[40px] sm:pb-[50px] sm:pt-[110px] pt-[150px] pb-[120px] text-center z-10"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.7, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.1 },
                    },
                }}
            >
                {/* Top Image */}
                <motion.img
                    src={circle_groupe}
                    alt="circle image"
                    className="m-auto imge_bluer_filer sm:w-[300px] md:w-[100%]"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                />

                {/* Title Section */}
                <TitleSection title={title} letterAnimation={letterAnimation} />

                {/* Join Now Button */}
                <motion.div className="mt-[20px]">
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3, ease: "easeInOut" },
                        }}
                        className="bg-custom-red z-[999] relative text-white px-[30px] py-[10px] font-inter md:text-[18px] text-[15px] inline-block join_now_links transition-transform duration-300 hover:bg-opacity-80 hover:-translate-y-1"
                    >
                        <Link to="#">Join Now</Link>
                    </motion.div>
                </motion.div>

                {/* Bottom Image */}
                <motion.img
                    src={circle_groupe}
                    alt="circle image"
                    className="m-auto imge_bluer_filer sm:w-[300px] md:w-[100%]"
                    variants={{
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 0.7,
                                ease: "easeOut",
                                when: "beforeChildren",
                                staggerChildren: 0.05, // Reduced stagger delay for better performance
                            },
                        },
                    }}
                    
                />
            </motion.div>

            {/* Rotating Image on the Right */}
            <LazyLoadedImage
                src={circle_gif}
                gifLoaded={gifLoaded}
                handleGifLoad={handleGifLoad}
                position="right"
            />
        </div>
    );
};

// Title Section Component with Letter Animation
const TitleSection = ({ title, letterAnimation }) => (
    <motion.div className="text-center relative">
        <motion.h1
            className="animate-smooth text-custom-pink font-dm-serif 2xl:text-[80px] lg:text-[75px] md:text-[45px] sm:text-[35px] font-normal text-[35px] flex justify-center flex-wrap"
        >
            {title.split("").map((char, index) => (
                <motion.span
                    key={index}
                    custom={index}
                    variants={letterAnimation}
                    initial="hidden"
                    animate="visible"
                    className="animate-smooth"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.h1>
        <motion.p
            className="text-white font-inter mt-[10px] 2xl:text-[24px] lg:text-[20px] text-[16px]"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            Lorem Ipsum is simply dummy text of the printing and
            <br /> typesetting industry.
        </motion.p>
    </motion.div>
);

// Lazy Loaded Image Component
const LazyLoadedImage = ({ src, gifLoaded, handleGifLoad, position }) => (
    <div
        className={`fixed ${position === "left"
                ? "sm:top-1/2 left-1 transform -translate-x-1/2 -translate-y-1/2 top-[260px] z-10"
                : "fixed top-1/2 2xl:right-[-571px] lg:right-[-459px] md:right-[-300px] transform -translate-x-1/2 -translate-y-1/2 sm:right-[-260px] hidden sm:block"
            }`}
    >
        <motion.img
            src={src}
            alt="circle image"
            className="lg:w-[450px] 2xl:w-[570px] md:w-[300px] sm:w-[260px] w-[300px] animate-spin-slow"
            onLoad={handleGifLoad}
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={gifLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
        />
    </div>
);

export default Top_Section;
