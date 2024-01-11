import { data } from "../../data/data";
import Item from "../Item";

const AfricanFabricsGroup = () => {
    const { items } = data

    return (
        <div className="max-w-screen-2xl mx-auto xl:px-8 mt-4 mb-24">
            <h2 className="py-4 my-4 text-lg font-semibold">African Fabrics</h2>
            {/* {items.length === 0 && (
                <h2 className="p-2 py-12 text-center bg-red-50 w-full">
                    No product Found..
                </h2>
            )} */}
            {items.filter(item => item.category == 'duplex').map((item) => (
                    <>
                        {(!item) ?
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-xl text-gray-800 bg-rose-100 font-extrabold tracking-tight  sm:text-4xl my-4 p-4">
                                    No item found
                                </h2>
                            </div >
                            :
                            <Item key={item.id} item={item} />}
                    </>
                ))}
        </div>
    );
};

export default AfricanFabricsGroup;
