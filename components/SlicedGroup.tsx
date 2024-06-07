import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "../app/lib/interface";

interface Props {
    products: ProductCard[];
    heading: string;
    slice: number;
    filter: string;
    categoryLink: string;
}

const SlicedGroup = ({ products, heading, slice, filter, categoryLink }: Props) => {
    return (
        <div className="container mx-auto xl:px-8 mt-8 mb-12">
            <div className="flex justify-between items-center">
                <h2 className="py-4 my-4 text-lg font-semibold">{heading}</h2>
            </div>
            <div className=" grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
                {products.filter(product => product.category == filter).slice(0, slice).map((product) => (
                    <Link
                        href={`/${product.category}/${product.currentSlug}`}
                        key={product.currentSlug}
                        className="relative text-gray-60 cursor-pointer group  overflow-hidden"
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={2400}
                            height={2400}
                            quality={100}
                            className="group-hover:scale-110 transition-all ease-in-out duration-700"
                        />
                        <div className="my-4 text-center text-xs sm:text-sm p-2">
                            <p className=" mb-3 line-clamp-2">{product.name}</p>
                            <p className=" text-[#dc7028] font-bold text-base">
                                <span className=" text-xs font-normal">FCFA </span>{product.price}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
            <Link href={`/${categoryLink}`} className="inline-flex items-center gap-4 text-white text-shadow-sm my-6 p-2 px-6 rounded capitalize hover:bg-[#dc7028be] text-sm bg-[#dc7028]">view all {filter} <ChevronDoubleRightIcon className="w-4" /> </Link>
        </div>
    );
};

export default SlicedGroup;
