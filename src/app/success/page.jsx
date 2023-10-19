'use client'

import { ArrowLeftIcon, CheckIcon, FastForwardIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/navigation'
import { clearCart } from '../../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'
import Breadcrumb from "../../components/Breadcrumb";
import Link from 'next/link'
import React from 'react'



export default function SuccessPage() {
    const router = useRouter()
    const dispatch = useDispatch()


    dispatch(clearCart())


    const goToItems = () => {
        return router.push('/')
    }

    const pages = [{ id: "1", current: true }];

    return (
        <div className="bg-white">
            <div className="max-w-screen-2xl mx-auto px-4 pt-28 pb-40">

                <Breadcrumb
                    pages={pages}
                    item={{
                        id: "",
                        category: "",
                        categoryLink: "",
                        name: "Order status",
                    }}
                />

                <h1 className="text-3xl font-extrabold tracking-wide text-center  text-gray-900 sm:text-4xl mt-4 my-8">
                    Order status
                </h1>

                <div className="max-w-lg m-auto rounded-lg p-4 shadow-xl transform transition-all my-8 ">
                    <div>
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                            <CheckIcon className="h-12 w-12 text-green-600" aria-hidden="true" />
                        </div>
                        <div className="mt-3 text-center sm:mt-5">
                            <h1 as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                Your order has been placed successfully.
                            </h1>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Thank you for placing an order. we will get back to you via e-mail with how to proceed. <Link className='underline' href="https://wa.me/+237654352368">click here</Link> to chat directly on whatsapp.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                        <button
                            type="button"
                            className="flex justify-center items-center gap-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
                            onClick={() => goToItems()}
                        >
                            <ArrowLeftIcon className="w-3" /> Go back to shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
