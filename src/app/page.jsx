
import React from 'react'
import Image from 'next/image'
import SlicedGroup from '../components/SlicedGroup'
import { data } from '../data/data'


export default function Home() {
  let { items } = data

  // items = []

  return (
    <div className=' bg-gray-50 pt-28 border-t-blue-600 border-t-4 px-4 min-h-screen'>
      <div className="max-w-screen-2xl mx-auto">
        <Image className='max-h-64 px-2' src='/images/fabrics.jpg' alt='hero image' width={1200} height={1200} />
        <div className="text-center mt-4 md:mt-8">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-xl sm:text-4xl">Welcome to SKYWAX</span>
            <span className=" block text-sm sm:text-xl text-[#dc7028]">Your online store for fabrics & fashion</span>
          </h1>
          <p className="mt-3 max-w-lg mx-auto text-gray-500 text-xs sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We offer a large collection of high quality African fabrics, headwraps, earrings, fashion, hair accessories & much more!
            We ship worldwide!
          </p>
        </div>

        <SlicedGroup items={items} heading={"Newest African Fabrics"} slice={2} filter='African Fabrics'/>
      </div>
    </div>
  )
}
