import Image from "next/image";
import Link from "next/link";

interface Props {
    items: {
        id: string;
        category: string
        categoryLink: string
        price: string;
        stocked: boolean;
        countInStock: number;
        name: string;
        src: string;
    }[];
    heading: string;
    slice: number;
    filter: string;
}

const SlicedGroup = ({ items, heading, slice, filter }: Props) => {
    return (
        <div className="max-w-screen-2xl mx-auto xl:px-8 mt-8 mb-12">
            <div className="flex justify-between items-center">
                <h2 className="py-4 my-4 text-lg font-semibold">{heading}</h2>
                {/* <Link className="text-xs underline underline-offset-2 hover:text-[#dc7028] transition-all ease-in-out duration-700"
                    href={`/${items.filter(item => item.category == filter)[1].categoryLink}`}> See all
                </Link> */}
            </div>
            {items.length === 0 && (
                <h2 className="p-2 py-12 text-center bg-red-50 w-full">
                    No product Found..
                </h2>
            )}
            <div className=" grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                {items.filter(item => item.category == filter).slice(0, slice).map((item) => (
                    <Link
                        href={`/${item.categoryLink}/${item.id}`}
                        key={item.id}
                        className="relative text-gray-60 cursor-pointer group  overflow-hidden"
                    >
                        {item.countInStock > 0 ? (
                            <h2 className="absolute text-white text-xs rounded-sm p-2  right-0 text-center font-medium bg-[#f37a29]">
                                New
                            </h2>
                        ) : (
                            <>
                                <h2 className="absolute p-2 h-20 w-20  rounded-full flex items-center justify-center left-1/2 -translate-x-1/2 -translate-y-1/4 bottom-1/2 text-white text-xs text-center font-medium bg-[#f37a29] z-20 uppercase">
                                    Sold out
                                </h2>
                                <div className="absolute left-0 right-0 top-0 bottom-0 z-10 bg-[#05050562] rounded-md"></div>
                            </>
                        )}
                        <Image
                            src={item.src}
                            alt={item.name}
                            width={2400}
                            height={2400}
                            quality={100}
                            className="group-hover:scale-110 transition-all ease-in-out duration-700"
                        />
                        <div className="my-4 text-center text-xs sm:text-sm p-2">
                            <p className=" mb-3">{item.name}</p>
                            <p className=" text-[#dc7028] font-bold text-base">
                                <span className=" text-xs font-normal">FCFA </span>{item.price}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SlicedGroup;
