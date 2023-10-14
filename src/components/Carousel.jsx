'use client'

import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'

export default function DefaultCarousel() {
    return (
        <Carousel className="w-full h-80 object-cover  ">
            <Image className='h-full'
                alt="slider image" width={1200} height={1200}
                src="/images/WhatsApp Image 2023-07-19 at 2.08.49 PM.jpeg"
            />
            <Image className='h-full'
                alt="slider image" width={1200} height={1200}
                src="/images/WhatsApp Image 2023-07-19 at 2.08.52 PM.jpeg"
            />
            <Image className='h-full'
                alt="slider image" width={1200} height={1200}
                src="/images/WhatsApp Image 2023-07-19 at 2.08.42 PM.jpeg"
            />
            <Image className='h-full'
                alt="slider image" width={1200} height={1200}
                src="/images/WhatsApp Image 2023-07-19 at 2.08.31 PM.jpeg"
            />
            <Image className='h-full'
                alt="slider image" width={1200} height={1200}
                src="/images/WhatsApp Image 2023-07-19 at 2.08.25 PM (2).jpeg"
            />
        </Carousel>
    )
}


