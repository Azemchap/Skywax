'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Breadcrumb from "../../components/Breadcrumb";
import Loading from '../../components/Loading'
import { FaPencil } from 'react-icons/fa6'
import toast from 'react-hot-toast'
import { Resend } from 'resend'



export default function PlaceOrderScreen() {

  const {
    cartItems,
    itemsPrice,
    shippingPrice,
    totalPrice,
    taxPrice,
    shippingAddress,
    loading,
  } = useSelector((state) => state.cart)

  const cartItemQty = cartItems.reduce((a, c) => a + c.qty, 0)

  const router = useRouter()

  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push('/shipping')
    }
  }, [shippingAddress, router])


  const SendOrder = () => {
    const {
      cartItems,
      itemsPrice,
      shippingPrice,
      totalPrice,
      taxPrice,
      shippingAddress,
    } = useSelector((state) => state.cart)

    const cartItemQty = cartItems.reduce((a, c) => a + c.qty)

    const resend = new Resend('re_KBRZKmk8_PnGAaUiuTqVtNEm17y7DgAU9')

    console.log(shippingAddress.email);
    console.log(cartItems);


    resend.emails.send({
      from: "My Website - Contact Form <onboarding@resend.dev> ",
      // to: 'nodemdivine5@gmail.com',
      to: 'azemchap@gmail.com',
      reply_to: shippingAddress.address,
      subject: `New Order from ${shippingAddress.fullName} `,
      // react: <ContactForm message={message as string} username={username as string} email={email as string} />,
      html: `${shippingAddress.email} has ordered ${cartItems} items`
    });

    if (resend.emails.send) {
      toast.success('Your order has been placed successfully') 
      // router.push('/success')
    }
  }

  // SendOrder()

  const pages = [
    { id: '1', current: false },
    { id: '2', current: true },
  ]

  return (
    <section className="bg-white">
      <section className="max-w-screen-2xl mx-auto px-4 pb-8 pt-28">

        <Breadcrumb
          pages={pages}
          item={{
            id: '1',
            category: "Shopping Cart",
            categoryLink: "cart",
            name: "Complete order",
          }}
        />

        <h1 className="text-xl font-extrabold text-center tracking-wide text-gray-900 sm:text-4xl my-8">Complete Order</h1>

        {/* <p>{cartItems}</p> */}

        {loading ? (
          <Loading />
        ) : (
          <div className="lg:grid lg:grid-cols-12 gap-6">
            <div className="overflow-x-auto lg:col-span-8">
              <div className="p-4 rounded bg-gray-100">
                <div className='flex items-center justify-between mb-4'>
                  <h2 className="text-lg font-bold">Shipping Address</h2>
                  <Link className="flex items-center text-sm gap-2 border border-[#dc702844] p-2 py-1 rounded text-[#dc7028] " href="/shipping">
                    <FaPencil /> Edit
                  </Link>
                </div>

                <div className='text-sm text-gray-600'>
                  <div className='flex justify-between items-center py-2 border-b'>
                    <div className="font-bold ">Full-name</div>
                    <div className="name">{shippingAddress.fullName}</div>
                  </div>
                  <div className='flex justify-between items-center py-2 border-b'>
                    <div className="font-bold ">Email</div>
                    <div className="name">{shippingAddress.email}</div>
                  </div>
                  <div className='flex justify-between items-center py-2 border-b'>
                    <div className="font-bold ">Address</div>
                    <div className="name">{shippingAddress.address}</div>
                  </div>
                  <div className='flex justify-between items-center py-2 border-b'>
                    <div className="font-bold ">City</div>
                    <div className="name">{shippingAddress.city}</div>
                  </div>
                  <div className='flex justify-between items-center py-2 border-b'>
                    <div className="font-bold ">Country</div>
                    <div className="name">{shippingAddress.country}</div>
                  </div>
                  <div className='flex justify-between items-center py-2 border-b'>
                    <div className="font-bold ">Postal Code</div>
                    <div className="name">{shippingAddress.postalCode}</div>
                  </div>
                </div>
              </div>

              <div className="p-4 mt-8 rounded shadow-lg bg-gray-100">
                <div className='flex items-center justify-between mb-4'>
                  <h2 className="text-lg font-bold">Cart Items</h2>
                  <Link className="flex items-center text-sm gap-2 border border-[#dc702844] p-2 py-1 rounded text-[#dc7028]" href="/cart">
                    <FaPencil /> Edit
                  </Link>
                </div>

                <div className="min-w-full text-sm">
                  {cartItems.map((item) => (
                    <div key={item.id} className=" border-y py-4 flex gap-4">
                      <Link
                        href={`/${item.categoryLink}/${item.id}`}
                      >
                        <Image
                          src={item.src}
                          alt={item.name}
                          width={200}
                          height={200}
                          className="w-16"
                        ></Image>
                      </Link>
                      <div className="flex flex-col gap-2 items-start text-gray-700">
                        <Link
                          href={`/${item.categoryLink}/${item.id}`}
                          className='lg:text-base font-bold'>{item.name}
                        </Link>
                        <div className="flex items-center  gap-4 gap-y-1 flex-wrap">
                          <div className=""><span className="text-xs font-normal">
                            Quantity : </span><span className='font-bold '>{item.qty}</span> </div>

                          <div className="text-gray-700"> Price :
                            <span className="text-xs font-normal ml-2 ">
                              FCFA{" "}</span><span className='font-bold '>{item.price}</span>
                          </div>
                          <div className="text-gray-700">Subtotal :
                            <span className="text-xs font-normal ml-2 ">
                              FCFA{" "}</span><span className='font-bold '>{item.qty * item.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <section
              aria-labelledby="summary-heading"
              className="overflow-x-auto lg:col-span-4 mt-8 bg-gray-100 h-fit rounded-lg p-4  lg:mt-0"
            >
              <h2
                id="summary-heading"
                className="text-lg mb-2 font-bold text-gray-900"
              >Order Summary</h2>
              <dl className="my-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-md text-gray-600"> (
                    {cartItemQty > 1
                      ? cartItemQty + " items"
                      : cartItemQty + " item"}
                    )</dt>
                  <div className="text-base font-bold text-gray-900 ">
                    <span className="text-xs font-normal ml-2 text-gray-700">
                      {" "} FCFA{" "}</span>{itemsPrice}
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Shipping estimate</span>
                  </dt>
                  <dd className="text-base font-bold text-gray-900">
                    <span className="text-xs font-normal text-gray-700">
                      {" "}
                      FCFA{" "}
                    </span>
                    {shippingPrice}
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="flex text-sm text-gray-600">
                    <span>Tax estimate</span>
                  </dt>
                  <dd className="text-base font-bold text-gray-900">
                    <span className="text-xs font-normal text-gray-700">
                      FCFA{" "}
                    </span>
                    {taxPrice}
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="text-base font-bold text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-bold text-gray-900">
                    {" "}
                    <span className="text-xs font-normal text-gray-700">
                      {" "}
                      FCFA{" "}
                    </span>
                    {parseInt(totalPrice)}
                  </dd>
                </div>
              </dl>
              <button
                onClick={() => {
                  SendOrder()
                }}
                className="my-2 w-full group rounded-sm text-sm bg-[#dc7028]  p-3 text-white tracking-wider uppercase"
                type='submit'
              >
                Complete order
              </button>
            </section>
          </div>
        )}
      </section>
    </section>
  )
}
