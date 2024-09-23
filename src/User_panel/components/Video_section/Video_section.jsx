import React from 'react'
import { video_bg, video_play } from '../../images/Images'
import { Link } from 'react-router-dom';

const Video_section = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${video_bg})`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
            }}
            className="z-[99] relative bg-white  overflow-hidden md:py-[150px] sm:py-[100px] py-[80px] ">
            <Link>
                <img src={video_play} className='w-[80px] m-auto' alt='video play ' />
            </Link>
        </div>
    )
}

export default Video_section;