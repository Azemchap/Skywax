
import Image from 'next/image';
import React from 'react'
import AddToCart from './AddToCart'
import Link from 'next/link';
import { FaList, FaPhone, FaWhatsapp } from 'react-icons/fa6';


interface Props {
    item: {
        id: string;
        product: string;
        name: string;
        price: string;
        src: string;
        category: string;
        categoryLink: string;
        subCategory: string[];
        description: string[];
        width?: string;
        Brand?: string;
        Pattern?: string;
        length?: string;
        material?: string;
        print?: string;
        countInStock: number;
        features?: string[]
    }
}


const ListItem = ({ item }: Props) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-12">
            {/* item image */}
            <div className="lg:col-span-6">
                <Image
                    width={1200}
                    height={1200}
                    src={item.src}
                    alt={item.name}
                    className="object-center w-full h-full max-h-96 object-contain"
                    quality={100}
                />
            </div>

            {/* item details */}
            <div className="py-8 lg:col-span-6">
                <div className="flex flex-col-reverse">
                    <h1 className="text-lg font-bold tracking-tight capitalize text-gray-700 sm:text-xl">
                        {item.name}
                    </h1>
                </div>

                <p className="mt-1 font-bold text-sm text-[#dc7028] ">
                    <span className="text-xs font-light text-[#dc7028]">
                        FCFA {' '}
                    </span>
                    {item.price} <span className="text-gray-400 font-light text-sm italic">  + shipping</span>
                </p>

                <AddToCart item={item} redirect={true} />

                <div className="border-t border-gray-200  text-gray-700 mt-8 pt-4">
                    <h2 className="text-lg font-semibold mb-6 ">
                        Description <span className='font-light'>| Size Guide</span>
                    </h2>
                    <p className="my-2 text-sm text-gray-600"><span className="font-bold ">Product SKU : </span>{item.product}</p>
                    <div className="mt-4 text-gray-500">
                        <p className=" mt-2  leading-12 text-lg ">
                            {item.description.map((desc, index) => (
                                <span className="block  leading-12 mb-4 w-full text-sm" key={index}>{desc}</span>
                            ))}
                        </p>

                    </div>

                    <form className="my-8">
                        <div className="mt-10 flex gap-2 flex-col lg:flex-row">
                            <Link href="https://wa.me/+237651327377 "
                                className=" flex-1 bg-[#dc7028] border border-transparent rounded-md p-2 justify-center text-md font-medium text-white hover:bg-[#dc7028] focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-offset-gray-50 focus:ring-[#dc7028] sm:w-full flex gap-2 items-center"
                            >
                                <FaWhatsapp /> Chat on Whatsapp
                            </Link>
                            <Link href="tel:+237651327377"
                                className=" flex-1 bg-none border border-[#dc7028] rounded-md p-2 justify-center text-md font-medium text-[#dc7028] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-[#dc7028] sm:w-full flex gap-2 items-center"
                            >
                                <FaPhone /> Contact seller
                            </Link>

                        </div>
                    </form>

                    {
                        (item.features ?
                            <ul className=" text-xs text-gray-500 my-12 ">
                                {item.features.map((feed, index) => (
                                    <li className="flex justify-between items-start gap-4 my-4 leading-12 w-full text-base" key={index}>
                                        <FaList className=' basis-4 text-[#dc7028a4]  mt-1' /><span className='flex-1'>{feed}</span>
                                    </li>
                                ))}
                            </ul> : <></>
                        )
                    }





                    <div className="text-sm font-light leading-6 my-8">
                        {
                            (item.Brand ? <p className="my-2"><span className="font-bold">Brand : </span>{item.Brand}</p> : <></>)
                        }
                        {
                            (item.Pattern ? <p className="my-2"><span className="font-bold">Pattern : </span>{item.Pattern}</p> : <></>)
                        }
                        {
                            (item.width ? <p className="my-2"><span className="font-bold">width : </span>{item.width}</p> : <></>)
                        }
                        {
                            (item.length ? <p className="my-2"><span className="font-bold">length : </span>{item.length}</p> : <></>)
                        }
                        {
                            (item.material ? <p className="my-2"><span className="font-bold">material : </span>{item.material}</p> : <></>)
                        }
                        {
                            (item.print ? <p className="my-2"><span className="font-bold">print : </span>{item.print}</p> : <></>)
                        }
                    </div>

                    <div className='mb-12 '>This product is related to the following categories: {item.subCategory.map((cat, index) => (
                        <Link key={index} href={`/${item.categoryLink}`} className='text-[#dc7028] font-light'>{cat}, </Link>
                    ))}</div>

                </div>
            </div>
        </div>
    )
}

export default ListItem