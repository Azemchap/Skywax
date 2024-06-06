/* eslint-disable react/no-unescaped-entities */

'use client'

import { ArrowLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Breadcrumb from '../components/Breadcrumb'



/* This example requires Tailwind CSS v2.0+ */
export default function NotFoundPage() {

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
                    name: 'Not found'
                }} />

                <div className="bg-red-100 rounded-sm my-8 px-4 py-20 flex flex-col items-center text-center">
                    <div className="  pb-4 flex flex-col text-gray-600 items-center gap-2">
                        Page unavailable <span className='text-xs'>(under maintenances)</span> 
                    </div>
                    <Link
                        className=" underline flex gap-2 text-green-600 text-sm"
                        href="/"
                    >
                        <ArrowLeftIcon className="w-3" /> Back to Homepage
                    </Link>
                </div>

            </div>
        </div>
    )
}
