// @ts-nocheck
'use client'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'


export default function AddToCart({
  item,
  redirect = true,
}) {
  // const dispatch = useDispatch()
  // const { cartItems } = useSelector((state) => state.cart)
  // const router = useRouter()
  // const [qty, setQty] = useState(1)

  // const addToCartHandler = () => {
  //   dispatch(addToCart({ ...item, qty }))
  //   if (redirect) router.push('/cart')
  // }

  return (
    <div>
      {item.countInStock > 0 ? (
        <>
          {/* <div className="flex gap-4 my-6 items-start">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="qty">Quantity</label>
              <select className="rounded-sm sm:w-40 w-40"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              >
                {[...Array(item.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
          </div> */}

          {/* <aside className="bg-gray-200 text-sm font-light border border-gray-300 lg:w-1/2 max-w-full p-4 mb-8">
            For example: If you want to order 1 piece (3 yard continues), select Quantity (1). You will receive 1 piece of 274cm (each yard equals 91cm). Contact us through  <Link href="https://wa.me/+237654352368" className='inline-block mx-1'> <span className='hover:text-[#dc7028] underline flex gap-1  items-center underline-offset-2'><FaWhatsapp />  Whatsapp </span>
            </Link> for more specifications on your orders.
          </aside> */}

          <h2>
            <span className="text-green-500 font-medium">In stock </span> - shipped out within 1 - 3 business days
          </h2>

          {/* <button onClick={addToCartHandler}
            className="my-2 group flex align-middle justify-center gap-4  rounded-sm text-sm bg-[#dc7028] w-full md:max-w-xs p-3 text-white tracking-wider">
            ADD TO CART{" "}
            <ArrowRightIcon className="w-4 transition-all group-hover:translate-x-1 mt-1 opacity-75" />
          </button> */}
        </>
      ) : (
        <>
          <h4 className="bg-rose-50 p-4 my-4 py-8 text-center text-red-500 font-medium flex justify-center items-center gap-4 flex-col">
            Out of stock
            <Link className=' underline flex gap-2 text-green-600 text-sm' href="/"><ArrowLeftIcon className='w-3' /> Shop other products</Link>
          </h4>
        </>

      )}
    </div>
  )
}
