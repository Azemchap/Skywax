/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'


/* This example requires Tailwind CSS v2.0+ */
export default function AboutPage() {

    const pages = [
        { id: '1', current: true },
    ]

    return (
        <div className="bg-white">
            <div className="max-w-screen-2xl mx-auto px-4 pt-28">

                <Breadcrumb pages={pages} item={{
                    id: '',
                    category: '',
                    categoryLink: '',
                    name: 'About'
                }} />

                <div className="text-center">
                    <h2 className="text-base font-semibold text-[#e7803b] tracking-wide ">About us</h2>
                    <p className="mt-1 z-0 font-extrabold text-gray-900 sm:text-xl sm:tracking-tight lg:text-2xl">
                        Sky wax is a brand established in 2018.
                    </p>
                    <p className="max-w-xl my-5 mx-auto text-sm mb-4 lg:text-lg text-gray-500">
                        The company's headquarters is located in Yiwu, Zhejiang, China - the capital of small commodities in the world.
                    </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 lg:py-8 sm:px-6 lg:col-span-3 max-w-screen-sm mx-auto lg:px-8 xl:pr-12 lg:my-12">
                    <div className="max-w-lg text-center sm:text-left mx-auto">
                        <h2 className="text-2xl font-extrabold tracking-tight text-[#dc7028] sm:text-3xl text-center ">About our company</h2>
                        <p className="mt-4  text-base leading-6 text-gray-500">
                            We have a Ten thousand spindles, 8,500 looms, 12 wax printing production lines, 3 printed bath towel production lines, 2 yarn-dyed fabric production lines, a 60,000 KW self-owned power plant.  We have a manpower of 15,000 employees with an annual output of 200 million meters of wax-printed cloth, 70 million meters of yarn-dyed cloth, and 4,800 tons of quilt products, we are the world's largest wax-printed cloth production base.
                        </p>
                        <p className="mt-4  text-base leading-6 text-gray-500">
                            Our leading products include: wax printed cloth, various types of cotton yarn, yarn-dyed cloth, printed towel quilt products, etc., with 468 specifications and more than 6,000 varieties of designs and colors. Sky Wax brand wax has obtained the national inspection-free product certificate, and is sold perfectly in more than 30 countries and regions such as Europe, America, Southeast Asia, the Middle East, and Africa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
