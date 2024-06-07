

import ListItem from "../../../components/ListItem";
import { ProductItem } from "../../lib/interface";
import { client } from "../../lib/sanity";

async function getProductDetails(slug: string) {
    const query = `
     *[_type == 'product' && slug.current == '${slug}' ] {
  name,
    "currentSlug": slug.current,
    productSKU,
    price,
    image,
    category,
    description,
    tags,
    amountInStock,
    features,
    
}[0]`
    const data = await client.fetch(query)
    return data
}


export default async function ProductDetailsPage({ params }: { params: { slug: string } }) {


    const product: ProductItem = await getProductDetails(params.slug)

   
    // const pages = [
    //     { id: '1', current: false },
    //     { id: '2', current: true },
    // ]

    return (
        <div className="max-w-screen-2xl mx-auto px-4 pt-28">
            {/* <Breadcrumb pages={pages} item={item} /> */}
         
            <ListItem product={product} />
        </div>
    );
}
