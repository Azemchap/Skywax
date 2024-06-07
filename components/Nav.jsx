'use client'

import { Dialog, Transition } from '@headlessui/react'
import { MailIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { FaPhone, FaWhatsapp } from "react-icons/fa6"


export default function Nav() {
    const [open, setOpen] = useState(false)

    const navigation = {
        links: [
          
            {
                id: '6',
                href: '/contact',
                name: 'Contact Us'
            },
            {
                id: '7',
                href: '/about',
                name: 'About Us'
            },
        ]
    }

    return (
        <div className="bg-background fixed top-0 left-0 right-0 z-40">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative max-w-xs w-full  uppercase font-bold bg-slate-50 shadow-xl py-6 px-4 flex flex-col overflow-y-auto z-50">
                            <div className="px-4 pt-5 pb-2 flex">
                                <div className=" flex ">
                                    <Link onClick={() => setOpen(false)} href="/" className='flex items-center gap-2'>
                                        <Image className='w-full h-8 lg:w-12 lg:h-12 object-cover ' src={'/images/logo.jpg'} alt='logo' width={80} height={80} />
                                        <h2 className='text-lg text-gray-800 font-bold'>SKYWAX</h2>
                                    </Link>
                                </div>
                                <button
                                    type="button"
                                    className="-m-2 ml-auto p-2 rounded-md inline-flex items-end justify-end"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6 text-slate-900" aria-hidden="true" />
                                </button>
                            </div>


                            {/* Mobile menu  */}
                            <div className="border-t border-gray-200 py-6 px-4 space-y-6 ">
                                {navigation.links.map((link) => (
                                    <div className='flow-root ' key={link.id} link={link}>
                                        <Link onClick={() => setOpen(false)} className='-m-2 p-2 block text-gray-600 transition-all duration-200 ease-in-out hover:bg-[#dc7028] hover:text-white font-medium ' href={link.href}>{link.name}</Link>
                                    </div>
                                ))}
                                <div className="text-gray-700 bg-slate-100 rounded-md p-4 py-8 mt-60 flex gap-2 items-left justify-between font-normal text-sm">
                                    <Link rel="noopener" target="_blank" href="tel:+237654352368"> <span className='hover:text-[#dc6128] underline underline-offset-2 flex gap-2  items-center'> <FaPhone /> Call us</span>
                                    </Link>
                                    <Link href="https://wa.me/+237654352368"> <span className='hover:text-[#dc7028] underline flex gap-1  items-center underline-offset-2'><FaWhatsapp />  Whatsapp </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-background">
                {/* Top navigation  */}
                <div className="top-header  bg-gray-900 ">
                    <div className="max-w-screen-2xl mx-auto h-10 flex gap-8 md:gap-12 items-center  text-sm font-regular text-white px-8 ">
                        

                        <h2 className='hidden lg:flex gap-1 mr-auto'> <span className='font-bold'>Welcome to SKYWAX! </span> We offer fast worldwide shipping. </h2>


                        <div className="flex ml-auto gap-6 items-center justify-between">
                            <Link rel="noopener" target="_blank" href="tel:+8615868979611"> <span className='underline underline-offset-2 flex gap-2  items-center'> <FaPhone /> Phone</span>
                            </Link>
                            <Link href="https://wa.me/+8615868979611"> <span className='underline flex gap-1  items-center underline-offset-2'><FaWhatsapp />  Whatsapp </span>
                            </Link>
                            <Link rel="noopener" target="_blank" href="mailto:azemchap@gmail.com" className='underline flex gap-1  items-center underline-offset-2'>
                                <MailIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />Mail
                            </Link>

                        </div>
                    </div>
                </div>


                {/* Desktop nav list  */}
                <nav aria-label="Top" className="max-w-screen-2xl mx-auto px-4 ">
                    <div className="border-b text-slate-900 border-slate-200">
                        <div className="h-12 flex items-center">


                            {/* Logo */}
                            <div className=" flex lg:ml-0">
                                <Link href="/" className='flex items-center gap-2'>
                                    <Image className='w-full h-8  object-cover ' src={'/images/logo.jpg'} alt='logo' width={80} height={80} />
                                    <h2 className='text-lg text-gray-800 font-bold'>SKYWAX</h2>
                                </Link>
                            </div>

                            <div className="ml-auto flex items-center leading-loose">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center text-center lg:justify-end lg:space-x-8 ">
                                    {navigation.links.map((link) => (
                                        <div className='flow-root' key={link.id} link={link}>
                                            <Link onClick={() => setOpen(false)} className='-m-2 p-2 block text-slate-800 font-medium text-xs uppercase transition-all duration-200 ease-in-out tracking-wide underline-offset-8 hover:underline hover:text-[#dc7028] ' href={link.href}>{link.name}</Link>
                                        </div>
                                    ))}
                                </div>


                                <button
                                    type="button"
                                    className="bg-white p-2 rounded-md lg:hidden"
                                    onClick={() => setOpen(true)}
                                >
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6 text-slate-900" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
