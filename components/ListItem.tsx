
import Image from 'next/image';
import Link from 'next/link';
import { FaCircleCheck, FaPhone, FaWhatsapp } from 'react-icons/fa6';
import { ProductItem } from '../app/lib/interface';
import { urlFor } from '../app/lib/sanity';
import { formatCurrency } from '../@/lib/utils';

export const revalidate = 30



interface Props {
    product: ProductItem
}


const ListProduct = ({ product }: Props) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* item image */}
            <div className="lg:col-span-6">
                <Image
                    width={1200}
                    height={1200}
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    className="object-center w-full h-full max-h-96 object-contain"
                    quality={100}
                />
            </div>

            {/* product details */}
            <div className="py-8 lg:col-span-6">
                <div className="flex flex-col-reverse">
                    <h1 className="text-lg font-bold tracking-tight capitalize text-gray-700 sm:text-xl">
                        {product.name}
                    </h1>
                </div>

                <p className="mt-1 font-bold text-sm text-[#dc7028] ">
                    {formatCurrency(product.price)} <span className="text-gray-400 font-light text-sm italic">  + shipping</span>
                </p>


                <div className="border-t border-gray-200  text-gray-700 mt-8 pt-4">
                    <h2 className="text-lg font-semibold mb-6 ">
                        Description <span className='font-light'>| Size Guide</span>
                    </h2>
                    <p className="my-2 text-sm text-gray-600"><span className="font-bold ">Product SKU : </span>{product.productSKU}</p>
                    <div className="mt-4 text-gray-500">
                        <p className=" mt-2  leading-12 text-lg ">
                            <span className="block prose prose-xl leading-12 mb-4 w-full text-sm" >{product.description}</span>

                        </p>

                    </div>

                    <form className="my-8">
                        <div className="mt-10 flex gap-2 flex-col lg:flex-row">
                            <Link href="https://wa.me/+237651327377 "
                                className=" flex-1 bg-[#dc7028] border border-transparent rounded-md p-2 justify-center text-md font-medium text-white hover:bg-[#dc7028] focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-offset-gray-50 focus:ring-[#dc7028] sm:w-full flex gap-2 products-center"
                            >
                                <FaWhatsapp /> Chat on Whatsapp
                            </Link>
                            <Link href="tel:+237651327377"
                                className=" flex-1 bg-none border border-[#dc7028] rounded-md p-2 justify-center text-md font-medium text-[#dc7028] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-[#dc7028] sm:w-full flex gap-2 products-center"
                            >
                                <FaPhone /> Contact seller
                            </Link>

                        </div>
                    </form>

                    {
                        (product.features ?
                            <ul className=" text-xs text-gray-500 my-12 ">
                                {product.features.map((feed, index) => (
                                    <li className="flex justify-between products-start gap-4 my-4 leading-12 w-full text-base" key={index}>
                                        <FaCircleCheck className=' basis-4 text-[#e06717e0]  mt-1' /><span className='flex-1'>{feed}</span>
                                    </li>
                                ))}
                            </ul> : <></>
                        )
                    }

                    <div className='mb-12 '>This product is related to the following categories: {product.tags.map((tag, index) => (
                        <span key={index} className='text-primary font-light'>{tag} </span>
                    ))}</div>

                </div>
            </div>
        </div>
    )
}

export default ListProduct