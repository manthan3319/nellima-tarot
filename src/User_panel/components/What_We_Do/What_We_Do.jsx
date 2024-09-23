import React from 'react';
import { slider_img_1, slider_img_2, slider_img_3, top_vectore, grid_bg, shadow1, rightarrow, leftarrow, shadow2, star } from '../../images/Images';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-arrow-right absolute lg:top-[50%] lg:left-[-25px] bottom-[-30px] left-1/4 z-[999]" onClick={onClick}>
    <img src={leftarrow} alt="Next" className="w-[50px]" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-arrow-left absolute lg:top-[50%] lg:right-[-30px] bottom-[-25px] right-1/4 z-[999]" onClick={onClick}>
    <img src={rightarrow} alt="Prev" className="w-[50px]" />
  </div>
);

// Array of slide data
const slideData = [
  {
    image: slider_img_1,
    title: 'Inter-caste Marriage',
    vector: top_vectore,
  },
  {
    image: slider_img_2,
    title: 'Parents Approval',
    vector: top_vectore,
  },
  {
    image: slider_img_3,
    title: 'Love Problem Solution',
    vector: top_vectore,
  },
];

const What_We_Do = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, centerMode: false } },
      { breakpoint: 768, settings: { slidesToShow: 3, centerMode: false } },
      { breakpoint: 640, settings: { slidesToShow: 3, centerMode: false } },
      { breakpoint: 390, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  return (
    <div
      style={{
        backgroundImage: `url(${grid_bg})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
      className="z-[99] relative bg-white lg:py-[50px] md:py-[50px] sm:py-[50px] py-[50px] overflow-hidden"
      ref={ref}
    >
      <div className="absolute z-[-1]">
        <img src={shadow1} alt="shadow1" />
      </div>

      <div className="absolute top-20 right-[10%] z-[-1]">
        <img src={star} alt="shadow1" />
      </div>

      {/* Content section */}
      <div className="lg:max-w-[1440px] m-auto lg:px-[30px] px-[20px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Start from the left
          animate={inView ? { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.5, 0.05, 0.1, 0.3] } } : {}}
          exit={{ opacity: 0, x: -50 }} // Optional: Exit to the left
          className="text-center"
        >
          <motion.h1
            className="font-dm-serif lg:text-[56px] text-custom-red md:text-[40px] sm:text-[35px] text-[27px]"
            initial={{ x: -30, scale: 0.9 }} // Start slightly to the left
            animate={inView ? { x: 0, scale: 1, transition: { duration: 0.7, ease: "easeInOut" } } : {}}
          >
            What We Do
          </motion.h1>
          <motion.p
            className="lg:text-[20px] md:text-[18px] max-w-[800px] m-auto mt-[12px]"
            initial={{ opacity: 0, x: -20 }} // Start slightly to the left
            animate={inView ? { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeInOut" } } : {}}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </motion.p>
        </motion.div>




        {/* Slider section */}
        <div className="slider_section lg:w-[90%] m-auto mt-[70px]">
          <Slider {...settings}>
            {slideData.map((slide, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-end p-4 slide"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={slide.image} alt={`Slide ${index + 1}`} className="lg:h-[600px] sm:w-[100%] w-[80%] m-auto object-cover mb-2 slider_img" />
                <div className="sm:w-[100%] w-[80%] m-auto flex items-center justify-between mt-[20px] border-b-[1px] border-black pb-[5px]">
                  <p className="lg:text-[25px] md:text-[17px] font-dm-serif font-normal">{slide.title}</p>
                  <img src={slide.vector} alt="top vector" className="w-[25px]" />
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        <div className='mt-[60px] text-center'>
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } }}
            className='bg-custom-red text-white px-[30px] py-[10px] font-inter md:text-[18px] sm:text-[13px] text-[12px] inline-block join_now_links transition-transform duration-300 hover:bg-opacity-80 hover:-translate-y-1'
          >
            <Link to="#">
              Get Your video report Now
            </Link>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .slick-slide {
          transition: all 0.3s ease-in-out;
          transform: scale(0.8); /* Default scale for all slides */
          opacity: 0.5; /* Non-center slides slightly transparent */
        }

        .slick-center {
          z-index: 2 !important; /* Bring center slide to the front */
          transition: all 0.3s ease-in-out !important;
          opacity: 1; /* Non-center slides slightly transparent */
        }

        .slick-slide.slick-active:not(.slick-center) {
          transition: all 0.3s ease-in-out;
          transform: scale(1.05) !important; /* Scale up the center slide */
          opacity: 1; /* Non-center slides slightly transparent */
        }

        .slick-slide:hover {
          transform: scale(0.9); /* Scale up slightly on hover */
        }
      `}</style>

      <div className="absolute z-[-1] right-0 bottom-0">
        <img src={shadow2} alt="shadow2" />
      </div>

      <div className="absolute bottom-8 left-[10%] z-[-1]">
        <img src={star} alt="shadow1" />
      </div>
    </div>
  );
};

export default What_We_Do;
