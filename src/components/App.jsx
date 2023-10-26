'use client'
// @ts-ignore

import Nav from './Nav'
import Footer from './Footer'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { hideLoading } from '../redux/slices/cartSlice'
import Toaster from 'react-hot-toast'

export default function App({ children }) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(hideLoading())
    }, [dispatch])


    return (
        <div>
            <Nav />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
