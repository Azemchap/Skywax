// @ts-nocheck
'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { addToCart } from '../redux/slices/cartSlice'
import { ArrowRightIcon } from '@heroicons/react/outline'


export default function AddToCart({
  item,
  redirect = true,
  increasePerClick = false,
}) {
  const dispatch = useDispatch()

  // const { cartItems } = useSelector((state) => state.cart)
  const router = useRouter()
  const [qty, setQty] = useState(1)
  const [length, setLength] = useState(1)

  const addToCartHandler = () => {
    let newQty = qty
    let newLength = length
    // if (increasePerClick) {
    //   const existItem = cartItems.find((x) => x.id === item.id)
    //   if (existItem) {
    //     if (existItem.qty + 1 <= plan.countInStock) {
    //       newQty = existItem.qty + 1
    //     } else {
    //       return alert('No more items exist')
    //     }
    //   }
    // }
    dispatch(addToCart({ ...item, qty: newQty, length: newLength }))

    if (redirect) router.push('/cart')
  }

  return (
    <>
      {item.stocked === true ? (
        <>
          <div className="flex gap-4 my-6 items-start">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="length">Length</label>
              <input type='number' name="length" placeholder="1 yard" id="length"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="rounded-sm w-24 lg:w-40 max-w-full "
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="length">Quantity</label>
              <input type='number' name="length" placeholder="1 yard" id="length"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))} className="rounded-sm w-24 lg:w-40 max-w-full "
              />
            </div>
          </div>

          <aside className="bg-gray-200 text-sm font-light border border-gray-300 lg:w-1/2 max-w-full p-4 mb-8">
            For example: If you want to order 1 piece ( 3 yard continues), Select Yard: 1, and select Quantity: 3. (You will receive 1 piece of 274 cm). (Each yard equals 91cm)
          </aside>

          <h2>
            <span className="text-green-500 font-medium">In stock </span> - shipped out within 1-2 business days
          </h2>

          <button onClick={addToCartHandler}
            className="my-2 group flex align-middle justify-center gap-4  rounded-sm text-sm bg-[#dc7028] w-full md:max-w-xs p-3 text-white tracking-wider">
            ADD TO CART{" "}
            <ArrowRightIcon className="w-4 transition-all group-hover:translate-x-1 mt-1 opacity-75" />
          </button>
        </>
      ) : (
        <h4 className="bg-red-100 p-4 my-4 py-8 text-center text-red-500 font-medium">
          Out of stock
        </h4>

      )}
    </>
  )
}
