/* eslint-disable react/no-unescaped-entities */

'use client'

import React from 'react'
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import Breadcrumb from '../../components/Breadcrumb'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa6'
import { sendEmail } from '../../actions/sendEmail'
import SubmitBtn from '../../components/SubmitBtn'



/* This example requires Tailwind CSS v2.0+ */
export default function ContactPage() {

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
                    name: 'Contact'
                }} />

                <div className="text-center">
                    <h2 className="text-base font-semibold text-[#e7803b] tracking-wide ">Contact us</h2>
                    <p className="mt-1 z-0 font-extrabold text-gray-900 sm:text-xl sm:tracking-tight lg:text-2xl">
                        We'd love to hear from you.
                    </p>
                    <p className="max-w-xl my-5 mx-auto text-sm mb-4 lg:text-lg text-gray-500">
                        We are always ready to listen to you, analyze your queries and give you feedback within the shortest time possible.
                    </p>
                </div>
                <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-6">
                    <div className="bg-gray-50  p-4 sm:px-6 lg:col-span-3 lg:px-8 xl:pr-12">
                        <div className="max-w-lg mx-auto">
                            <h2 className="text-2xl font-extrabold tracking-tight text-[#dc7028] sm:text-3xl text-center lg:text-left">Get in touch</h2>
                            <p className="mt-1 text-center lg:text-left text-base leading-6 text-gray-500">
                                For any inquiries, please feel free to contact us.
                            </p>
                            <dl className="mt-8 text-base text-gray-500 ">

                                <div className="mt-3">
                                    <dt className="sr-only">Whatsapp number</dt>
                                    <dd className="flex">
                                        <Link rel="noopener" target="_blank" href="https://wa.me/+8615868979611" className='flex items-center'>
                                            <FaWhatsapp className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                            <span className="ml-3">Whatsapp</span>
                                        </Link>
                                    </dd>
                                </div>

                                <div className="mt-3">
                                    <dt className="sr-only">Phone number</dt>
                                    <dd className="flex">
                                        <Link rel="noopener" target="_blank" href="tel:+8615868979611" className='flex items-center'>
                                            <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                            <span className="ml-3">+86 15868979611</span>
                                        </Link>
                                    </dd>
                                </div>

                                {/* <div className="mt-3">
                                    <dt className="sr-only">Email</dt>
                                    <dd className="flex">
                                        <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">histbamtc@gmail.com</span>
                                    </dd>
                                </div> */}
                                <div className="mt-3">
                                    <dt className="sr-only">Address</dt>
                                    <dd className="flex">
                                        <LocationMarkerIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">Address - No.558 Chou Zhou road, Yiwu City, ZheJiang, China</span>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>



                    {/* Form  */}
                    <div className="bg-white py-8 px-4 sm:px-6 lg:col-span-3 lg:px-8 xl:pl-12">
                        <div className="max-w-lg mx-auto lg:max-w-none">

                            <form action={async (formData) => { 
                                await sendEmail(formData) }}
                                 className="grid grid-cols-1 gap-y-6">
                                <div>
                                    <label htmlFor="username" className="sr-only">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="username"
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        placeholder="Full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        placeholder="Email"
                                        maxLength={500}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                                        placeholder="Message"
                                        defaultValue={''}
                                        maxLength={2000}
                                        required
                                    />
                                </div>
                                <div>
                                   <SubmitBtn />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
