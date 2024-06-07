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
    filter: string
}

const ListGroup = ({ items, heading, filter }: Props) => {
    return (
        <div className="container mx-auto xl:px-8 mt-4 mb-24">
            <h2 className="py-4 my-4 text-lg font-semibold">{heading}</h2>
            <div className=" grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">

                {items.filter(item => item.category == filter).map((item) => (
                    <>
                        <Link
                            href={`/${item.categoryLink}/${item.id}`}
                            key={item.id}
                            className="relative text-gray-60 cursor-pointer group  overflow-hidden"
                        >
                            <Image
                                src={item.src}
                                alt={item.name}
                                width={2400}
                                height={2400}
                                quality={100}
                                className="group-hover:scale-110 transition-all ease-in-out duration-700"
                            />
                            <div className="my-4 text-center text-xs sm:text-sm p-2">
                                <p className=" mb-3 line-clamp-2  dark:text-primary ">{item.name}</p>
                                <p className="  font-bold text-base">
                                    <span className=" text-xs font-normal">FCFA </span>{item.price}
                                </p>
                            </div>
                        </Link>
                    </>
                ))}
            </div>
        </div>
    );
};

export default ListGroup;
