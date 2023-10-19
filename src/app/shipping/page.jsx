'use client'

import { LockClosedIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../../redux/slices/cartSlice'
import Breadcrumb from '../../components/Breadcrumb'

export default function ShippingAddressPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm()
  const router = useRouter()
  const dispatch = useDispatch()
  const { shippingAddress } = useSelector((state) => state.cart)

  useEffect(() => {
    setValue('fullName', shippingAddress.fullName)
    setValue('email', shippingAddress.email)
    setValue('address', shippingAddress.address)
    setValue('city', shippingAddress.city)
    setValue('postalCode', shippingAddress.postalCode)
    setValue('country', shippingAddress.country)
  }, [setValue, shippingAddress])

  const submitHandler = ({ fullName, email, address, city, postalCode, country }) => {
    dispatch(
      saveShippingAddress({ fullName, email, address, city, postalCode, country })
    )

    router.push('/placeorder')
  }

  const pages = [{ id: "1", current: false },
  { id: "2", current: true }];

  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 pt-28">

        <Breadcrumb
          pages={pages}
          item={{
            id: "",
            category: "Shopping Cart",
            categoryLink: "cart",
            name: "Shipping Address",
          }}
        />

        <h1 className="text-xl font-extrabold text-center tracking-wide text-gray-900 sm:text-4xl my-4">Shipping Address</h1>

        <form onSubmit={handleSubmit(submitHandler)} className="mt-8 max-w-lg mx-auto">
          <div className="grid grid-cols-12 gap-y-6 gap-x-4">

            <div className="col-span-full">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full names
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  autoComplete="given-name"
                  autoFocus
                  {...register('fullName', {
                    required: 'Please enter full name',
                  })}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                />
                {errors.fullName && (
                  <div className="text-red-500">{errors.fullName.message}</div>
                )}
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="email"
                  name="email"
                  autoComplete="email"
                  {...register('email', {
                    required: 'Please enter email',
                  })}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="address"
                  name="address"
                  autoComplete="street-address"
                  {...register('address', {
                    required: 'Please enter address',
                    minLength: {
                      value: 3,
                      message: 'Address is more than 2 chars',
                    },
                  })}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                />
                {errors.address && (
                  <div className="text-red-500">{errors.address.message}</div>
                )}
              </div>
            </div>

            <div className="col-span-full sm:col-span-4">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  {...register('country', {
                    required: 'Please enter country',
                  })}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                />
                {errors.country && (
                  <div className="text-red-500 ">{errors.country.message}</div>
                )}
              </div>
            </div>

            <div className="col-span-full sm:col-span-4">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="city"
                  {...register('city', {
                    required: 'Please enter city',
                  })}
                  name="city"
                  autoComplete="address-level2"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                />
                {errors.city && (
                  <div className="text-red-500 ">{errors.city.message}</div>
                )}
              </div>
            </div>

            <div className="col-span-full sm:col-span-4">
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                Postal code
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  autoComplete="postal-code"
                  {...register('postalCode', {
                    required: 'Please enter postal code',
                  })}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                />
                {errors.postalCode && (
                  <div className="text-red-500 ">{errors.postalCode.message}</div>
                )}
              </div>
            </div>
          </div>

          <p className="flex justify-center text-sm font-medium text-gray-500 mt-6">
            <LockClosedIcon className="w-5 h-5 text-gray-400 mr-1.5" aria-hidden="true" />
            Shipping details stored in plain text
          </p>

          <div className="my-8 flex justify-between">
            <button className="my-2 w-full group rounded-sm text-sm bg-[#dc7028]  p-3 text-white tracking-wider uppercase">Next</button>
          </div>
        </form>
      </div>
    </div>

  )
}
