import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import Link from "next/link";

interface Props {
    pages: {
        id: string
        current: boolean;
    }[];
    item: {
        id: string;
        category: string
        categoryLink: string
        name: string;
    }
}

const Breadcrumb = ({ pages, item }: Props) => {
    return (
        <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol role="list" className="flex items-start space-x-4">
                <li>
                    <div>
                        <Link href="/" className="text-gray-400 hover:text-gray-500">
                            <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                        </Link>
                    </div>
                </li>
                {pages.map((page) => (
                    <li key={page.id}>
                        <div className="flex items-start text-xs sm:text-sm">
                            <ChevronRightIcon
                                className="flex-shrink-0 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                            {page.current ?
                                <Link
                                    href='#'
                                    className="ml-4  font-medium text-gray-300 hover:text-gray-700 line-clamp-1"
                                >
                                    {item.name}
                                </Link> : <Link
                                    href={`/${item.categoryLink}`}
                                    className="ml-4  font-medium text-gray-500 hover:text-gray-700 capitalize w-28 text-center line-clamp-1"
                                >
                                    {item.category}
                                </Link>
                            }
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
