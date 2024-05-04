import React from 'react'

const Banner = () => {
    return (
        <div>
        
            <video
                src="/bannervid.mp4"
                autoPlay
                loop
                muted
                className=" w-full  object-cover "
                style={{ height: '400px' }}
                alt="Hero Video"
            />
        </div>
    )
}

export default Banner
