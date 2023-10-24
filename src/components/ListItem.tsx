
import Image from 'next/image';
import React from 'react'
import AddToCart from './AddToCart'


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
        width: string;
        length: string;
        material: string;
        print: string;
        countInStock: number;
    }
}


const ListItem = ({ item }: Props) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-12">
            {/* item image */}
            <div className="lg:col-span-6">
                <Image
                    width={2400}
                    height={2400}
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
                    {item.price} <span className="text-gray-400 font-light text-sm italic"> per piece + shipping</span>
                </p>

                <AddToCart item={item} redirect={true} />

                <div className="border-t border-gray-200  text-gray-700 mt-8 pt-4">
                    <h2 className="text-lg font-semibold">
                        Description:
                    </h2>
                    <div className="mt-4 text-gray-500">
                        <p className=" mt-2  leading-12 text-lg ">
                            {item.description.map((desc) => (
                                <span className="block  leading-12 mb-4 w-full text-sm" key={desc.indexOf(toString())}>{desc}</span>
                            ))
                            }
                        </p>
                    </div>
                    <div className="text-sm font-light leading-6 mt-8">
                        <p className="my-2"><span className="font-bold">Width : </span>{item.width}</p>
                        <p className="my-2"><span className="font-bold">Length : </span>{item.length}</p>
                        <p className="my-2"><span className="font-bold">Material : </span>{item.material}</p>
                        <p className="my-2"><span className="font-bold">Print : </span>{item.print}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListItem