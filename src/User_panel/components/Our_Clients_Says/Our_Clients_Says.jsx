import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clint1, clint_say_bg1, clint_say_bg2 } from '../../images/Images';

const Our_Clients_Says = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    };

    const testimonials = [
        {
            id: 1,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            author: "James Sadhbh",
            image: clint1
        },
        {
            id: 2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            author: "Sarah Connor",
            image: clint1
        },
    ];

    return (
        <div className='bg-custom-pink relative z-[99] md:py-[100px] sm:py-[40px] overflow-hidden py-[60px]'>
            <div className='absolute left-0 top-0'>
                <img src={clint_say_bg2} alt='img' className='lg:w-[100%] md:w-[300px] sm:w-[200px] w-[100px]' />
            </div>
            <div className='max-w-[1440px] m-auto lg:px-[30px] px-[20px]'>
                <div className='flex justify-between md:flex-row flex-col items-center sm:gap-[30px] gap-[30px] md:gap-0'>
                    <div className='lg:w-[30%] md:w-[50%] w-[100%]'>
                        <h1 className="font-dm-serif lg:text-[56px] md:text-[40px] text-custom-red sm:text-[35px] text-[27px]">What Our
                            Clients Says</h1>
                        <p className="lg:text-[20px] md:text-[19px] max-w-[800px] m-auto sm:mt-[12px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>

                    <div className='lg:w-[50%] md:w-[50%] w-[100%] '>
                        <Slider {...settings}>
                            {testimonials.map(testimonial => (
                                <div key={testimonial.id} className='md:px-[25px] md:text-left text-center px-[13px]'>
                                    <p className='text-custom-red lg:text-[25px] sm:text-[16px] font-inter font-bold text-[12px]'>{testimonial.text}</p>

                                    <div className='flex flex-row gap-[10px] items-center my-[15px] border-[1px] border-custom-red md:w-full md:max-w-[300px] sm:w-[200px] w-[160px] m-auto sm:p-[10px] rounded-full'>
                                        <img src={testimonial.image} alt={testimonial.author} className='w-[50px] h-[50px] rounded-full object-cover' />
                                        <h4 className='text-custom-red font-dm-serif lg:text-[18px] md:text-[13px] truncate text-[14px]'>{testimonial.author}</h4>
                                    </div>


                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className='absolute right-0 sm:top-0 bottom-0 '>
                <img src={clint_say_bg1} alt='img' className='lg:w-[100%] md:w-[300px] sm:w-[200px] w-[120px]' />
            </div>
        </div>
    )
}


export default Our_Clients_Says;