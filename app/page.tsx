
import { ChevronDoubleRightIcon } from "@heroicons/react/outline"
import Image from 'next/image'
import Link from 'next/link'
import { Category, ProductCard } from './lib/interface'
import { client, urlFor } from './lib/sanity'
import { formatCurrency, formatNumber } from "../@/lib/utils"

async function getCategory() {
  const query = `
  *[_type == 'category'] | order(_createdAt desc) {
  title,
    "currentSlug": slug.current,
    
}`

  const data = await client.fetch(query)

  return data
}


async function getProduct() {
  const query = `
  *[_type == 'product'] | order(_createdAt desc) {
  name,
    price,
    category,
    image,
    "currentSlug": slug.current,
    
}`

  const data = await client.fetch(query)

  return data
}


export default async function Home() {

  const products: ProductCard[] = await getProduct()
  const category: Category[] = await getCategory()

  const categoryNames = category.map(category => category.title);

  const item = categoryNames.map(item => {
    return item
  });




  const categorySlug = category.map(category => category.currentSlug);

  console.log(item)



  return (
    <div className=' bg-gray-50 pt-28 border-t-blue-600 border-t-4 px-4 min-h-screen'>
      <div className="max-w-screen-2xl mx-auto">
        <Image className='max-h-64 px-2' src='/images/fabrics.jpg' alt='hero image' width={1200} height={1200} />
        <div className="text-center mt-4 md:mt-8">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-xl sm:text-4xl">Welcome to SKYWAX</span>
            <span className=" block text-sm sm:text-xl text-[#dc7028]">Your online store for fabrics & fashion</span>
          </h1>
          <p className="mt-3 max-w-lg mx-auto text-gray-500 text-xs sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We offer a large collection of high quality African fabrics, headwraps, earrings, fashion, hair accessories & much more!
            We ship worldwide!
          </p>
        </div>

        <section className='fabrics__section'>
          <div className="container mx-auto xl:px-8 mt-8 mb-12">
            <div className="flex justify-between items-center">
              <h2 className="py-4 my-4 text-lg font-semibold">All products</h2>
            </div>
            <div className=" grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
              {products.map((product) => (
                <Link
                  href={`${categorySlug}/${product.currentSlug}`}
                  key={product.currentSlug}
                  className="relative text-gray-60 cursor-pointer group  overflow-hidden"
                >
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={2400}
                    height={2400}
                    quality={100}
                    className="group-hover:scale-110 transition-all ease-in-out duration-700"
                  />
                  <div className="my-4 text-center text-xs sm:text-sm p-2">
                    <p className=" mb-3 line-clamp-2">{product.name}</p>
                    <p className=" text-[#dc7028] font-bold text-base">
                      <span className=" text-xs font-normal"></span> {formatCurrency(product.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
