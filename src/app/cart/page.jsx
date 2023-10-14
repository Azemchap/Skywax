'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/slices/cartSlice'
import { ChevronLeftIcon, QuestionMarkCircleIcon, ShoppingCartIcon, XIcon } from '@heroicons/react/outline'
import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import { ArrowLeftIcon } from '@heroicons/react/solid'

export default function CartPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  // @ts-ignore
  const { loading, cartItems, itemsPrice, shippingPrice, taxPrice } = useSelector((state) => state.cart)

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const addToCartHandler = async (plan, qty) => {
    dispatch(addToCart({ ...plan, qty }))
  }

  const goToShipping = () => {
    return router.push('/shipping')
  }

  const pages = [
    { id: '1', current: true },
  ]

  return (

    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 pt-28">
        <Breadcrumb pages={pages} item={{
          id: '',
          category: '',
          categoryLink: '',
          name: 'Shopping Cart'
        }} />
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl my-4">Shopping Cart</h1>
        {loading ? (
          <div className="bg-gray-100 rounded-sm my-8 pb-40 p-4"> Loading...</div>
        ) : cartItems.length === 0 ? (
          <div className='bg-gray-100 rounded-sm my-8 px-4 py-20 flex flex-col items-center text-center'>
            <div className='  pb-4 flex  text-gray-600 items-center gap-2'>
              Your cart is empty <ShoppingCartIcon className='w-6' />
            </div>
            <Link className=' underline flex gap-2 text-green-600 text-sm' href="/"><ArrowLeftIcon className='w-3' /> Go back to shopping</Link>
          </div>
        ) : (
          <div className="my-8 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section className="lg:col-span-7">
              <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex py-4">
                    <div className="flex-shrink-0">
                      <Link
                        href={`/${item.categoryLink}/${item.id}`}
                        className="flex items-center"
                      >
                        <Image className="w-24 h-24 rounded-md object-center object-cover"
                          src={item.src}
                          alt={item.name}
                          width={200}
                          height={200}
                        />
                      </Link>
                    </div>

                    <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <Link href={`/${item.categoryLink}/${item.id}`} className="font-medium text-gray-700 hover:text-gray-800 text-lg">
                                {item.name}
                              </Link>
                            </h3>
                          </div>
                          <p className="mt-1 font-normal text-amber-600 "><span className='text-xs text-amber-600'> $ </span> {item.price}</p>
                        </div>


                        <div className="mt-4 sm:mt-0 sm:pr-9">
                          <div className="flex gap-4 my-6 items-start">
                            <div className="flex flex-col gap-2 ">
                              <label htmlFor="length">Length, {item.length}</label>
                              <input type='number' name="length" placeholder="1 yard" id="length"
                                value={item.length}
                                onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                                className="rounded-sm w-24 lg:w-40 max-w-full "
                              />
                            </div>
                            <div className="flex flex-col gap-2 ">
                              <label htmlFor="length">Quantity, {item.qty}</label>
                              <input type='number' name="length" placeholder="1 yard" id="length"
                                value={item.qty}
                                onChange={(e) => addToCartHandler(item, Number(e.target.value))} className="rounded-sm w-24 lg:w-40 max-w-full "
                              />
                            </div>
                          </div>




                          <div className="absolute top-0 right-0">
                            <button type="button" onClick={() => removeFromCartHandler(item.id)} className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Remove</span>
                              <XIcon className="h-5 w-5" aria-hidden="true" />
                            </button>


                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
            >
              <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                Order summary
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-md text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900 ">({cartItems.reduce((a, c) => a + c.qty, 0)} items)
                    <span className='text-xs ml-2 text-gray-700'> $ </span>
                    {itemsPrice}</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Shipping estimate</span>
                  </dt>
                  <dd className="text-md font-medium text-gray-900"><span className='text-xs text-gray-700'> $ </span>{shippingPrice}</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="flex text-sm text-gray-600">
                    <span>Tax estimate</span>
                  </dt>
                  <dd className="text-md font-medium text-gray-900"><span className='text-xs text-gray-700'> $ </span>{taxPrice}</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Order total</dt>
                  <dd className="text-base font-medium text-gray-900" > <span className='text-xs text-gray-700'> $ </span>{parseInt(itemsPrice) + parseInt(taxPrice) + parseInt(shippingPrice)}</dd>
                </div>
              </dl>

              <div className="mt-6">
                <button onClick={() => goToShipping()}
                  className="primary-button w-full"
                >
                  Proceed to checkout
                </button>
              </div>
            </section>
          </div>
        )
        }
      </div>
    </div>
  )
}